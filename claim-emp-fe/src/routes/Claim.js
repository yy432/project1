import baseAPI from '../api/employee-api';
import { useState, useEffect } from 'react';
import AddClaim from '../components/AddClaim';

function Claim(){
  const [employee,setEmployee] = useState([]); 

  useEffect(()=>{ 
    employeeGet();
  },[])  
  
  const employeeGet = async () => {
    try{
    const response = await baseAPI.get('/employees');  
    console.log('GET status', response.status);
    console.log('GET data', response.data);
    setEmployee(response.data);
    }catch(error){
      console.log(error.message)
    }
  };



//async await

const postClaim = async (newClaim, employeeId) => {
  try{
    console.log(employeeId);
  const response = await baseAPI.post(`employees/${employeeId.id}/claims`, newClaim)
  console.log('GET status', response.status);
  console.log('GET data', response.data);
  alert("Claim Submitted")
  }catch(error){
    console.log("employeeId.id")
    console.log(employeeId.id)
    console.log("employeeId")
    console.log(employeeId)
    console.log(error.message)
    alert("Invalid input")
  }
};

  return (
  <div>
  <h1>Claim</h1>
  <AddClaim handlerAddClaim={postClaim} employeeRecord={employee}/>
  </div>
  )
  
}

export default Claim;

