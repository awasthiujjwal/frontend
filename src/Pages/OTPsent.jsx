import React from 'react'
import Image from '../Images/Login.png';
import { MdOutlineLock } from "react-icons/md";

const OTPsent = () => {
  return (
    <div className='container-fuid vh-100 d-flex align-items-center'>
      <div className='row w-100'>
        <img style={{ height:'100vh', width: '50vw', objectFit:'cover' }} src={Image}  />
      </div>
      <div className='col-md-6 d-flex flex-column align-items-center me-5' >
      <div style={{marginLeft:"100px"}}><h3><b>Verify Mobile Number</b></h3>
      <p  color='grey'>For the purpose of verification. One time password <br />is sent on your Mobile Number</p>
      </div> 
      <div>
     <div style={{marginTop:"50px", fontSize:'15px'}}><label htmlFor="">Enter Your One Time Password (OTP)</label></div> 
      {[...Array(4)].map((_, index) => ( 
       
        <input
          key={index}
          type="text"
          style={{
            borderRadius :'100%',
            border:"none",
            backgroundColor:"lightgray",
            width: '40px',
            height: '40px',
            fontSize: '18px',
            textAlign: 'center',
            margin: '5px',
            marginRight:"20px"
          }}
          maxLength="1"
        />
     
      ))}
         <div><button className='save' class="btn btn-primary  w-100 mt-5">Save & Continue</button></div>
         <div className='lock'>
        <span style={{marginBottom:"20px"}}><MdOutlineLock /></span>  <span><p>Your info is safely secured</p></span>
        </div>
    </div>
    </div>
     </div>
  );
}

export default OTPsent
