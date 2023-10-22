package com.example.claimemp;

import static org.mockito.Mockito.when;

import java.util.Arrays;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

//this import need to type out, not generated 
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.example.claimemp.entity.Employee;
import com.example.claimemp.repo.EmployeeRepository;
import com.fasterxml.jackson.databind.ObjectMapper;

//Integration test - test whole of interaction of the app
//mockMvc to simulate web requests
@SpringBootTest
@AutoConfigureMockMvc
class ClaimEmpApplicationTests {

	@Autowired
	private MockMvc mockMvc;

	@Autowired
	private EmployeeRepository employeeRepository; 

	@Autowired
	private ObjectMapper objectMapper; //Convert java objects to JSON and vice versa


	@BeforeEach
	void setup(){

		employeeRepository.save(
    new Employee(1, "ben", "ang", "BenAng@gmail.com", "HR")
		);

		employeeRepository.save(
    new Employee(2, "ken", "chan", "KenChan@gmail.com", "marketing")
		);
	}

	

	@Test
	void contextLoads() {
	}

	@Test 
	void getEmployeeByIdTest() throws Exception{

		//Build get request to employee 1
		RequestBuilder request = MockMvcRequestBuilders.get("/employees/1");
		
		//Perform the request and get the result
		mockMvc.perform(request)
		.andExpect(status().isOk())
		.andExpect(content().contentType(MediaType.APPLICATION_JSON))
		.andExpect(jsonPath("$.id").value(1));
	}

	@Test
	public void getAllEmployeesTest() throws Exception {

		//Build the request and get the result
		RequestBuilder request = MockMvcRequestBuilders.get("/employees");

		//Perform the request and get the result
		mockMvc.perform(request)
			.andExpect(status().isOk())
			.andExpect(content().contentType(MediaType.APPLICATION_JSON))
			.andExpect(jsonPath(".size").value(2));
	}


	@Test
	public void validEmployeeCreationTest() throws Exception {
		//build Create Employee request
		Employee newEmployee = new Employee(3, "Sally", "Kim", "SallyKim@gmail.com", "Finance");

		//Convert java object to JSON
		String newEmployeeJSON = objectMapper.writeValueAsString(newEmployee);

		//build request to create an employee
		RequestBuilder request = MockMvcRequestBuilders.post("/employees")
			.contentType(MediaType.APPLICATION_JSON)
			.content(newEmployeeJSON);

			//perform the request and get the result
			mockMvc.perform(request)
				.andExpect(status().isCreated())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON))
				.andExpect(jsonPath("$.id").value(3))
				.andExpect(jsonPath("$.firstName").value("Sally"))
				.andExpect(jsonPath("$.lastName").value("Kim"));

	}

	@Test
	public void invalidEmployeeCreationTest() throws Exception{

		//create invalid employee
		Employee invalidEmployee = new Employee(4, "  ", "      ", "  ", "    ");
		

		//Convert java object to JSON
		String invalidEmployeeAsJson = objectMapper.writeValueAsString(invalidEmployee);

		//Build request
		RequestBuilder request = MockMvcRequestBuilders.post("/employees")
			.contentType(MediaType.APPLICATION_JSON)
			.content(invalidEmployeeAsJson);


		//perform request and get result (will be bad request)
		mockMvc.perform(request)
			.andExpect(status().isBadRequest())
			.andExpect(content().contentType(MediaType.APPLICATION_JSON));


	}

}
