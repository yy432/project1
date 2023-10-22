package com.example.claimemp.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

// tells jpa this will be a table
@Entity
@Table(name="employee")
public class Employee {


 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 @Column(name="Id") 
 private int id; 

 @Column(name="firstName")
 @NotBlank(message = "First name is mandatory.")
 @Size(min=2, max=18, message = "First name must be between 2 to 18.")
 private String firstName;

 @Column(name="lastName")
 @NotBlank(message = "Last name is mandatory.")
 @Size(min=2, max=18, message = "Last name must be between 2 to 18.")
 private String lastName;

 @Column(name = "email")
 @Email(message = "Email must be valid.")
 @NotBlank(message = "Email name is mandatory.")
 private String email;

 @Column(name = "department")
 @NotBlank(message = "Department is mandatory.")
 private String department;

public Employee(){

}

public Employee(int id, String firstName, String lastName, String email, String department){
  this.department = department;
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
}


public int getId() {
  return this.id;
}
public void setId(int id) {
  this.id = id;
}
public String getFirstName() {
  return this.firstName;
}
public void setFirstName(String firstName) {
  this.firstName = firstName;
}
public String getLastName() {
  return this.lastName;
}
public void setLastName(String lastName) {
  this.lastName = lastName;
}
public String getEmail() {
  return this.email;
}
public void setEmail(String email) {
  this.email = email;
}
public String getDepartment() {
  return this.department;
}
public void setDepartment(String department) {
  this.department = department;
}


 



}
