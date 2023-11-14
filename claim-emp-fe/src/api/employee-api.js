import axios from 'axios';
const BASE_URL = "http://localhost:8080";

//const EMPLOYEE_URL = "http://localhost:8080/employees";
//Instantiate axios, pass in URL 
const baseAPI = axios.create({baseURL: BASE_URL});


export default baseAPI;