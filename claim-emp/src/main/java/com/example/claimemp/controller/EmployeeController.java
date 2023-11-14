package com.example.claimemp.controller;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.claimemp.entity.Claim;
import com.example.claimemp.entity.Employee;
import com.example.claimemp.service.EmployeeService;

// @ResponseBody + @Controller
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class EmployeeController {


  @Autowired
  private EmployeeService employeeService;
  

  @GetMapping("/test")
  public String test(){
    return "hello";
  }


//Create
@PostMapping("/employees")
public ResponseEntity<Employee> createEmployee(@Valid @RequestBody Employee employee){
  Employee newEmployee = employeeService.createEmployee(employee);

  return new ResponseEntity<>(newEmployee, HttpStatus.CREATED);
}

//Get one
@GetMapping("/employees/{id}")
public ResponseEntity<Employee> getEmployee(@PathVariable int id){

  Employee foundEmployee = employeeService.getEmployee(id);
  return new ResponseEntity<>(foundEmployee, HttpStatus.OK);
  

}

//Get All
@GetMapping("/employees")
public ResponseEntity<List<Employee>> getAllEmployees(){
  List<Employee> allEmployees = employeeService.getAllEmployees();
  return new ResponseEntity<>(allEmployees, HttpStatus.OK);
}       


//Update
@PutMapping("/employees/{id}")
public ResponseEntity<Employee> updateEmployee(@PathVariable int id, @RequestBody Employee employee){
  Employee updatedEmployee = employeeService.updateEmployee(id, employee);
  return new ResponseEntity<Employee>(updatedEmployee, HttpStatus.OK);
} 

//Delete
@DeleteMapping("/employees/{id}")
public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable int id){
  employeeService.deleteEmployee(id);
  return new ResponseEntity<>(HttpStatus.OK);
}

// Nested
@PostMapping("/employees/{id}/claims")
public ResponseEntity<Claim> addClaimToEmployee(@PathVariable int id, @RequestBody Claim claim) {
  Claim newClaim = employeeService.addClaimToEmployee(id, claim);
  return new ResponseEntity<>(newClaim, HttpStatus.CREATED);
}

}
