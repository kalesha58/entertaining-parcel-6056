import React from "react";
import { BusinessDropdown } from "../NavItems";
import { Link } from "react-router-dom";
import "./DropDownBusiness.css";
import { useState } from "react";

function DropDown() {
    const [dropdown,setDropdown] =useState(false);
  return (
    <ul className={dropdown?  "services-submenu3 clicked" :"services-submenu3" } onClick={()=>setDropdown(!dropdown)} >
      {BusinessDropdown.map((el) => {
        return (
          <li key={el.id}   >
            <Link to={el.path} className={el.cName}  onClick={()=>setDropdown(false)} >
              {el.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default DropDown;
