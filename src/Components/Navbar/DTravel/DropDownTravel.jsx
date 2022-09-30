import React from "react";
import { TravelDropdown } from "../NavItems";
import { Link } from "react-router-dom";
import "./DropDownTravel.css";
import { useState } from "react";

function DropDown() {
    const [dropdown,setDropdown] =useState(false);
  return (
    <ul className={dropdown?  "services-submenu2 clicked" :"services-submenu2" } onClick={()=>setDropdown(!dropdown)} >
      {TravelDropdown.map((el) => {
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
