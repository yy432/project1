import { useState, useContext, useEffect } from 'react';
import { NavItem } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EmployeeContext from '../contexts/EmployeeContext';


function EditEmployee({oneEmployee}) {
  const ctx = useContext(EmployeeContext);  
  const [show, setShow] = useState(false);
  const [id, setId] = useState(oneEmployee.id);
  const [firstName, setFirstName] = useState(oneEmployee.firstName);
  const [lastName, setLastName] = useState(oneEmployee.lastName);
  const [email, setEmail] = useState(oneEmployee.email);
  const [department, setDepartment] = useState(oneEmployee.department);
  const toUpdateEmployee = {firstName, lastName, email, department};

  // useEffect(()=>{ 
  //   handleClose()
  //   console.log("called")
  // },[oneEmployee]);  


  const handleClose = () =>setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    ctx.putEmployee(id, toUpdateEmployee);
   
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
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={handleSubmit} id='editmodal' className="w-full max-w-sm">
          <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="firstName">
                  First Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                id="firstName" 
                type="text" 
                value={firstName}
                onChange={(e)=> setFirstName(e.target.value)}
                name="firstName"
                placeholder="First Name"
                />
              </div>
            </div>

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="lastName">
                  Last Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                id="lastName" 
                type="text"
                name="lastName"
                placeholder="Last Name" 
                value={lastName}  
                onChange={(e)=> setLastName(e.target.value)}
                
                />
              </div>
            </div>

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="email">
                  Email
                </label>
              </div>
              <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                id="email" 
                type="text"
                placeholder="Email"
                value={email} 
                onChange={(e)=> setEmail(e.target.value)}
                name="email" 
              
                />
              </div>
            </div>


            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="department">
                  Department
                </label>
              </div>
              <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                id="department" 
                type="text" 
                name="department" 
                value={department}
                placeholder="Department"
                onChange={(e)=> setDepartment(e.target.value)} 
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

export default EditEmployee;