import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import UpcomingEvents from '../Images/Upcoming Events.png'
import FrameEvents from '../Images/Frame 72.png'
import EventsOne from '../Images/Events (1).png'
import EventsTwo from '../Images/Events (2).png'
import { FaTwitter } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { TbBrandApple } from "react-icons/tb";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaBehance } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";




const Searchandcreateevent = () => {
  return (
    <div className=' Searcheventmaindiv'>
      <div>
      <IoIosSearch size={20} className='searcheventicon'  /> 
        <input className='Serachevents' type="text" placeholder='Serach events here'/>
      </div>
      <div className='leftrightPartition'>
        <div className='leftside'>
            <button className='btn btn-info'><GoPlus size={30} />Create Event</button>
            <img className='UpcomingEvents' src={UpcomingEvents} alt="" srcset="" />
        </div>
        <div className='rightside'>
            <div className='rightsidefirstdiv'>
                <div className='rightsidefirstdiv1'><img src={FrameEvents} alt="" srcset="" /></div>
                
               <div className='rightsidefirstdiv2'><img src={EventsOne} alt="" srcset="" /></div> 
            </div>
            <div className='rightsideSeconddiv'>
                <img src={EventsTwo} alt="" srcset="" />
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

export default Searchandcreateevent
