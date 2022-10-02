import React from "react";
import outlookindia from "../../Assests/outlookindia.png";
import "./model.css";
import { Navigate } from "react-router-dom";

function Model({ closeModel }) {
  return (
    <div className="modelbackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              closeModel(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <img src={outlookindia} alt="out" />
          <h2>Outlook India</h2>
        </div>
        <div className="body">
          <h4>Enter Your Email form Verification </h4>
          <input type="text" placeholder="Enter Email Adress" />
        </div>
        <div className="footer">
          <button
            onClick={() => {
              closeModel(false);
            }}
          >
            Login
          </button>
          <br />
          <button>Login WIth Google</button>
        </div>
      </div>
    </div>
  );
}

export default Model;
