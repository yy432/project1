package com.example.claimemp;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import com.example.claimemp.entity.Employee;
import com.example.claimemp.repo.EmployeeRepository;
import com.example.claimemp.service.EmployeeServiceImpl;


@SpringBootTest
public class EmployeeServiceImplTest {
  
  @Mock
  private EmployeeRepository employeeRepository;

  //Inject mock as dependencies 
  @InjectMocks 
  EmployeeServiceImpl employeeService;

  @Test
  public void createEmployeeTest(){
    //mock data
    Employee newEmployee = new Employee(1, "ben", "ang", "BenAng.com", "HR");

    //Mock repo method
    //thenReturn-to mock .save method so that DB will not be touched
    when(employeeRepository.save(newEmployee)).thenReturn(newEmployee);

    //Act
    Employee savedEmployee= employeeService.createEmployee(newEmployee);

    //Assert
    //compare is it the same
    verify(employeeRepository, times(1)).save(newEmployee);
    assertEquals(newEmployee, savedEmployee);

  }

  @Test
  public void getAllEmployeesTest(){
    //Mock Data
    when(employeeRepository.findAll()).thenReturn(Arrays.asList(
      new Employee(1, "ben", "ang", "BenAng@gmail.com", "HR"), 
      new Employee(2, "ken", "wong", "KenWong@gmail.com", "marketing")
    ));

    //Act
    List<Employee> allEmployees = employeeService.getAllEmployees();

    //Assert
    assertEquals(2,allEmployees.size());

    } 


  @Test
  public void getOneEmployeeTest(){

    Employee newEmployee = new Employee(1, "ben", "ang", "BenAng.com", "HR");

    when(employeeRepository.findById(1)).thenReturn(Optional.of(newEmployee));

    Employee foundEmployee = employeeService.getEmployee(1);

    //Act
    assertEquals(newEmployee, foundEmployee);

  }


}
