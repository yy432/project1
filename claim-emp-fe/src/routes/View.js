import styles from './View.module.css';
import baseAPI from '../api/employee-api';
import { useState, useEffect, useContext } from 'react';
import Table from '../components/Table';
import EmployeeContext from '../contexts/EmployeeContext';


function View(){

  const ctx = useContext(EmployeeContext); 

  useEffect(()=>{ 
    ctx.getEmployee();
  },[])  
  
  return (
  //<div className={styles.container}>
  <div>
      <div className={styles.sidebar}>
        
        <h2>View Employee</h2>
        <Table />

      </div>
  </div>
  )

}

export default View;