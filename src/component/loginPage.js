import React, { useState, useEffect } from 'react';
import Navbar from "./navbarPage"
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Obj_logo from "../images/LOGO_OBJ.svg";
import { Route, Routes, Navigate, Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {  IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Footer from "./footer"
import Swal from "sweetalert2"; 
import * as msal from "@azure/msal-browser";

const LoginPage = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [msalInstance, setMsalInstance] = useState(null);

  useEffect(() => {
    const msalConfig = {
      auth: {
        clientId: 'fd3dbf85-5165-4f33-acba-df561af037fc',
        authority: 'https://login.microsoftonline.com/e3a8fbd0-f304-4461-b677-0307f53e904a',
        redirectUri: 'http://localhost:3000',
      },
      cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: true,
      },
    };
    const msalInstance = new msal.PublicClientApplication(msalConfig);
    setMsalInstance(msalInstance);
  }, []);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMicrosoftLogin = async () => {
    const loginRequest = {
      scopes: ['openid', 'profile', 'email'],
    };
    try {
      await msalInstance.loginRedirect(loginRequest);
    } catch (error) {
      console.log('Authentication failed', error);
      Swal.fire({
        title: 'Error',
        text: 'Authentication failed.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };
const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    const loginRequest = {
      scopes: ['openid', 'profile', 'email'],
    };
    await msalInstance.loginRedirect(loginRequest);
  } catch (error) {
    console.log('Authentication failed', error);
    Swal.fire({
      title: 'Error',
      text: 'Authentication failed.',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }
};
  return (
    <div>
      {/* <Navbar /> */}
      <div className='sec_two d-flex justify-content-center align-items-center color'>
        <div className='d-flex justify-content-center'>
        <img src={Obj_logo} alt="objectways logo" className='Obw_logo2'/>
        </div>
      </div>
      <div className='hm_sec_3'>
        <div className='container  d-flex justify-content-center '>
          <form onSubmit={handleSubmit} className='loginPage'>
            <div className=" d-flex justify-content-center login_icon mt-5">
              <i className="fas fa-light fa-user color "></i>

              {/* <FontAwesomeIcon icon="fas fa-duotone fa-user" className='color' /> */}
            </div>
            <div className='d-flex flex-column gap-4 login_input mt-5'>
              <div>
              <TextField
     sx={{ width: 300 }}
     label="Email"
     id="email"
     size="small"
     className="email_login"
     type="email"
     value={username}
     onChange={(e) => setUsername(e.target.value)}
     required
   />
              </div>
              <div>
              <TextField
     sx={{ width: 300 }}
     label="Password"
     id="password"
     size="small"
     type={showPassword ? 'text' : 'password'}
     value={password}
     onChange={(e) => setPassword(e.target.value)}
     required
     InputProps={{
       endAdornment: (
         <InputAdornment position="end">
           <IconButton
             onClick={handleClickShowPassword}
             onMouseDown={handleMouseDownPassword}
             edge="end"
           >
             {showPassword ? <VisibilityOff /> : <Visibility />}
           </IconButton>
         </InputAdornment>
       )
     }}
   />
                         </div>
                         </div>
                         <div className='d-flex justify-content-center mt-3'>
              {/* <button type="submit" className='btn btn-primary btn_hm login_btn'>Login</button> */}
            </div>
            <div className='d-flex justify-content-center mt-3'>
        <button type="submit" className='btn btn-primary btn_hm login_btn'>Login</button>
      </div>
            <div className='d-flex justify-content-center mt-4'>
              <Link to="/">
                Back to home 
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </div>

  );
};

export default LoginPage;