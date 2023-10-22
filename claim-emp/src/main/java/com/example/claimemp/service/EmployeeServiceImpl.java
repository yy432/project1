package com.example.claimemp.service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;

import com.example.claimemp.entity.Claim;
import com.example.claimemp.entity.Employee;
import com.example.claimemp.excep.EmployeeNotFoundException;
import com.example.claimemp.repo.ClaimRepository;
import com.example.claimemp.repo.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {

private EmployeeRepository employeeRepository;
private ClaimRepository claimRepository;


public EmployeeServiceImpl(EmployeeRepository employeeRepository, ClaimRepository claimRepository){
this.employeeRepository = employeeRepository;
this.claimRepository = claimRepository;
}


//Create
@Override
public Employee createEmployee(Employee employee){
  Employee newEmployee = employeeRepository.save(employee);
  return newEmployee;
}


//Read

//Get one
@Override
public Employee getEmployee(int id){
  // Employee foundEmployee = employeeRepository.findById(id).get();
  Optional<Employee> foundEmployee = employeeRepository.findById(id);
  if(foundEmployee.isPresent()){
    return foundEmployee.get();
  }else{
    // throw new NoSuchElementException();
    throw new EmployeeNotFoundException(id);
  }

  // return foundEmployee;
}


//Get all
@Override
public List<Employee> getAllEmployees(){
  List<Employee> allEmployees = employeeRepository.findAll();
  return allEmployees;
}

//Update
@Override
public Employee updateEmployee(int id, Employee employee){

Optional<Employee> wrappedEmployeeToUpdate = employeeRepository.findById(id);

if(!wrappedEmployeeToUpdate.isPresent()){
  throw new EmployeeNotFoundException(id);
}
 Employee employeeToUpdate = wrappedEmployeeToUpdate.get();

 employeeToUpdate.setFirstName(employee.getFirstName());
 employeeToUpdate.setLastName(employee.getLastName());
 employeeToUpdate.setEmail(employee.getEmail());
 employeeToUpdate.setDepartment(employee.getDepartment());

 return employeeRepository.save(employeeToUpdate);
} 


//Delete
@Override 
public void deleteEmployee(int id){
  employeeRepository.deleteById(id);
}

@Override
  public Claim addClaimToEmployee(int id, Claim claim) {
    // Retrieve the customer from the DB
    Optional<Employee> wrappedSelectedEmployee = employeeRepository.findById(id);

    if(!wrappedSelectedEmployee.isPresent()){
      throw new EmployeeNotFoundException(id);
    }
    //unwrap
    Employee selectedEmployee = wrappedSelectedEmployee.get();
    // Add the customer to the interaction
    claim.setEmployee(selectedEmployee);
    // Save the interaction to the DB
    return claimRepository.save(claim);

  }

}
