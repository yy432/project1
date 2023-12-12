import { useState, useContext, useEffect } from 'react';
import { NavItem } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EmployeeContext from '../contexts/EmployeeContext';


function DeleteClaim({ claim }) {
  const ctx = useContext(EmployeeContext);
  const [show, setShow] = useState(false);
  const [id, setId] = useState(claim.id);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    ctx.deleteClaim(id);

    handleClose();
  }

  return (
    <>
      <button type="button" class="btn btn-danger" onClick={handleShow}>Delete</button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Claim</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} id='editmodal' className="w-full max-w-sm">
            <div>{"Delete claim " + id + " ?"} </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button className="btn btn-danger" form="editmodal" >Delete</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteClaim;