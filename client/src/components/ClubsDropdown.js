import React, {useState, useEffect} from 'react';

import styles from './ClubsDropdown.module.css';

import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import ConfirmClubModal from './ConfirmClubModal';

const ClubsDropdown = ({clubs, setActiveClubs, activeClubs}) => {

    const [dropdownText, setDropdownText] = useState('');

    const [showModal, setShowModal] = useState(false);
    const [confirmClub, setConfirmClub] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [addClubAnyway, setAddClubAnyway] = useState(false);
  
    useEffect(() => {
        if (addClubAnyway) {
            setActiveClubs((prevClubs) => {
                return [...prevClubs, confirmClub];
            });
        }
        setAddClubAnyway(false);
    }, [addClubAnyway])

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleInputBlur = () => {
      setIsOpen(false);
    };
  
    const addClub = (club) => {
        console.log("TYPE OF", typeof club)
        const lowerCaseActiveClubsArr = activeClubs.map(str => str.toLowerCase());
        const splitNewClub = club.split(' ');
        const newClub = splitNewClub.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        setConfirmClub(newClub);
        if (!lowerCaseActiveClubsArr.includes(club.toLowerCase())) {
            setActiveClubs((prevClubs) => {
                return [...prevClubs, newClub];
            });
        } else {
            setShowModal(true);
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        addClub(inputValue);
        setInputValue('');
        setIsOpen(false);
    };

    useEffect(() => {
        if (clubs[0] === '5 Wood') {
            setDropdownText('Woods and Hybrids');
        } else if (clubs[0] === '1 Iron') {
            setDropdownText('Irons');
        } else if (clubs[0] === 'Gap Wedge') {
            setDropdownText('Wedges');
        } else {
            setDropdownText('Other')
        };
    }, []);

    const renderClubOptions = () => {
        if (clubs.length) {
            return clubs.map((club, index) => (
                <Dropdown.Item key={index} onClick={() => addClub(club)} enabled={false}>
                    {club}
                </Dropdown.Item>
            ));
        } else {
            return (
                        <Form onSubmit={handleFormSubmit}>
                            <Form.Control
                                type="text"
                                placeholder="Type something..."
                                value={inputValue}
                                onChange={handleInputChange}
                                onBlur={handleInputBlur}
                                autoFocus
                                className={styles.otherClubInput}
                            />
                        </Form>
            )
        }
    };

    

    return (
        <div>
            <ConfirmClubModal
                showModal={showModal}
                setShowModal={setShowModal}
                confirmClub={confirmClub}
                setAddClubAnyway={setAddClubAnyway}
            >
            </ConfirmClubModal>
            <Dropdown show={isOpen} onToggle={handleToggle}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {dropdownText}
                </Dropdown.Toggle>
            <Dropdown.Menu>
                {renderClubOptions()}
            </Dropdown.Menu>
        </Dropdown>
      </div>
    );
};

export default ClubsDropdown;