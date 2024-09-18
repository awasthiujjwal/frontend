import React from 'react'
import Image from '../Images/Login.png';
import { MdArrowBackIos } from "react-icons/md";
const Ethinicity = () => {
  return (
    
    <div className='container-fuid vh-100 d-flex align-items-center'>
    <div className='row w-100'>
      <img  className='img-fluid'
        style={{ height: '100vh', width:'50vw', objectFit: 'cover' }}
        src={Image}
        alt="Login Background"
      />
    </div>
    
    <div className='col-md-6 d-flex flex-column justify-content-center align-items-center gap-md-4' >
    <div className='backbutton'> 
    
    <button > <MdArrowBackIos style={{marginBottom:'5px'}} />back</button>
     <button>Skip</button>
    </div>
    <div>
    <h2 >What is your is ethinicity?</h2>
    <p>Please select our ehthinicity</p>
    </div>
    <div className=' ethinicity d-flex  align-items-center gap-3 ' ><button style={{border:"none",borderRadius:"7px", width:'80px',}}>Asian</button> <button style={{border:"none",borderRadius:"7px", width:'130px'}}>Black / African</button></div>
    <div className=' ethinicity d-flex  align-items-center gap-3' ><button style={{border:"none",borderRadius:"7px",width:'80px'}}>Hispanic</button> <button style={{border:"none",borderRadius:"7px",width:'80px'}}>Latino</button> <button style={{border:"none",borderRadius:"7px",width:'130px'}}>South Asian</button></div>
    <div  className=' ethinicity d-flex  align-items-center gap-3' ><button style={{border:"none",borderRadius:"7px",width:'130px'}}>Pacific Islander</button> <button style={{border:"none",borderRadius:"7px",width:'130px'}}>Midde Eastern</button></div>
    <div className=' ethinicity d-flex  align-items-center gap-3'><button style={{border:"none",borderRadius:"7px",width:'80px'}}>Other</button> <button style={{border:"none",borderRadius:"7px",width:'130px'}}>White / Cuacasian</button> <button style={{border:"none",borderRadius:"7px",width:'80px'}}>Mixed</button></div> 
    <div className=' ethinicity d-flex  align-items-center '> <button style={{border:"none",borderRadius:"7px",width:'130px'}}>Prefer not to say</button></div>
   <div> <input style={{borderRadius:"10px",marginRight:'10px',}}id='ethinicity' type="checkbox" />
            <label  htmlFor="ethinicity"> <p style={{ fontSize:"13px",marginRight:'220px',marginBottom:'3px' }}>Show ethinicity on profile?</p></label> </div>
            <div><button className='btn btn-info' style={{width:'400px'}}>Next</button></div>
   </div>
   
   </div>
  
  )
}

export default Ethinicity
