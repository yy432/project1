import baseAPI from '../api/employee-api';
import { createContext,useEffect, useState } from 'react';


const EmployeeContext = createContext();

export function EmployeeProvider ({children}) {
  const [employee,setEmployee] = useState([]); 
  const [claim,setClaim] = useState([]); 

  useEffect(()=>{ 
    getEmployee();
    getClaim();
  },[])  
  
  const getEmployee = async () => {
    try{
    const response = await baseAPI.get('/employees');  
    console.log('GET status', response.status);
    console.log('GET data', response.data);
    setEmployee(response.data);
    }catch(error){
      console.log(error.message)
    }
  };


  const getClaim = async () => {
    try{
    const response = await baseAPI.get('/claims');  
    console.log('GET status', response.status);
    console.log('GET data', response.data);
    setClaim(response.data);
    }catch(error){
      console.log(error.message)
    }
  };

  const putEmployee = async (id, updateEmployee) => {
    try{
    const response = await baseAPI.put(`employees/${id}`, updateEmployee);
    console.log('GET status', response.status);
    console.log('GET data', response.data);
    // alert("Employee Update Successful");
    }catch(error){
      console.log(error.message);
  
    }
  };



  const putClaim = async (id, updateClaim) => {
    try{
    const response = await baseAPI.put(`/claims/${id}`, updateClaim);  
    console.log('GET status', response.status);
    console.log('GET data', response.data);
    }catch(error){
      console.log(error.message)
    }
  };


  const deleteClaim = async (id) => {
    try{
    const response = await baseAPI.delete(`/claims/${id}`);
    console.log('GET status', response.status);
    console.log('GET data', response.data);
    }catch(error){
      console.log(error.message)
    }
  };



  const context = {
    employee: employee,
    putEmployee:putEmployee,
    getEmployee:getEmployee,
    

    claim:claim,
    getClaim:getClaim,
    putClaim:putClaim,
    deleteClaim:deleteClaim
  }

  return (
    <EmployeeContext.Provider value={context}>
      {children}
    </EmployeeContext.Provider>
) 


}

export default EmployeeContext;