import React from 'react'
import Images from '../Images/Chat.png'
import Images2 from '../Images/Events.png'
import { FaTwitter } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { TbBrandApple } from "react-icons/tb";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaBehance } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";

const Start = () => {
  return (
    <div >
        
        <div className='Container'>
        
            <div className='first'> 
            <span className='headingcolor'>
                <span><h3>SENIOR</h3></span>
                <span><h3 id='pinkcolor'>SPARKS</h3></span>
            </span>
                <h1>Find Your Match With Lavie Connect</h1> <br />
                <br />
               <p> With lots of unique people you can easily find a partner without hassle. Build your next connection with in few minutes.</p><br />
               <br />
                <button className='button'> GetStarted</button>
             <b>DOWNLOAD OUR APP</b>
            <span className='download'>
             <span >
                <button className='downloadButton'> <TbBrandApple size={30}/> Download On the<b>App Store</b></button>
                </span>
              <span>
                <button className='downloadButton'> <IoLogoGooglePlaystore size={30} /> GET IT ON <b>GOOGLE PLAY</b></button>
              </span>
              </span>
                </div> {/* first div ends here */}
               {/* /* {second div starts from here} */ }
            <div className='Second'>
            <button className="secondbutton">Get Started</button>
             <div className='star'>
                    <p>**************<br />**************<br />**************<br />**************<br />**************<br /></p>
            </div> 
            {/* star div ends here */}
            <div className='images'>
                <img className='firstImage' width={250} height={400}  src={Images}alt="" srcset="" />
                <img className='secondImage' width={200} height={300} src={Images2} alt="" srcset="" />
                </div>
                </div> {/* second div ends here */}
               
        </div>{/* Container div ends here */}


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
            <div className='listone'><b>Menu</b><ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Blog</li>
                <li>Posts</li>
                <li>HeHe</li>
                </ul>
                </div> {/* list one div one ends here */}
           
            <div className='listTwo'>
                <b>Legal</b> <ul>
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
       <p><MdCopyright /> Senior Sparks</p> 
    </div>
  )
}

export default Start
