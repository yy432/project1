import EditClaim from './EditClaim';
import DeleteClaim from './DeleteClaim';
import styles from './Table.module.css';
import {Link, Outlet} from 'react-router-dom';
import {useContext } from 'react';
import EmployeeContext from '../contexts/EmployeeContext';

function TableClaims(){
  const ctx = useContext(EmployeeContext); 
  const list = ctx.claim; 

  return (
  <div>
    <nav>
    <table className={styles.table}>
        <thead>
          <tr>
          <th>Claim Id</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Remarks</th>
            <th>Submitted By</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.claimDate}</td>
                <td>{item.claimAmount}</td>
                <td>{item.remarks}</td>
                <td>{item.employee.firstName + " " + item.employee.lastName}</td>
                <td><EditClaim claim={item}/>  <DeleteClaim claim={item}/> </td>
              </tr>
            ))}
        </tbody>
      </table>
      </nav>
      <Outlet />
  </div>
  );
}

export default TableClaims;