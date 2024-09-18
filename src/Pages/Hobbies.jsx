import React from 'react'
import Image from '../Images/Login.png';
import { MdArrowBackIos } from "react-icons/md";
import { IoCameraOutline } from "react-icons/io5";
import { TbShoppingBag } from "react-icons/tb";
import { CiMicrophoneOn } from "react-icons/ci";
import { GrYoga } from "react-icons/gr";
import { CiBowlNoodles } from "react-icons/ci";
import { CiBaseball } from "react-icons/ci";
import { LiaRunningSolid } from "react-icons/lia";
import { FaPersonSwimming } from "react-icons/fa6";
import { IoColorPaletteOutline } from "react-icons/io5";
import { PiMountainsLight } from "react-icons/pi";
import { TbParachute } from "react-icons/tb";
import { IoIosMusicalNotes } from "react-icons/io";
import { BiDrink } from "react-icons/bi";
import { IoGameControllerOutline } from "react-icons/io5";
const Hobbies = () => {
  return (
    <div className='container-fuid vh-100 d-flex align-items-center'>
       <div className='row w-100'>
        <img  className='img-fluid'
          style={{ height: '100vh', width: '50vw', objectFit: 'cover' }}
          src={Image}
         />
      </div>
      
      <div className='col-md-6 d-flex flex-column align-items-center me-5 gap-3 mb-5'>
      <div className='top'><button className='upperbuttons'><MdArrowBackIos style={{marginBottom:'5px'}} />Back</button>
      <button>Skip</button></div>
      <div>
       <h3><b>What are your hobbies?</b></h3>
       <b>(Select up to 5 )</b>
       </div>
       <div className=' d-flex  align-items-center gap-4 ' ><button className='hobbiesbutton' style={{border:"none",borderRadius:"7px", width:'150px',}}> <IoCameraOutline style={{marginBottom:'5px', marginRight:'5px'}} />Photography </button><button className='hobbiesbutton' style={{border:"none",borderRadius:"7px", width:'150px'}}><TbShoppingBag style={{marginBottom:'5px', marginRight:'5px'}} />Shopping</button></div>
       {/* First two buttons ends here */}
       <div className=' d-flex  align-items-center gap-4 ' ><button className='hobbiesbutton'style={{border:"none",borderRadius:"7px", width:'150px',}}> <CiMicrophoneOn style={{marginBottom:'5px', marginRight:'5px'}}/>Kraoke </button><button className='hobbiesbutton' style={{border:"none",borderRadius:"7px", width:'150px'}}> <GrYoga style={{marginBottom:'5px', marginRight:'5px'}} />Yoga</button></div>
       {/* Second two buttons ends here */}
       <div className=' d-flex  align-items-center gap-4 ' ><button className='hobbiesbutton' style={{border:"none",borderRadius:"7px", width:'150px',}}><CiBowlNoodles style={{marginBottom:'5px', marginRight:'5px'}} />Cooking </button><button className='hobbiesbutton'style={{border:"none",borderRadius:"7px", width:'150px'}}><CiBaseball style={{marginBottom:'5px', marginRight:'5px'}} />Tennins</button></div>
       {/* Third two buttons ends here */}
       <div className=' d-flex  align-items-center gap-4 ' ><button className='hobbiesbutton' style={{border:"none",borderRadius:"7px", width:'150px',}}><LiaRunningSolid style={{marginBottom:'5px', marginRight:'5px'}} />Run </button>
       <button className='hobbiesbutton'style={{border:"none",borderRadius:"7px", width:'150px'}}><FaPersonSwimming style={{marginBottom:'5px', marginRight:'5px'}}/>Swimmimg</button></div>
       {/* Four two buttons ends here */}
       <div className=' d-flex  align-items-center gap-4 ' ><button className='hobbiesbutton'> <IoColorPaletteOutline style={{marginBottom:'5px', marginRight:'5px'}} />Art </button><button className='hobbiesbutton' >
       <PiMountainsLight style={{marginBottom:'5px', marginRight:'5px'}} />Travelling</button></div>
       {/* Five two buttons ends here */}<div className=' d-flex  align-items-center gap-4 ' ><button className='hobbiesbutton'><TbParachute style={{marginBottom:'5px', marginRight:'5px'}} />Extreme </button><button className='hobbiesbutton'> <IoIosMusicalNotes style={{marginBottom:'5px', marginRight:'5px'}} />Music</button></div>
       {/* Six two buttons ends here */}
       <div className=' d-flex  align-items-center gap-4 ' ><button className='hobbiesbutton'><BiDrink  style={{marginBottom:'5px', marginRight:'5px'}}/>Drink </button><button className='hobbiesbutton' >  <IoGameControllerOutline style={{marginBottom:'5px', marginRight:'5px'}} />Games</button></div>
       {/* Seven two buttons ends here */}
       <div> <input style={{borderRadius:"10px",marginRight:'10px',}}id='ethinicity' type="checkbox" />
            <label  htmlFor="ethinicity"> <p style={{ fontSize:"13px",marginRight:'220px',marginBottom:'3px' }}>Show hobbies on profile?</p></label> </div>
       <div><button className='btn btn-info' style={{width:'400px'}}>Next</button></div>
       
      </div>
    </div>
  )
}

export default Hobbies
