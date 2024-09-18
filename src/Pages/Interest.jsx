import React from 'react'
import Image from '../Images/Login.png';
import { MdArrowBackIos } from "react-icons/md";

const Interest = () => {
  return (
    <div className='container-fuid vh-100 d-flex align-items-center'>
      <div className='row w-100'>
        <img style={{height:"100vh", width:"50vw", objectFit:"cover"}} src={Image}/>
      </div>
      <div className='col-md-6 d-flex flex-column justify-content-center align-items-center gap-md-4'>
      <div className='backbutton'> 
    <span  ><MdArrowBackIos style={{marginBottom:'5px'}} />
    <button >back</button></span>
     <span><button>Skip</button></span>
    </div>
    <h3>I'm interested in</h3>
    <div className="gender">
  <button className="btn btn-info custom-button">Woman</button>
  <button className="btn btn-info custom-button">Man</button>
  <button className="btn btn-info custom-button">Both</button>
</div>
    <h3>What do you admire most</h3>
    <div className="gender">
  <button className="btn btn-info custom-button">Friendship</button>
  <button className="btn btn-info custom-button">Comapanionship</button>
  <button className="btn btn-info custom-button">Both</button>
    
    <div><button className='btn btn-info' style={{width:'300px',marginTop:'10px' }}>Next</button>
    </div>
    
     </div>
     </div>
     /</div>
  )
}

export default Interest
