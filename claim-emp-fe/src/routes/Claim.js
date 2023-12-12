import baseAPI from '../api/employee-api';
import { useState, useEffect, useContext } from 'react';
import AddClaim from '../components/AddClaim';
import EmployeeContext from '../contexts/EmployeeContext';

function Claim() {
  // const [employee, setEmployee] = useState([]);

  // useEffect(() => {
  //   getEmployee();
  //   getClaim();
  // }, [claim, employee])

  // useEffect(() => {
  //   getEmployee();
  //   getClaim();
  // }, [claim, employee])

  const ctx = useContext(EmployeeContext);

  const employeeRecord = ctx.employee;

  //async await

  const postClaim = async (newClaim, employeeId) => {
    try {
      console.log(employeeId);
      const response = await baseAPI.post(`employees/${employeeId.id}/claims`, newClaim)
      console.log('GET status', response.status);
      console.log('GET data', response.data);
      alert("Claim Submitted")
    } catch (error) {
      console.log(error.message)
      alert("Invalid input")
    }
  };

  return (
    <div>
      <h1>Claim</h1>
      <div className='form-container'>
        <AddClaim handlerAddClaim={postClaim} employeeRecord={employeeRecord} />
      </div>

    </div>
  )

}

export default Claim;

