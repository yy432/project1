package com.example.claimemp.service;

import java.util.ArrayList;
import java.util.List;

import com.example.claimemp.entity.Claim;
import com.example.claimemp.entity.Employee;




public interface EmployeeService {

  Employee createEmployee(Employee employee);

  Employee getEmployee(int id);

  List<Employee> getAllEmployees();

  void deleteEmployee(int id);

  Employee updateEmployee(int id, Employee employee);

  Claim addClaimToEmployee(int id, Claim claim);
  
  
}
