package com.example.claimemp.excep;

public class ClaimNotFoundException extends RuntimeException{
  public ClaimNotFoundException(int id){
    super("Claim with id " + id + " not found.");
  }
  
}
