import {
addEmployee, 
getAllEmployees, 
getEmpById, 
deleteEmpById } from "../common/ApiUtils";

    const saveEmployee = (employee) => {
        return addEmployee(employee);
    }

    const getAllEmployeesList = () => {
        return getAllEmployees();
    }

    const getEmployeeById = (empId) => {
        return getEmpById(empId);
    };

    const deleteEmployeeById = (empId) => {
        return deleteEmpById(empId);
    }

const EmployeeService = {
    saveEmployee,
    getAllEmployeesList,
    getEmployeeById,
    deleteEmployeeById
}

export default EmployeeService;