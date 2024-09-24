import React from 'react'
import { IoIosSearch } from "react-icons/io";
import Merry from '../Images/Merry.png'
import Smith from '../Images/Smith.png'
import Wayne from '../Images/Wayne.png'
import Monica from '../Images/Monica.png'
import Innocent from '../Images/innocent.png'
import Mathewchat from '../Images/Mathew chat.png'
import { IoMicOutline } from "react-icons/io5";
import content from '../Images/Content.png'
import { PiDotsThreeOutlineThin } from "react-icons/pi";
import { LuDot } from "react-icons/lu";
import mountain from '../Images/Background (1).png'
import chemical from '../Images/Background.png'
const Chatpage = () => {
  return (
    <div className='container-fuid chatpage1'>
      <div  className='chatpage2'>
        <h3>Chat</h3>
        <input className='search' type="search"  placeholder ='Search here' />
        
       <IoIosSearch size={20} className='searchicon'  /> 
        <IoMicOutline size={20} className='micicon' />
        <div className='Chatbar'>
            <h4>Messages</h4>
            <div className='Chat' ><img  src={Smith} alt="" srcset="" />
            {/* <b>Smith Mathew</b> */}
            <img height={50} width={180}src={Mathewchat} alt="" srcset="" />
            </div>
            <div className='Chat'><img src={Merry} alt="" srcset="" />
            {/* <b>Merry An.</b> */}
            <img height={50} width={180}src={Mathewchat} alt="" srcset="" />
            </div>
            <div className='Chat'><img src={Wayne} alt="" srcset="" />
            {/* <b>Johna Wale</b> */}
            <img height={50} width={180}src={Mathewchat} alt="" srcset="" />
            </div>
            <div className='Chat'><img src={Monica} alt="" srcset="" />
            {/* <b>Monica Randawa</b> */}
            <img height={50} width={180}src={Mathewchat} alt="" srcset="" />
            </div>
            <div className='Chat'><img src={Innocent} alt="" srcset="" />
            {/* <b>Innocent Jay</b> */}
            <img height={50} width={180}src={Mathewchat} alt="" srcset="" />
            </div>
        </div>
      </div>
      <div  className='chatpage3'>
        <img className='content' src={content}alt="" srcset="" />
      </div>
      <div  className='chatpagesidebar'>
        
            <div  className='chatpagesidebar2'>
                <div  className='chatpagesidebar3'><img src={Merry} alt="" srcset="" /></div>
                <div className='chatpagesidebar4'>
                  
                <h4>Nina patester</h4>
                <p>Active now <LuDot size={30}/></p>
                </div>
               <div className='menuicon'><PiDotsThreeOutlineThin   /></div> 
              <div className='list' >
             <ul>
              <li className='chatpagelist'>Unmatch</li>
              <li className='chatpagelist'>Report</li>
              <li className='chatpagelist'>Block</li>
             </ul>
             
             </div>
            </div>
            <p>Media <span className='twenty'>20</span> </p>
            <div  className='chatpagesidebar1'>
        
        <div className='firstimage'><img src={chemical} alt="" srcset="" /></div>
        {/* <div className='secondimage'><img src={mountain} alt="" srcset="" /></div> */}
        {/* <div className='secondimage'><img src={mountain} alt="" srcset="" /></div> */}
        </div>
      </div>
    </div>
  )
}

export default Chatpage
