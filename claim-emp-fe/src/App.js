import {useState} from "react";
import baseAPI from './api/employee-api';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './routes/Header';
import View from './routes/View';
import Employee from './routes/Employee';


function DefaultPage(){
  return <p>Nothing to see here</p>
}

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} >
          <Route path="/view" element={<View />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="*" element={<DefaultPage />} />
        </Route> 
      </Routes>
      
      {/* <h1>Employee List</h1>
      <button onClick={employeeGet}>Load Employees</button>
      <button onClick={()=>getOne(2)}>Load Employee 1</button> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
