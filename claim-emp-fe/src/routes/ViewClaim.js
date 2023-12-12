import styles from './View.module.css';
import baseAPI from '../api/employee-api';
import { useState, useEffect, useContext } from 'react';
import TableClaims from '../components/TableClaims';
import EmployeeContext from '../contexts/EmployeeContext';


function ViewClaim() {

  const ctx = useContext(EmployeeContext);

  useEffect(() => {
    ctx.getClaim();
  }, [])

  // const claimGet = async () => {
  //   try{
  //   const response = await baseAPI.get('/claims');  
  //   console.log('GET status', response.status);
  //   console.log('GET data', response.data);
  //   setClaim(response.data);
  //   }catch(error){
  //     console.log(error.message)
  //   }
  // };



  return (
    <div>
      <div className={styles.sidebar}>

        <h1>Claim History</h1>
        <TableClaims />

      </div>
    </div>
  )

}

export default ViewClaim;