import React from "react";
import "./Navbar.css";
import { json, Link, useNavigate } from "react-router-dom";
import { navItems } from "../Navbar/NavItems";

import DropDownOutlook from "./DropDownOutlook";
import DropDowBusiness from "./DBusiness/DropDownBusiness";
import DropDownTravel from "./DTravel/DropDownTravel"
import { useState } from "react";
import {GrFormClose} from "react-icons/gr"

function Navbar() {
  const [dropdown, setShowdropdown] = useState(false);
  const [dropdownB, setShowdropdownB] = useState(false);
  const [dropdownT, setShowdropdownT] = useState(false);
  const [show, setShow] = useState(false);
  const [search,setSearch]=useState("")
  const navigate=useNavigate()

  const handleShow=()=>{
    setShow(true)
  }

  const handleSearch=()=>{
    localStorage.setItem("search",JSON.stringify({search}))
    navigate("/search")
  }
  return (
    <>
      <nav className="navbar">
        <ui className="nav-items">
          {navItems.map((link) => {
            if (link.title === "Outlook") {
              return (
                <li
                  key={link.id}
                  className={link.cName}
                  onMouseEnter={() => setShowdropdown(true)}
                  onMouseLeave={() => setShowdropdown(false)}
                >
                  <Link className="links-names" to={link.path}>
                    {link.title}
                  </Link>
                  {dropdown && <DropDownOutlook />}
                </li>
              );
            }

            if (link.title === "Business") {
              return (
                <li
                  key={link.id}
                  className={link.cName}
                  onMouseEnter={() => setShowdropdownB(true)}
                  onMouseLeave={() => setShowdropdownB(false)}
                >
                  <Link className="links-names" to={link.path}>
                    {link.title}
                  </Link>
                  {dropdownB && <DropDowBusiness />}
                </li>
              );
            }

            if (link.title === "Travel") {
              return (
                <li
                  key={link.id}
                  className={link.cName}
                  onMouseEnter={() => setShowdropdownT(true)}
                  onMouseLeave={() => setShowdropdownT(false)}
                >
                  <Link className="links-names" to={link.path}>
                    {link.title}
                  </Link>
                  {dropdownT && <DropDownTravel />}
                </li>
              );
            }
            return (
              <li key={link.id} className={link.cName}>
                <Link onClick={()=>{
                  link.id==14&&handleShow()
                }} className="links-names" to={link.path}>
                  {link.title}
                </Link>
              </li>
            );
          })}
          
        </ui>
      </nav>
        <div className={show?"show":"hide"} style={{width:"350px",border:"1px solid black",padding:"10px 0px",position:"absolute",right:"75px",marginTop:"-20px"}}>
          <div style={{textAlign:"right",paddingRight:"20px",fontSize:"26px",fontWeight:"700"}}>
            <span onClick={()=>{
              setShow(false)
            }}><GrFormClose /></span>
          </div>
          <div>
            <input style={{width:"60%",height:"20px",paddingTop:"-40px"}} type="text" placeholder="Search.." onChange={(e)=>setSearch(e.target.value)}/>
            <button className="btn" onClick={handleSearch}>Submit</button>
          </div>
        </div>
        <hr className="line" />

    </>
  );
}

export default Navbar;
