import EditEmployee from './EditEmployee';
import styles from './Table.module.css';
import {Outlet} from 'react-router-dom';
import {useContext } from 'react';
import {Button} from 'react-bootstrap';
import EmployeeContext from '../contexts/EmployeeContext';


function Table(){
  const ctx = useContext(EmployeeContext); 
  const list = ctx.employee; 

  return (
  <div>
    <nav>
    <table className={styles.table}>
        <thead>
          <tr>
          <th>Employee Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Action</th>
   
          </tr>
        </thead>
        <tbody>
          {list &&
            list.sort((a,b)=>(a.id < b.id ? -1:1))
            .map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.department}</td>
                <td>
                <EditEmployee oneEmployee={item} /> 
                </td>
                
              </tr>
            ))}
        </tbody>
      </table>
      {/* <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                      <Modal.Title>
                        Edit Employee
                      </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <EditEmployee />
                  </Modal.Body>
                  <Modal.footer>
                   <Button variant="secondary" onClick={handleClose}>
                     Close Button
                   </Button>
                   </Modal.footer>
                </Modal> */}
      </nav>
      <Outlet />
   
  </div>
  );
}

export default Table;