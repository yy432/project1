package com.example.claimemp.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.claimemp.entity.Claim;
import com.example.claimemp.excep.ClaimNotFoundException;
import com.example.claimemp.repo.ClaimRepository;

// import com.example.claimemp.claim.ClaimNotFoundException;



@Service
public class ClaimServiceImpl implements ClaimService {
  
  private ClaimRepository claimRepository;

  public ClaimServiceImpl(ClaimRepository claimRepository){
    this.claimRepository = claimRepository;
  }


  @Override
  public Claim saveClaim(Claim claim){
    Claim newClaim = claimRepository.save(claim);
    return newClaim;
  }

  @Override
  public Claim getClaim(int id){
    Optional<Claim> wrappedfoundClaim = claimRepository.findById(id);
    if(!wrappedfoundClaim.isPresent()){
      throw new ClaimNotFoundException(id);
    }
    Claim foundClaim = wrappedfoundClaim.get();
    return foundClaim;
  }

  
  @Override
  public List<Claim> getAllClaims(){
    List<Claim> allClaims = claimRepository.findAll();
    return allClaims;
  }


  @Override
  public Claim updateClaim(int id, Claim claim){

    Optional<Claim> wrappedClaimUpdated = claimRepository.findById(id);

    if(!wrappedClaimUpdated.isPresent()){
      throw new ClaimNotFoundException(id);
    }

    Claim claimUpdated = wrappedClaimUpdated.get();
     
    claimUpdated.setClaimDate(claim.getClaimDate());
    claimUpdated.setClaimAmount(claim.getClaimAmount());
    claimUpdated.setRemarks(claim.getRemarks());
    return claimUpdated;
  } 

  @Override
  public void deleteClaim(int id) {
    claimRepository.deleteById(id);
  }


}
