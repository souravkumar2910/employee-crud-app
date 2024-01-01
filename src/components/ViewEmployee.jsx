import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import EmployeeService from "../services/employee.service";
const ViewEmployee = () => {

    const [employees, setEmployees] = useState([]);
    let count = 0;
    const navigate = useNavigate();

    const getAllEmployeeDetails = () => {

        EmployeeService.getAllEmployeesList().then((response) => {
            console.log(response);
            setEmployees(response);
        }).catch(error => {
            console.log(error.response);
        })
    };

    const handleEdit = (id) => {
        navigate(`/ui/edit-employee/${id}`);
      };

      const handleDelete = (id) => {
        EmployeeService.deleteEmployeeById(id);
      };

    useEffect(() => {
        getAllEmployeeDetails();
    }, []);

    return (
        <div>
            <br /> <br />
            <div className="container">
                <h2>List of Employees</h2>
                <Link to={`/ui/add-employee`} className="btn btn-primary mb-2">Add Employee</Link>
                <table className="table table-bordered table-striped">
                    <thead className="bg-warning">
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Profession</th>
                        <th>Gender</th>
                        <th>Skills</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {employees.map((emp) => (
                            <tr key={emp.id}>
                                <td>{++count}</td>
                                <td>{emp.fullName}</td>
                                <td>{emp.email}</td>
                                <td>{emp.profession}</td>
                                <td>{emp.gender}</td>
                                <td>{emp.skills.join(', ')}</td>
                                <td>
                                    <button className="btn btn-primary" onClick={() => handleEdit(emp.id)}>Edit</button>
                                    <button className="btn btn-danger" onClick={() => handleDelete(emp.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewEmployee;