package com.example.claimemp.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.claimemp.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer>{
  
}
 