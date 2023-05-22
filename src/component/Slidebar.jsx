import React, { useState } from "react";
import Obj_logo from "../images/LOGO_OBJ.svg";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { SidebarData } from "./SlidebarData";
import "./Navbar.css";


export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  
  const showSidebar = () => setSidebar(!sidebar);

  const [ticketsDropdown, setTicketsDropdown] = useState(false);

  const showTicketsDropdown = () => setTicketsDropdown(!ticketsDropdown);

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
<div className="nav-menu-items ">
          <h2 className="d-flex justify-content-center">Dashboard</h2>
          {SidebarData.map((item, index) => {
            if (item.subMenu) {
              return (
<div key={index} className="nav-dropdown dropdown">
                  <div
                    className="nav-dropdown-toggle"
                    onClick={showTicketsDropdown}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                    {ticketsDropdown ? (
                      <IoIcons.IoMdArrowDropup />
                    ) : (
                      <IoIcons.IoMdArrowDropdown />
                    )}
                  </div>
                  {ticketsDropdown && (
                <ul className="nav-dropdown-menu ">
                      {item.subMenu.map((subItem, subIndex) => {
                        return (
                          <li key={subIndex} className={subItem.cName}>
                            <Link to={subItem.path}>
                              <span>{subItem.title}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              );
            } else {
              return (
                <div key={index} className="nav-menu-item d-flex justify-content-center">
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </div>
              );
            }
          })}
        </div>
        </nav>
        </div>
</>
  );
}