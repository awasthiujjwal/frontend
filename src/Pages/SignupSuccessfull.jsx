import React from 'react'
import Image from '../Images/Login.png';
import SignupSuccess from '../Images/Pop up.png';
const SignupSuccessfull = () => {
  return (
    <div className='container-fuid vh-100 d-flex  align-items-center'>
      
      <div className='row w-100 '>
        <img style={{ height:'100vh', width: '50vw', objectFit:'cover' }} src={Image} alt='' />
      </div>
      <div className='col-md-6 vh-100 d-flex flex-column justify-content-center align-items-center bg-light me-2' >
  
        <img height={300} src={SignupSuccess} alt="" srcset="" />
    <button className='btn btn
     signin'>Sign in</button>
        </div>
    </div>
  )
}

export default SignupSuccessfull
