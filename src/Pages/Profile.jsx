import React from 'react'
import singlelauren from '../Images/photo main.png'
import firstpic from '../Images/firstpic.png'
import Premiun from '../Images/premium.png'
import Secondpic from '../Images/Secondpic.png'
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
import { IoCameraReverseSharp } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { TbBrandApple } from "react-icons/tb";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaBehance } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";
const Profile = () => {
  return (
    <div className='header'>
    <div className='container-fuid  gap-5   premiumplusprofile'>
    <div className='mainprofilediv'>
      <div className='Profilediv1'>
    <div className='Photodiv' >
        <img  src={singlelauren} alt="" srcset="" />
    </div>
    <div className='contentdiv'>
   <div  style={{display:'flex', justifyContent:"space-between",  width:'100%'}}> <h3>   Lauren Sowak, 56    <p>Amesterdam</p> </h3>
 <FiEdit style={{marginBottom:'100px'}} />
</div>


  
  
      <div className='details' >
       
        <b>Birthday</b> : 23-10-1969<br />
        <b>Gender</b> : Female<br />
       <b>Mobile</b> : +1 1234567890<br />
       <b>Email</b>:xyz@gmail.com<br />

      </div>
      
      </div>
      </div>

      {/* Profi 1..div ends here */}
      <div className='bigProfilediv'>
        <div className='Profilediv2'>
            <div style={{display:'flex', justifyContent:"space-between"}}> <h3><b>MY PHOTOS</b></h3>
            <FiEdit />
            </div>
            <div style={{display:'flex', alignItems:'center',gap:'10px'}}>
            <div className='pic'><img src={firstpic} alt="" srcset="" /></div>
            <div className='pic'><img src={Secondpic} alt="" srcset="" /></div>
            <div className='pic'><img src={Secondpic}alt="" srcset="" /></div>
            <div className='pic' style={{display:'flex', justifyContent:"center ", alignItems:'center',gap:'10px', paddingBottom:'70px'}}><IoCameraReverseSharp size={100} /></div>
            </div>
        </div>
        <div  className='Profilediv3'>
           <div style={{display:'flex', justifyContent:"space-between"}}> <h4><b>I'm looking for</b></h4>
            <FiEdit />
            </div >
            <div className='buttondiv'>
            <button>Men</button>
            <button>Women</button>
            </div>
            </div>
        <div className='Profilediv4'>
        <div style={{display:'flex', justifyContent:"space-between"}}> <h4><b>Interests</b></h4>
            <FiEdit />
         
            </div>
            <div  className='hobbiesbutton1'>
            <div className='hobbiesbutton'>Journeys</div>
            <div className='hobbiesbutton'>SnowBoarding</div>
            <div className='hobbiesbutton'>Design</div>
            <div className='hobbiesbutton'>Video Games</div>
            <div className='hobbiesbutton'>Cross Stitch</div>
            </div>
        </div>
        <div className='Profilediv5'>
        <div style={{display:'flex', justifyContent:"space-between"}}> <h4><b>Hobbies</b></h4>
            <FiEdit />
            </div>
            <div  className='hobbiesbutton1'>
            <div className='hobbiesbutton'>Journeys</div>
            <div className='hobbiesbutton'>SnowBoarding</div>
            <div className='hobbiesbutton'>Design</div>
            <div className='hobbiesbutton'>Video Games</div>
            <div className='hobbiesbutton'>Cross Stitch</div>
            </div>
        </div>
        <div className='Profilediv6'>
        <div style={{display:'flex', justifyContent:"space-between"}}> <h4><b>About</b></h4> 
       
            <FiEdit />
           
            </div>
            <p>My name is lauren sauwek and i enjoy meeting new people and finding ways to help them an uplifting expierence. I enjoy....</p>
        </div>

      </div>
      </div>
      {/* bigProfi..div ends here */}
      <div className='profilepremium' style={{ margin:'20px',padding:'10px'}}>
         {/* Premium div starts from here */}
    
    <div className='premium'>
    <img style={{objectFit:'cover',height:'max-content',width:'200px'}}  src={Premiun} alt="" srcset="" />
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
              <button className='downloadButton'> <TbBrandApple size={30}/> Download On the<b>App Store</b></button>
             
              <button style={{marginBottom:'30px'}} className='downloadButton'> <IoLogoGooglePlaystore size={30} /> GET IT ON <b>GOOGLE PLAY</b></button>
            
            </div>
            {/* button div ends here */}

                       {/* empty div starts here */}
    <div className='emptydiv'>
  
  </div>
 {/* empty div   here */}
          

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

export default Profile
