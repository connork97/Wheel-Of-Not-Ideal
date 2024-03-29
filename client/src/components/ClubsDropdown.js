import React, {useState, useEffect} from 'react';

import Dropdown from 'react-bootstrap/Dropdown';

const ClubsDropdown = ({clubs, setActiveClubs}) => {

    const [dropdownText, setDropdownText] = useState('');

    useEffect(() => {
        if (clubs[0] === '3 Wood') {
            setDropdownText('Woods and Hybrids');
        } else if (clubs[0] === '1 Iron') {
            setDropdownText('Irons');
        } else if (clubs[0] === 'Gap Wedge') {
            setDropdownText('Wedges');
        }
    }, []);

    const addClub = (club) => {
        setActiveClubs((prevClubs) => {
            return [...prevClubs, club]
        });
    };

    const renderClubOptions = () => {
        return clubs.map((club, index) => (
            <Dropdown.Item key={index} href="#/action-1" onClick={addClub(club)}>
                {club}
            </Dropdown.Item>
        ));
    };

    

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {dropdownText}
            </Dropdown.Toggle>
        <Dropdown.Menu>
            {renderClubOptions()}
        </Dropdown.Menu>
      </Dropdown>
    )

}

export default ClubsDropdown;