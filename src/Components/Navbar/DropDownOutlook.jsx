import React from "react";
import { serviceDropdown } from "./NavItems";
import { Link } from "react-router-dom";
import "./DropDownOutlook.css";
import { useState } from "react";

function DropDown() {
    const [dropdown,setDropdown] =useState(false);
  return (
    <ul className={dropdown?  "services-submenu1 clicked" :"services-submenu1" } onClick={()=>setDropdown(!dropdown)} >
      {serviceDropdown.map((el) => {
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
