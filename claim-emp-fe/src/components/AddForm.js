import { useState, useContext } from "react";
import EmployeeContext from '../contexts/EmployeeContext';

import Button from 'react-bootstrap/Button';


function AddForm() {


  const [item, setItem] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  })

  const ctx = useContext(EmployeeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    ctx.postEmployee(item);

  };

  const handleChange = (e) => {
    setItem((prevItem) => {

      return {
        ...prevItem,
        [e.target.name]: e.target.value
      };

    });
  };

  return (
    <div className="form-group">

      <form onSubmit={handleSubmit}>
        <div className="input-align">
          <div className="form-lab">
            <label className="form-label">First Name:</label>
          </div>
          <input name="firstName" type="text" placeholder="Enter First Name of Employee" onChange={handleChange} value={item.firstName} className="form-control" />
        </div>
        <br />

        <div className="input-align">
          <div className="form-lab">
            <label>Last Name:</label>
          </div>
          <input name="lastName" type="text" placeholder="Enter Last Name of Employee" onChange={handleChange} value={item.lastName} className="form-control" />
        </div>

        <br />

        <div className="input-align">
          <div className="form-lab">
            <label>Email Address:</label>
          </div>
          <input name="email" type="text" placeholder="Enter Email Address" onChange={handleChange} value={item.email} className="form-control" />
        </div>

        <br />

        <div className="input-align">
          <div className="form-lab">
            <label>Department:</label>
          </div>
          <input name="department" type="text" placeholder="Enter Department of Employee" onChange={handleChange} value={item.department} className="form-control" />
        </div>

        <br />

        <button type="button" class="btn btn-success">Submit</button>

      </form>
    </div>
  );
}

export default AddForm