import React from 'react'
import perfectmatch from '../Images/Match.png'
import Premiun from '../Images/premium.png'
import { TbBrandApple } from "react-icons/tb";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";

const PerfectMatch = () => {
  return (
    <div className='container-fuid  d-flex  justify-content-center  align-items-center gap-4 mt-3 '>
        {/* burger div stsrts from here */}
      <div className='burger'>
        <img src={perfectmatch} alt="" srcset="" />
        
      </div >
      <div className='filterdiv' style={{marginBottom:'400px',borderRadius:'100%', height:'50px',width:'50px', display:'flex', justifyContent:'center',alignItems:'center'}}><CiFilter size={30} /></div>
      {/* burger div ends here */}

      {/* Premium div starts from here */}
      <div className='col-md-2  rightside'>
      <div className='premium'>
      <img style={{objectFit:'cover',height:'100px',}}  src={Premiun} alt="" srcset="" />
      </div>
      {/* empty div starts here */}
      <div className='emptydiv'>

      </div>
     {/* empty div   here */}
    <div>
                <button className='downloadButton'> <TbBrandApple size={30}/> Download On the<b>App Store</b></button>
               
                <button style={{marginBottom:'30px'}} className='downloadButton'> <IoLogoGooglePlaystore size={30} /> GET IT ON <b>GOOGLE PLAY</b></button>
              
              </div>
    </div>
      
    </div>
  )
}

export default PerfectMatch
