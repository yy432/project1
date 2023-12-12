import styles from './View.module.css';
import baseAPI from '../api/employee-api';
import { useState, useEffect, useContext } from 'react';
import Table from '../components/Table';
import EmployeeContext from '../contexts/EmployeeContext';


function View() {

  const ctx = useContext(EmployeeContext);
  const list = ctx.employee;

  useEffect(() => {
    ctx.getEmployee();
  }, [])

  return (
    //<div className={styles.container}>
    <div>
      <div >

        <h1>View Employee</h1>
        <Table />
      </div>
    </div>
  )

}

export default View;