import React, { useState } from 'react';
import Navbar from "./navbarPage"
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Swal from "sweetalert2";

const LoginPage = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if the username and password are correct
    if (username === 'adminMain' && password === 'Code-red') {
      // Call the handleLogin function passed down from the parent component
      //   handleLogin();
      window.location = '/dashboardTC'
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Username or Password is wrong.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div className='sec_two d-flex justify-content-center align-items-center'>
        <h1>Timechamp Team Login</h1>
      </div>
      <div className='hm_sec_3'>
        <div className='container  d-flex justify-content-center '>
          <form onSubmit={handleSubmit} className='loginPage'>
            <div className=" d-flex justify-content-center login_icon">
              <i className="fas fa-light fa-user color "></i>

              {/* <FontAwesomeIcon icon="fas fa-duotone fa-user" className='color' /> */}
            </div>
            <div className='d-flex flex-column gap-4 login_input'>
              <div>
                <TextField
                  sx={{ width: 280 }}
                  label="Admin Name"
                  id="outlined-size-small"
                  // defaultValue="Small"
                  size="small"
                  className="email_login"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}

                  required
                />
              </div>
              <div>
                <TextField
                  sx={{ width: 280 }}
                  label="Password"
                  id="outlined-size-small"
                  // defaultValue="Small"
                  size="small"
                  className="email_login"
                  type="password"

                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className='d-flex justify-content-center'>
              <button type="submit" className='btn btn-primary btn_hm login_btn'>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
};

export default LoginPage;