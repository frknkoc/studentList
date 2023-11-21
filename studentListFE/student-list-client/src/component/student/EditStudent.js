import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link,useNavigate, useParams} from "react-router-dom"

const EditStudent = () => {

    let navigate = useNavigate();
    const{id} = useParams();
    const[student, setStudent] = useState({
        firstName : '',
        lastName : '',
        email : '',
        departmant : ''
    })

    const{firstName, lastName, email, departmant} = student;

    useEffect(() => {
        loadStudents();
    }, []);

    const loadStudents = async() => {
        const result = await axios.get(`http://localhost:9192/students/student/${id}`);
            setStudent(result.data)
    }


    const handleInputChange = (e) => {
        setStudent({
            ...student, [e.target.name] : e.target.value
        })
    }

    const updateStudent = async(e) => {
        e.preventDefault();
        await axios.put(`http://localhost:9192/students/update/${id}`, student);
        navigate("/view-students")
      }
  return (
    
    <div className='position-relative top-0 start-50 translate-middle-x col-md-8 text-start'>
      
      <h1 className='mb-3'>Edit Student </h1>
      <form onSubmit={(e) => updateStudent(e)} className="row">


      <div className="col-md-6 mt-3">
    <label htmlFor="firstName" className="form-label">First Name</label>
    <input type="text" className="form-control" name="firstName" id="firstName" required value={firstName} onChange={(e) => handleInputChange(e)}>

    </input>
  </div>
  <div className="col-md-6 mt-3">
    <label htmlFor="lastName" className="form-label">Last Name</label>
    <input type="text" className="form-control" name="lastName" id="lastName" required value={lastName} onChange={(e) => handleInputChange(e)}/>
  </div>

  
  <div className="col-12 mt-3">
  <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-control" name="email" id="email" required value={email} onChange={(e) => handleInputChange(e)}/>
  </div>
  <div className="col-12 mt-3">
  <label htmlFor="departmant" className="form-label">Department</label>
    <input type="text" className="form-control" name="departmant" id="departmant" required value={departmant} onChange={(e) => handleInputChange(e)}/>
  </div>
  


  <div className="col-12 mt-3">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" />
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-sm-6 mt-3">
    <button type="submit" className="btn btn-outline-primary ">
        Update
    </button>
 
    <Link to={"/view-students"} className="btn btn-outline-danger mx-3">Cancel</Link>
  </div>
</form>
    </div>



  )
}

export default EditStudent
