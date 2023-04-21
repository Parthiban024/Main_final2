import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Obj_logo from "../images/LOGO_OBJ.svg";
import React, { useState, useEffect } from 'react';

const Footer = () =>{


    return(

<div className="Obj_logo ">
    <p className='text-center link'><a href="https://objectways.com/privacy-policy.html">Privacy Policy</a> | <a href="https://objectways.com/terms-of-use.html">Terms of Use</a></p>
 <p className='text-center'>Copyright &#169;2022 Objectways - All right reserved.</p>
</div>


    )
}
 
export default Footer