import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios'

const AddStudent = () => {
  let navigate = useNavigate();
    const[student, setStudent] = useState({
        firstName : '',
        lastName : '',
        email : '',
        departmant : ''
    })

    const{firstName, lastName, email, departmant} = student;

    const handleInputChange = (e) => {
        setStudent({
            ...student, [e.target.name] : e.target.value
        })
    }

    const saveStudent = async(e) => {
        e.preventDefault();
        await axios.post("http://localhost:9192/students", student);
        navigate("/view-students")
      }
  return (
    
    <div className='position-relative top-0 start-50 translate-middle-x col-md-8 text-start'>
      <form onSubmit={(e) => saveStudent(e)} className="row">


      <div className="col-md-6 mt-3">
    <label htmlFor="firstName" className="form-label">First Name</label>
    <input type="text" className="form-control" name="firstName" id="firstName" required value={firstName} onChange={(e) => handleInputChange(e)}/>
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
        Save
    </button>
 
    <Link to={"/view-students"} className="btn btn-outline-danger mx-3">Cancel</Link>
  </div>
</form>
    </div>



  )
}

export default AddStudent
