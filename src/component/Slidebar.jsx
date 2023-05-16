import React, { useState } from "react";
import Obj_logo from "../images/LOGO_OBJ.svg";

// ICONS
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
import * as AiIcons from "react-icons/ai";

import { IconContext } from "react-icons";

// ROUTING

import { Link } from "react-router-dom";

// DATA FILE
import { SidebarData } from "./SlidebarData";

// STYLES
import "./Navbar.css";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
        <div className="navbar">
        <div className='d-flex brand_logo'>
            <img className='Obw_logo' src={Obj_logo} alt="BigCo Inc. logo" />
          </div>
  <div className="user-profile ">
            <span>Welcome, John Doe</span>
            <Link to="/logout">
              <AiIcons.AiOutlineLogout />
            </Link>
          </div>
       
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
  
  <ul className="nav-menu-items mt-5">
  <h2 className="d-flex justify-content-center">Dashbboard</h2>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        </div>
</>
  );
}