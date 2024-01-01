import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/employee.service";
const AddEmployee = () => {

    // const [fullName, setFullName] = useState('');
    // const [email, setEmail] = useState('');
    // const [profession, setProfession] = useState('');
    // const [gender, setGender] = useState('');
    // const [skill, setSkill] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();
    const [employee, setEmployee] = useState({
        fullName: '',
        email: '',
        profession: '',
        gender: '',
        skills: []
    });

    // const handleGenderChange = (e) => {
    //     setGender(e.target.value);
    // };

    // const handleSkillChange = (e) => {
    //     const { value, checked } = e.target;
    //     if (checked) {
    //         setSkill([...skill, value]);
    //     } else {
    //         setSkill(skill.filter((skill) => skill !== value));
    //     }
    // };

    const handleSkillChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
          setEmployee({
            ...employee,
            skills: [...employee.skills, value]
          });
        } else {
          setEmployee({
            ...employee,
            skills: employee.skills.filter((skill) => skill !== value)
          });
        }
      };

      const handleGenderChange = (event) => {
        const { value } = event.target;
        setEmployee({
            ...employee,
            gender: value
        });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEmployee({
            ...employee,
            [name]: value
        });
    };

    const saveOUpdateEmployee = (e) => {
        e.preventDefault();

        console.log(employee);
if(employee!=null){
        EmployeeService.saveEmployee(employee).then((response) => {
            navigate("/ui/view-employee");
        }).catch(error => {
            console.log(error.response);
        })
    }
    };

    useEffect(() => {

        if(id){
        // console.log("this is ID:" + id);
        EmployeeService.getEmployeeById(id).then((response) => {
            console.log("excuted");
            console.log(response);
            setEmployee(response);
        }).catch(error => {
            console.log("error");
            console.log(error.response);
        });
        }
        // console.log(employee)

    }, [id]);

    return (
        <div>
            <br /> <br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        <div className="card-body">
                            <form>
                                <form>
                                    <div class="mb-3">
                                        <label for="fullName" class="form-label">Full Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="fullName"
                                            placeholder="Enter Full Name"
                                            value={employee.fullName}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div class="mb-3">
                                        <label for="email" class="form-label">Email ID</label>
                                        <input
                                            type="email"
                                            class="form-control"
                                            name="email"
                                            placeholder="Enter your email id."
                                            value={employee.email}
                                            onChange={handleInputChange} />
                                    </div>
                                    <div class="mb-3">
                                        <label for="profession" class="form-label">Profession</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="profession"
                                            placeholder="Enter your Profession"
                                            value={employee.profession}
                                            onChange={handleInputChange} />
                                    </div>
                                    <div class="mb-3">
                                        <label for="skills" class="form-label">Skills</label> <br />
                                        <input
                                            type="checkbox"
                                            name="skills"
                                            value="Java"
                                            checked={employee.skills.includes('Java')}
                                            onChange={handleSkillChange}
                                        /> Java &nbsp;
                                        <input
                                            type="checkbox"
                                            name="skills"
                                            value="Python"
                                            checked={employee.skills.includes('Python')}
                                            onChange={handleSkillChange}
                                        /> Python &nbsp;
                                        <input
                                            type="checkbox"
                                            name="skills"
                                            value="ReactJs"
                                            checked={employee.skills.includes('ReactJs')}
                                            onChange={handleSkillChange}
                                        /> ReactJs &nbsp;
                                        <input
                                            type="checkbox"
                                            name="skills"
                                            value="Angular"
                                            checked={employee.skills.includes('Angular')}
                                            onChange={handleSkillChange}
                                        /> Angular &nbsp;
                                        <input
                                            type="checkbox"
                                            name="skills"
                                            value="MySQL"
                                            checked={employee.skills.includes('MySQL')}
                                            onChange={handleSkillChange}
                                        /> MySQL &nbsp;
                                        <input
                                            type="checkbox"
                                            name="skills"
                                            value="JUnit"
                                            checked={employee.skills.includes('JUnit')}
                                            onChange={handleSkillChange}
                                        /> JUnit &nbsp;
                                        <input
                                            type="checkbox"
                                            name="skills"
                                            value="Mockito"
                                            checked={employee.skills.includes('Mockito')}
                                            onChange={handleSkillChange}
                                        /> Mockito &nbsp;
                                    </div>
                                    <div class="mb-3">
                                        <label for="gender" class="form-label">Gender</label> <br />
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="Male"
                                            checked={employee.gender === 'Male'}
                                            onChange={handleGenderChange}
                                        /> Male &nbsp;
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="Female"
                                            checked={employee.gender === 'Female'}
                                            onChange={handleGenderChange}
                                        /> Female &nbsp;
                                    </div>
                                    <button type="submit" onClick={(e) => saveOUpdateEmployee(e)} class="btn btn-primary">Submit</button>
                                </form>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmployee;