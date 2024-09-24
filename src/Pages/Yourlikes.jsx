import React from 'react'
import singlelauren from '../Images/photo main.png'
import lauren2 from '../Images/lauren2.png'
import lauren3 from '../Images/lauren3.png'
import emi from '../Images/emi.png'
import Premiun from '../Images/premium.png'
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineProfile } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { IoManOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { IoIosLogOut } from "react-icons/io";
import { IoChevronForward } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { TbBrandApple } from "react-icons/tb";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaBehance } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";
import { CiFilter } from "react-icons/ci";
const Yourlikes = () => {
  return (
    <div className='matchesmaindiv'>
        
        <div className='Secondmaindiv'>

      
      <div className='updown'><b>YOUR <span style={{color:'blue'}}>LIKES</span>(11)</b>
      <button><CiFilter size={30} /></button></div>
  
      <div className='partition'>
        
      <div>
      <div className='secondmaindivpics'>
  <div className='secondmaindivpic1'> <img style={{height:'300px',width:'200px',borderRadius:'30px'}} src={singlelauren} alt="" srcset="" /> </div>
 <div className='secondmaindivpic2'> <img style={{height:'300px',width:'200px'}} src={emi} alt="" srcset="" /></div>
  <div className='secondmaindivpic3'> <img style={{height:'300px',width:'200px',borderRadius:'30px'}} src={lauren2} alt="" srcset="" /></div>
  <div className='secondmaindivpic4'> <img style={{height:'300px',width:'200px',borderRadius:'30px'}} src={lauren3} alt="" srcset="" /></div>
  </div>
      <div className='secondmaindivpics'>
  <div className='secondmaindivpic1'> <img style={{height:'300px',width:'200px',borderRadius:'30px'}} src={singlelauren} alt="" srcset="" /> </div>
 <div className='secondmaindivpic2'> <img style={{height:'300px',width:'200px'}} src={emi} alt="" srcset="" /></div>
  <div className='secondmaindivpic3'> <img style={{height:'300px',width:'200px',borderRadius:'30px'}} src={lauren2} alt="" srcset="" /></div>
  <div className='secondmaindivpic4'> <img style={{height:'300px',width:'200px',borderRadius:'30px'}} src={lauren3} alt="" srcset="" /></div>
  </div>
 </div>
   {/* Premium div starts from here */}
   <div className='profilepremium' style={{ margin:'20px',padding:'10px', }}>
        
    
        <div className='premium'>
        <img style={{objectFit:'cover',height:'max-content',width:'200px',marginLeft:'30px'}}  src={Premiun} alt="" srcset="" />
        </div>
        <div className='settings'>
        <div className='settingdiv'><IoSettingsOutline  />Share app <IoChevronForward style={{marginLeft:'50px'}} /></div>
        <div className='settingdiv'> <AiOutlineProfile />Blocked profiles<IoChevronForward style={{marginLeft:'10px'}}/></div>
        <div className='settingdiv'><FaRegEye />Delete Account  <IoChevronForward style={{marginLeft:'15px'}} /></div>
        <div className='settingdiv'>
        <FaHeadset />Support <IoChevronForward style={{marginLeft:'65px'}}/> </div>
        <div className='settingdiv'><IoIosMenu />Terms of service<IoChevronForward style={{marginLeft:'10px'}} /></div>
        <div className='settingdiv'><CiCalendar /> privacy poicy<IoChevronForward style={{marginLeft:'30px'}} /></div>
        <div className='settingdiv'><IoManOutline />safety tips<IoChevronForward  style={{marginLeft:'50px'}}/></div>
        <div className='settingdiv'>
        <IoBookOutline />Online safety guide <IoChevronForward  /> </div>
        <div className='settingdiv'><TiMessages /> FAQ <IoChevronForward style={{marginLeft:'90px'}} /></div>
        <div className='settingdiv'>
        <IoIosLogOut />Log OUT <IoChevronForward style={{marginLeft:'55px'}}/></div>
        </div>
      <div >
                  <button className='buttondownload'> <TbBrandApple size={30}/> Download On the<b>App Store</b></button>
                 
                  <button style={{marginBottom:'30px'}} className='buttondownload'> <IoLogoGooglePlaystore size={30} /> GET IT ON <b>GOOGLE PLAY</b></button>
                
                </div>
                {/* button div ends here */}
    
                           {/* empty div starts here */}
        <div className='emptydiv'>
      
      </div>
     {/* empty div   here */}
              
    
                </div>
  </div>
  
      </div>
{/* footer starts from here */}
        
<footer className='footer'>
        <div className='footer1'>
        <span className='headingcolor'>
                <span><h3>SENIOR</h3></span>
                <span ><h3 className='color' >SPARKS</h3></span>
            </span>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illo eius mollitia suscipit quod! Quasi, laboriosam. Totam pariatur eaque laudantium in temporibus corporis libero, ab eveniet, enim ipsa itaque laboriosam.</p>
            
            <div className='icons'>
            <FaTwitter size={30}/>
            <TiSocialLinkedin size={30} />
            <FaInstagramSquare size={30} />
            <FaYoutube size={30} />
            <IoLogoWhatsapp size={30} />
            <FaBehance size={30} />
            </div>
            </div>
            <div className='listone'><b style={{marginLeft:'30px'}}>Menu</b><ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Blog</li>
                <li>Posts</li>
                <li>HeHe</li>
                </ul>
                </div> {/* list one div one ends here */}
           
            <div className='listTwo'>
                <b style={{marginLeft:'30px'}}>Legal</b> <ul>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Support</li>
                    <li>Report</li>
                    <li>Contact</li>
                </ul>
                </div> {/* listTwo div ends here */}

                <div>
                <button className='downloadButton'> <TbBrandApple size={30}/> Download On the<b>App Store</b></button>
               
                <button className='downloadButton'> <IoLogoGooglePlaystore size={30} /> GET IT ON <b>GOOGLE PLAY</b></button>
              
              </div>
        </footer>
        <center> <p ><MdCopyright />2024 Senior Sparks</p> 
      <p>All rights reserved</p>
      </center>
    </div>
  
  )
}

export default Yourlikes

