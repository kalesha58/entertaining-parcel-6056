import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { navItems } from "../Navbar/NavItems";

import DropDownOutlook from "./DropDownOutlook";
import DropDowBusiness from "./DBusiness/DropDownBusiness";
import DropDownTravel from "./DTravel/DropDownTravel"
import { useState } from "react";

function Navbar() {
  const [dropdown, setShowdropdown] = useState(false);
  const [dropdownB, setShowdropdownB] = useState(false);
  const [dropdownT, setShowdropdownT] = useState(false);
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
                <Link className="links-names" to={link.path}>
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ui>
      </nav>
        <hr className="line" />
    </>
  );
}

export default Navbar;
