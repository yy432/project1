import {useState} from "react";
import baseAPI from './api/employee-api';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './routes/Header';
import View from './routes/View';
import Employee from './routes/Employee';
import Claim from "./routes/Claim";
import ViewClaim from "./routes/ViewClaim";
import { EmployeeProvider } from './contexts/EmployeeContext';


function DefaultPage(){
  return <p>Nothing to see here</p>
}

function App() {

  return (
    <div className="App">
      <EmployeeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} >
            <Route path="/employee/view" element={<View />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/claim" element={<Claim />} />
            <Route path="/claim/view" element={<ViewClaim/>} />
            <Route path="*" element={<DefaultPage />} />
          </Route> 
        </Routes>
      </BrowserRouter>
      </EmployeeProvider>
    </div>
  );
}

export default App;
