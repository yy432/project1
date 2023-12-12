import baseAPI from '../api/employee-api';
import { useState, useEffect } from 'react';
import AddForm from '../components/AddForm';



function Employee() {

  //async await

  const postEmployee = async (newEmployee) => {
    try {
      const response = await baseAPI.post('employees', newEmployee)
      console.log('GET status', response.status);
      console.log('GET data', response.data);
      alert("Employee Upload Successful")
    } catch (error) {
      console.log(error.message)
      alert("Invalid input")
    }
  };

  // const deleteEmployee = async (id) => {
  //   try {
  //     const response = await baseAPI.delete(`employees/${id}`);
  //     console.log('GET status', response.status);
  //     console.log('GET data', response.data);
  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // };

  return (
    <div >
      <h1>Employee</h1>
      <div className='form-container'>
        <AddForm handlerAddItem={postEmployee} />
      </div>

    </div>
  )

}

export default Employee;