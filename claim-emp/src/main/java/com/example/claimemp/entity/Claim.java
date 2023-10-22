package com.example.claimemp.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import java.time.LocalDate;



// tells jpa this will be a table
@Entity
@Table(name="Claim")
public class Claim {


 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 @Column(name="Id") 
 private int id; 

 @Column(name="claim_date")
 private LocalDate claimDate;

 @Column(name="claim_amount")
 private int claimAmount;

 @Column(name = "remarks")
  private String remarks;

  @ManyToOne(optional = false)
  @JoinColumn(name = "employee_id", referencedColumnName = "id")
  private Employee employee;

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public LocalDate getClaimDate() {
    return claimDate;
  }

  public void setClaimDate(LocalDate claimDate) {
    this.claimDate = claimDate;
  }

  public int getClaimAmount() {
    return claimAmount;
  }

  public void setClaimAmount(int claimAmount) {
    this.claimAmount = claimAmount;
  }

  public String getRemarks() {
    return remarks;
  }

  public void setRemarks(String remarks) {
    this.remarks = remarks;
  }

  public Employee getEmployee() {
    return employee;
  }

  public void setEmployee(Employee employee) {
    this.employee = employee;
  }

 
}
