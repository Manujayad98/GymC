import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Deletemodal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <>
      

      <Modal
        show={props.show}
        onHide={handleClose}
        //backdrop="static" ensures clicking outside and esc key does not close the modal
        keyboard={false}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger">Remove</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Deletemodal;