import baseAPI from '../api/employee-api';
import { useState, useEffect } from 'react';
import AddForm from '../components/AddForm';


function Employee(){

 //async await

 const postEmployee = async (newEmployee) => {
  try{
  const response = await baseAPI.post('employees', newEmployee)
  console.log('GET status', response.status);
  console.log('GET data', response.data);
  }catch(error){
    console.log(error.message)
    alert("Invalid input")
  }
};




 const putEmployee = async (id) => {
  try{
  const response = await baseAPI.put(`employees/${id}`, {firstName:'tammy', lastName:'Tan', email:'KenTan@gmail.com', department:'finance'});
  console.log('GET status', response.status);
  console.log('GET data', response.data);
  }catch(error){
    console.log(error.message);
    
  }
};


const deleteEmployee = async (id) => {
  try{
  const response = await baseAPI.delete(`employees/${id}`);
  console.log('GET status', response.status);
  console.log('GET data', response.data);
  }catch(error){
    console.log(error.message)
  }
};

  return (
  <div>
  <h1>Employee</h1>
  <button onClick={()=>postEmployee()}>Load Employee 1</button>
  <button onClick={()=>putEmployee(2)}>Update Employee id 2</button>
  <button onClick={()=>deleteEmployee(7)}>Delete Employee id 3</button>
  <AddForm handlerAddItem={postEmployee}/>
  </div>
  )

}

export default Employee;