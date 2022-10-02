import React from 'react'
import "./Header.css"
// import "moutain_with _fog" from "../Assests/"
import outlookindia from "../../Assests/outlookindia.png"
import Model from '../Model/Model'
import { useState } from 'react'
// import Otp from '../OTP/Otp'

function Header() {
  const [show,setShow]=useState(false);
  
  return (
    <div className='outlook_img'>

      <img src={outlookindia} alt="outlook" />
      <div className='log_sub'>
      <div className='app'>

      <button className='operation_btn' onClick={()=>{setShow(true)}}>Login</button>
      {show && <Model closeModel={setShow}/>}
      <p>Subscribe</p>
      </div>
   
      </div>
    </div>
  )
}

export default Header
