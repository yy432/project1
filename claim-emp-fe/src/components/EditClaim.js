import { useState, useContext, useEffect } from 'react';
import { NavItem } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EmployeeContext from '../contexts/EmployeeContext';


function EditClaim({ claim }) {
  const ctx = useContext(EmployeeContext);
  const [show, setShow] = useState(false);

  // const [id, setId] = useState("");
  // const [claimDate, setClaimDate] = useState("");
  // const [claimAmount, setClaimAmount] = useState("");
  // const [remarks, setRemarks] = useState("");

  const [id, setId] = useState(claim.id);
  const [claimDate, setClaimDate] = useState(claim.claimDate);
  const [claimAmount, setClaimAmount] = useState(claim.claimAmount);
  const [remarks, setRemarks] = useState(claim.remarks);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const toUpdateClaim = { claimDate, claimAmount, remarks };
    ctx.putClaim(id, toUpdateClaim);
    handleClose();
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Update
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Claim</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} id='editmodal' className="w-full max-w-sm">
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="claimDate">
                  Claim Date
                </label>
              </div>
              <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="claimDate"
                  type="text"
                  value={claimDate}
                  onChange={(e) => setClaimDate(e.target.value)}
                  name="claimDate"
                  placeholder="Claim Date"
                />
              </div>
            </div>

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="claimAmount">
                  Claim Amount
                </label>
              </div>
              <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="claimAmount"
                  type="text"
                  name="claimAmount"
                  placeholder="Claim Amount"
                  value={claimAmount}
                  onChange={(e) => setClaimAmount(e.target.value)}
                />
              </div>
            </div>

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="remarks">
                  Remarks
                </label>
              </div>
              <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="remarks"
                  type="text"
                  placeholder="Remarks"
                  value={remarks}
                  onChange={(e) => setRemarks(e.target.value)}
                  name="remarks"

                />
              </div>
            </div>

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button className="btn btn-primary" form="editmodal" >Update</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditClaim;