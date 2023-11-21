import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link,useNavigate, useParams} from "react-router-dom"

const ProfileStudent = () => {
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
  
  return (
    <div className='position-relative top-0 start-50 translate-middle-x col-md-8 text-start'>
      
    <h1 className='mb-3'>{student.firstName} {student.lastName} Profile </h1>
    <form className="row">

    <div className="col-md-6 mt-3">
  <label htmlFor="firstName" className="form-label">First Name</label>
  <input type="text" className="form-control" name="firstName" id="firstName" required value={firstName}/>
</div>
<div className="col-md-6 mt-3">
  <label htmlFor="lastName" className="form-label">Last Name</label>
  <input type="text" className="form-control" name="lastName" id="lastName" required value={lastName}/>
</div>

<div className="col-12 mt-3">
<label htmlFor="email" className="form-label">Email</label>
  <input type="email" className="form-control" name="email" id="email" required value={email}/>
</div>
<div className="col-12 mt-3">
<label htmlFor="departmant" className="form-label">Department</label>
  <input type="text" className="form-control" name="departmant" id="departmant" required value={departmant}/>
</div>

<div className="col-sm-6 mt-3">
  <Link to={"/view-students"} className="btn btn-outline-danger mx-3">Cancel</Link>
</div>
</form>
  </div>

  )
}

export default ProfileStudent
