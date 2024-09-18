import React from 'react'
import lauren from '../Images/2.png'
import five from '../Images/5.png'
import Premiun from '../Images/premium.png'
import { TiSocialLinkedin } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { TbBrandApple } from "react-icons/tb";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaBehance } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";
const Home = () => {
  return (
    <div className='container-fuid  d-flex flex-column align-items-center home'>
        {/* firstdiv starts from here */}
        <div className='firstdiv'>
      <div >
    <img style={{objectFit:'cover',height:'280px',}} src={lauren} alt="" srcset="" />
      </div>

<div className='sidediv'>
    <div>
        <img style={{objectFit:'cover',height:'100px',}}  src={Premiun} alt="" srcset="" />
    </div>
    <div>
    <div>
                <button className='downloadButton'> <TbBrandApple size={30}/> Download On the<b>App Store</b></button>
               
                <button style={{marginBottom:'30px'}} className='downloadButton'> <IoLogoGooglePlaystore size={30} /> GET IT ON <b>GOOGLE PLAY</b></button>
              
              </div>
    </div>

</div>




      </div>
      {/* first main div ends here */}




    <div className='Seconddiv'>

      <div>
    <img style={{objectFit:'cover',height:'250px',}}src={five} alt="" srcset="" />
      </div>
    
      <div className='list'><b style={{marginLeft:'30px'}}>Preferences</b><ul>
                <li style={{marginRight:'100px'}}>Share App</li>
                <li>Blocked Profiles</li>
                <li>Delete Account</li>
                <li>Supprort</li>
                 
                </ul>
                {/* list one div one ends here */}
           
            
                <b style={{marginLeft:'30px'}}>Legal & Safety</b> <ul>
                <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                     <li>Safety Tips</li>
                     <li>Online safety guide </li>
                    
                </ul>
             {/* listTwo div ends here */}
             </div> 
             </div>
             {/* second div ends here */}
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
        <p style={{marginLeft:'100px',marginBottom:'100px'}}><MdCopyright /> Senior Sparks</p> 
      </div>
     
  )
 
  
}

export default Home
