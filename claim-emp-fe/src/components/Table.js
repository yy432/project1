import styles from './Table.module.css';

function Table({list}){


  return (
  <div>
    <table className={styles.table}>
        <thead>
          <tr>
          <th>Employee Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.department}</td>
              </tr>
            ))}
        </tbody>
      </table>
  </div>
  );
}

export default Table;