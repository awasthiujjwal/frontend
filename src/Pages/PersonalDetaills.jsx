import React from 'react'
import Image from '../Images/Login.png';
const PersonalDetaills = () => {
  return (
    <div className='container-fuid vh-100 d-flex align-items-center'>
        <div className='row w-100' >
            
             <img style={{height:"100vh", width:"50vw", objectFit:"cover"}} src={Image}  />
             </div>
        <div className='col-md-6 d-flex flex-column align-items-center me-5' > 
        <h1 style={{marginRight:"50px"}}> Personal Details</h1>
        <p style={{fontSize:"15px"}}>Enter your personal details to create your account ?</p>
            <form style={{marginRight:"150px"}}  >
                {/* first name label */}
            <label htmlFor="">First Name</label><br />
            <input style={{borderRadius:"10px"}} type="text" value="" placeholder='Enter Your first name' /> <br />
            <br />
            {/* last name label */}
            <label htmlFor="">Last name</label> <br />
            <input style={{borderRadius:"10px"}} type="Text" value=""placeholder='Enter Your last name' /><br />
            <br />
            {/* email label */}
            <label htmlFor="">Email</label> <br />
            <input style={{borderRadius:"10px"}} type="Emai" value="" placeholder='example@gmail.com' /> <br />
            <br />
             {/* gender label */}
            <label htmlFor="">Gender</label><br />
           <input style={{borderRadius:"10px"}} type="text" name="" id="" placeholder='Enter your gender' /> <br />
           <br />
           {/* height label */}
            <label htmlFor="">Height</label> <br />
            <input style={{borderRadius:"10px"}}type="text" value="" placeholder='Enter Your height' /><br />
            <br />
            {/* heighr gender checbox */}
            <input style={{borderRadius:"10px"}}id='gender' type="checkbox" />
            <label className='mt-2' htmlFor="gender"> <center><p style={{marginLeft:"10px", fontSize:"13px", textAlign:"center"}}>Show gender on profile ?</p></center> </label> <br />
            
            <input id='height' type="checkbox" />
            <label className='mt-2' htmlFor="height"> <center><p style={{marginLeft:"10px", fontSize:"13px", textAlign:"center"}}>Show height on profile ?</p></center> </label>
             
            </form>
            </div>
      
    </div>
  )
}

export default PersonalDetaills
