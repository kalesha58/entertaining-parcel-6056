import React from 'react'
import "./Header.css"
// import "moutain_with _fog" from "../Assests/"
import outlookindia from "../../Assests/outlookindia.png"

function Header() {
  return (
    <div className='outlook_img'>

      <img src={outlookindia} alt="outlook" />
      <div className='log_sub'>

      <p>Login</p>
      <p>Subscribe</p>
      </div>
    </div>
  )
}

export default Header
