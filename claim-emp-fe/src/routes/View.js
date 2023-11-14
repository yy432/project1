import styles from './View.module.css';
import baseAPI from '../api/employee-api';
import { useState, useEffect } from 'react';
import Table from '../components/Table';


function View(){

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
  const employeeGetOne = async (id) => {
    try{
    const response = await baseAPI.get(`/employees/${id}`);
    console.log('GET status', response.status);
    console.log('GET data', response.data);
    }catch(error){
      console.log(error.message)
    }
  };
    
  return (
  //<div className={styles.container}>
  <div>
      <div className={styles.sidebar}>
        
        <h2>View Employee</h2>
        {/* <button onClick={()=>employeeGet()}>Load Employees</button> */}
        <button onClick={()=>employeeGetOne(2)}>Get employee 2</button>
        <Table list={employee} />

      </div>
  </div>
  )

}

export default View;