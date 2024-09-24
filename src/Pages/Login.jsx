import React, { useEffect, useRef } from 'react';
import intlTelInput from 'intl-tel-input'; // Import the intl-tel-input library
import 'intl-tel-input/build/css/intlTelInput.css'; // Import the CSS for styling
import Image from '../Images/Login.png'; // Correct the image import
import { TbBrandApple } from "react-icons/tb";
import { FaGofore } from "react-icons/fa";
import {Link} from 'react-router-dom'
const Login = () => {

  // Create a reference for the phone input field
  const phoneInputRef = useRef(null);

  useEffect(() => {
    // Initialize the intl-tel-input plugin on the phone input field
    if (phoneInputRef.current) {
      intlTelInput(phoneInputRef.current, {
        initialCountry: "in", // Set initial country (e.g., "in" for India)
        separateDialCode: true, // Display the dial code separately
        preferredCountries: ["us", "gb", "in"], // List of preferred countries
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js" // Script for formatting
      });
    }
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div className='container-fuid vh-100 d-flex align-items-center'>
      <div className='row w-100'>
        <img  className='img-fluid'
          style={{ height: '100vh', width: '50vw', objectFit: 'cover' }}
          src={Image}
          alt="Login Background"
        />
      </div>
      <div className='col-md-6 d-flex flex-column align-items-center me-5'>
        <form className='d-felx justify-content-center aign-item-cemter '>
          <h4 style={{marginRight:"110px", marginTop:"50px"}}><b>Sign in to your account!</b></h4>
          <p style={{marginRight:"10px"}}>Enter your Phone Number to sign in to your account</p>
          <div className="mb-3">
            <label style={{marginTop:"10px"}} htmlFor="Phone" className="form-label">Phone Number</label><br />
            <input
            style={{width:"300px"}}
              type="tel"
              ref={phoneInputRef}
              className="form-control"
              id="Phone"
              aria-describedby="phoneHelp"
            />
          </div>
          
          <button style={{width:"300px", marginTop:"20px"}} type="submit" className="btn btn-primary">Get OTP</button>
          <p className='or'>Or</p>
          <span className='Signin'>
             <span >
                <button className='Signinbutton'> <TbBrandApple size={30}/> <b>Sign in using Apple</b></button>
                </span>
              <span>
                <button className='Signinbutton'> <FaGofore size={30} /><b> Sign in using Google </b></button>
              </span>
              </span>
              <p style={{marginTop:"90px", marginLeft:"50px"}}>Don't have an account? <Link>Sign Up</Link></p>  
        </form>
        
      </div>
    </div>
  );
};

export default Login;