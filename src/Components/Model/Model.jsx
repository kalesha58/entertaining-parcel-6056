import React from "react";
import outlookindia from "../../Assests/outlookindia.png"
import "./model.css"

function Model({closeModel}) {
  return (
    <div className="modelbackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">

        <button onClick={()=>{closeModel(false)}}>X</button>
        </div>
        <div className="title">
            <img src={outlookindia} alt="out" />
            <h2>Outlook India</h2>
        </div>
        <div className="body">
            <p>Enter Your Email form Verification </p>
            <input type="text" placeholder="Enter Email Adress" />
        </div>
        <div className="footer">
            <button>Get OTP</button>
            <br />
            <button>Login WIth Google</button>
        </div>
      </div>
    </div>
  );
}

export default Model;
