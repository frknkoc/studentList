import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom shadow  mb-4">
        <div className="container-fluid py-2 px-4">
          <Link className="navbar-brand" to={"/"}>Person List</Link>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to={"/about-us"}>About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/view-students"}>
                  View All Students
              </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/add-student"}>Add A New Student</Link>
              </li>
            </ul>
          </div>
        </div>
    </nav>
  )
}

export default Navbar
