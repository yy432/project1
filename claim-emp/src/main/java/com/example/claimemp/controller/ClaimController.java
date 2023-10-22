package com.example.claimemp.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.claimemp.entity.Claim;
import com.example.claimemp.service.ClaimService;

@RestController
@RequestMapping("/claims")
public class ClaimController {

private ClaimService claimService;

  public ClaimController(ClaimService claimService){
    this.claimService = claimService;
  }


  //Create
  @PostMapping("")

  public ResponseEntity<Claim> saveClaim(@RequestBody Claim claim){
    Claim newClaim = claimService.saveClaim(claim);
    return new ResponseEntity<>(newClaim, HttpStatus.CREATED);
  }
  

  //Read
  @GetMapping("/{id}")
  public ResponseEntity<Claim> getClaim(@PathVariable int id){
    Claim foundClaim = claimService.getClaim(id);
    return new ResponseEntity<>(foundClaim, HttpStatus.OK);
  }

  @GetMapping("")
  public ResponseEntity<List<Claim>> getAllClaims() {
    List<Claim> allClaims = claimService.getAllClaims();
    return new ResponseEntity<>(allClaims, HttpStatus.OK);
    }

   // Update
  @PutMapping("/{id}")
  public ResponseEntity<Claim> updateInteraction(@PathVariable int id, @RequestBody Claim claim) {
    Claim updatedClaim = claimService.updateClaim(id, claim);
    return new ResponseEntity<>(updatedClaim, HttpStatus.OK);
  }  

  //Delete
  @DeleteMapping("/{id}")
  public ResponseEntity<HttpStatus> deleteClaim(@PathVariable int id) {
    claimService.deleteClaim(id);
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }


}
