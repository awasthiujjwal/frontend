import React from 'react'
import { CiHome } from "react-icons/ci";
import { PiHeartStraight } from "react-icons/pi";
import { LuMessageCircle } from "react-icons/lu";
import { FaRegCalendarCheck } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className='headingcolor'>
                <span><h3>SENIOR</h3></span>
                <span ><h3 className='color' >SPARKS</h3></span>
            </span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"> <CiHome  style={{marginBottom:'5px'}} />Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"> <PiHeartStraight  style={{marginBottom:'5px'}} />Likes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"> <PiHeartStraight  style={{marginBottom:'5px'}} />Matches</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"> <LuMessageCircle  style={{marginBottom:'5px'}} />Messages</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"> <FaRegCalendarCheck  style={{marginBottom:'5px'}} />Events</a>
        </li>
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
