import React from 'react'
import bacgroundOTP from '../Images/image.png'
import wrongotp from '../Images/Group 38554.png'
const WrongOTP = () => {
  return (
    <div className='container-fuid vh-100  class'>
      <div className='firstimage'><img height={550} width={1200} src={bacgroundOTP} alt="" srcset="" /></div>
      <div  className='secondimage'><img src={wrongotp} alt="" srcset="" /></div>
    </div>
  )
}

export default WrongOTP
