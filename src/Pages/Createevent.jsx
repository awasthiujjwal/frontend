import React from 'react'
import event from '../Images/Create Event.png'
import { FaTwitter } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { TbBrandApple } from "react-icons/tb";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaBehance } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";
const Createevent = () => {
  return (
    <div className='container-fuid vh-100 d-flex flex-column align-items-center '>
      <div className='createeventdiv' >

        <img className='Createevent' src={event} alt="" srcset="" />
      </div>
       {/* footer starts from here */}
        
       <footer className='footercreateevent'>
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

export default Createevent
