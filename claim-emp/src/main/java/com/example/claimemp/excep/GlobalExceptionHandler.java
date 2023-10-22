package com.example.claimemp.excep;

import java.util.List;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler{

 //Handle validation erros
  @Override
  protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpHeaders headers,
      HttpStatus status, WebRequest request) {
    //Get List of all validation errors from exception object
    List<ObjectError> validationErrors = ex.getBindingResult().getAllErrors();

    //Create a StringBuilder
    StringBuilder sb = new StringBuilder();

    for (ObjectError error : validationErrors){
      sb.append(error.getDefaultMessage() +  " ");
    }

    //Create custom error response

    ErrorResponse errorResponse = new ErrorResponse(sb.toString());

    //return
    return new ResponseEntity<Object>(errorResponse, HttpStatus.BAD_REQUEST);
  }


  //handle all other exception
  //General
  @ExceptionHandler(Exception.class)
  public ResponseEntity<Object> handleAllExceptions(Exception ex){
      ErrorResponse errorResponse = new ErrorResponse("Something went wrong. Please try again later.");
      return new ResponseEntity<>(errorResponse,HttpStatus.INTERNAL_SERVER_ERROR);

  }

  
  @ExceptionHandler({EmployeeNotFoundException.class, ClaimNotFoundException.class})
  public ResponseEntity<Object> handleResourceNotFoundException(RuntimeException ex){

    ErrorResponse errorResponse = new ErrorResponse(ex.getMessage()); 
    return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
  }
  
  ///Handle unsuccessful deletion
  @ExceptionHandler(EmptyResultDataAccessException.class)
  public ResponseEntity<Object> handleEmptyResultDataAccessException(EmptyResultDataAccessException ex){
    ErrorResponse errorResponse = new ErrorResponse("Cannot delete item that does not exist.");
    return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND); 
  }


}
