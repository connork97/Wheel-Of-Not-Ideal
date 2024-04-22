import React, {useState} from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ConfirmClubModal = ({showModal, setShowModal, confirmClub, setAddClubAnyway}) => {
    // const [show, setShow] = useState(false);

    const handleClose = () => setShowModal(false);

    const handleAddClubAnyway = () => {
        setAddClubAnyway(true);
        handleClose();
    }
    
    return (
      <>  
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Club</Modal.Title>
          </Modal.Header>
          <Modal.Body>You already have "{confirmClub}" on the wheel.<br></br>Are you sure you want to add it again?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleAddClubAnyway}>
              Yes, I'm sure
            </Button>
            <Button variant="primary" onClick={handleClose}>
              No, don't add "{confirmClub}" again
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
};

export default ConfirmClubModal;