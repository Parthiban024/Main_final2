import React, { useState, useEffect } from 'react';
// import {  Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import "bootstrap/dist/css/bootstrap.min.css";
import { TextareaAutosize } from "@mui/material/TextareaAutosize";
import axios from 'axios';
import Navbar from "./navbarUser"
import Footer from "./footer"
import Swal from "sweetalert2";
function EmployeeForm() {


  const [id, idchange] = useState("");
  const [employeeName, setEmployeeName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [emailId, setEmailId] = useState('');
  const [systemNo, setSystemNo] = useState('');
  const [systemType, setSystemType] = useState('');
  const [unitNo, setUnitNo] = useState('');
  const [floorNo, setFloorNo] = useState('');
  const [teamName, setTeamName] = useState('');
  const [teamManager, setTeamManager] = useState('');
  const [priority, setPriority] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {

      employeeName: employeeName,
      employeeId: employeeId,
      emailId: emailId,
      systemNo: systemNo,
      systemType: systemType,
      unitNo: unitNo,
      floorNo: floorNo,
      teamName: teamName,
      teamManager: teamManager,
      priority: priority,
      issueDate: issueDate,
      description: description
    };

    axios.post('https://productionfinal.onrender.com/api/reviews', formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    Swal.fire(
      'Your ticket has been sent to the IT-team!',
      'You clicked the button!',
      'success'
    )
    window.location = "/"

  };


// loading screen

const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  // Simulate loading delay for 2 seconds
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
}, []);


if (isLoading) {
  return (
    <div className="loading-screen">
      <div className="loading-dots">
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
      </div>
    </div>
    // </div>

  );
}

  return (
<div className='homeMain'>
      {/* <Navbar /> */}
      <div className='sec_two  d-flex justify-content-center align-items-center color font_header2'>
      <h3><strong>Create a IT Team Ticket</strong></h3>
      </div>
    
        <div className='container  d-flex justify-content-center formHeight'>
          <div className="form-group">
            <label className="id_display">ID</label>
            <input value={id} disabled="disabled" className="form-control id_display"></input>
          </div>
          <form onSubmit={handleSubmit} className='formPage'>
            <div className='mt-5 d-flex flex-row gap-5'>
              {/* <TextField label="Employee Name" value={employeeName} onChange={(event) => setEmployeeName(event.target.value)} /> */}

              <div>
                <TextField
                  sx={{ width: 328 }}
                  label="Employee Name"
                  id="outlined-size-small"
                  // defaultValue="Small"
                  size="small"
                  className="email_login"
                  type="text"
                  value={employeeName}
                  onChange={(event) => setEmployeeName(event.target.value)}

                  required
                />
              </div>
              <div>
                <TextField
                  sx={{ width: 328 }}
                  label="Employee ID"
                  id="outlined-size-small"
                  // defaultValue="Small"
                  size="small"
                  className="email_login"
                  type="number"
                  value={employeeId}
                  onChange={(event) => setEmployeeId(event.target.value)}

                  required
                />
              </div>
            </div>
            <div className='mt-5 d-flex flex-row gap-5'>
              {/* <TextField label="Employee Name" value={employeeName} onChange={(event) => setEmployeeName(event.target.value)} /> */}

              <div>
                <TextField
                  sx={{ width: 328 }}
                  label="Email ID"
                  id="outlined-size-small"
                  // defaultValue="Small"
                  size="small"
                  className="email_login"
                  type="email"
                  value={emailId} onChange={(event) => setEmailId(event.target.value)}

                  required
                />
              </div>
              <div>
                <TextField
                  sx={{ width: 328 }}
                  label="System No"
                  id="outlined-size-small"
                  // defaultValue="Small"
                  size="small"
                  className="email_login"
                  type="text"
                  value={systemNo}
                  onChange={(event) => setSystemNo(event.target.value)}
                  required
                />
              </div>
            </div>
            <div className='d-flex flex-row gap-5 mt-5'>
            <div>
                <FormControl sx={{ minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small">Requirements *</InputLabel>
                  <Select
                    sx={{ width: 328 }}
                    label="Requirements"
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={systemType}
                    onChange={(event) => setSystemType(event.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Software issue">Head Phone</MenuItem>
                    <MenuItem value="Hardware issue">Mouse</MenuItem>
                    <MenuItem value="Hardware issue">Keyboard</MenuItem>
                    <MenuItem value="Hardware issue">Other accessories</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div>
                <FormControl sx={{ minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small">Select Category *</InputLabel>
                  <Select
                    sx={{ width: 328 }}
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={systemType}
                    onChange={(event) => setSystemType(event.target.value)}
                    label="Select Category *"

                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Software issue">Software Issue</MenuItem>
                    <MenuItem value="Hardware issue">Hardware Issue</MenuItem>
                    <MenuItem value="Hardware issue">Network Issue</MenuItem>
                    <MenuItem value="Others">Others</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className='d-flex flex-row gap-5 mt-5'>
              <div>
                <TextField
                  sx={{ width: 328 }}
                  label="Unit No"
                  id="outlined-size-small"
                  // defaultValue="Small"
                  size="small"
                  className="email_login"
                  type="number"
                  value={unitNo}
                  onChange={(event) => setUnitNo(event.target.value)}
                  required
                />
              </div>
              <div>
                <TextField
                  sx={{ width: 328 }}
                  label="Floor No"
                  id="outlined-size-small"
                  // defaultValue="Small"
                  size="small"
                  className="email_login"
                  type="number"
                  value={floorNo}
                  onChange={(event) => setFloorNo(event.target.value)}
                  required
                />
              </div>
            </div>
            <div className='d-flex flex-row gap-5 mt-5'>
              <div>
                <FormControl sx={{ minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small">Team Name *</InputLabel>
                  <Select
                    sx={{ width: 328 }}
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={priority}
                    onChange={(event) => setPriority(event.target.value)}
                    label="Team Name"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="CV">CV</MenuItem>
                    <MenuItem value="NLP">NLP</MenuItem>
                    <MenuItem value="Human Resource">Human Resource</MenuItem>
                    <MenuItem value="Others">Others</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div>
                <FormControl sx={{ minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small">Team Manager *</InputLabel>
                  <Select
                    sx={{ width: 328 }}
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={priority}
                    onChange={(event) => setPriority(event.target.value)}
                    label="Team Manager"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Poomathy">Poomathy</MenuItem>
                    <MenuItem value="Dhanaprabha Rajkumar">Dhanaprabha Rajkumar</MenuItem>
                    <MenuItem value="Balamurugan Veerappan">Balamurugan Veerappan</MenuItem>
                    <MenuItem value="Naveen Kumar">Naveen Kumar</MenuItem>
                    <MenuItem value="Kavin Kumar">Kavin Kumar</MenuItem>
                    <MenuItem value="Pradeepkrishnan">Pradeepkrishnan</MenuItem>
                    <MenuItem value="Premalatha Yesuraj">Premalatha Yesuraj</MenuItem>
                    <MenuItem value="Manikandan Periyathambi">Manikandan Periyathambi</MenuItem>
                    <MenuItem value="Manikandan Periyathambi">Manikandan Raja</MenuItem>
                    <MenuItem value="Lingeswaran Subramaniam">Lingeswaran Subramaniam</MenuItem>
                    <MenuItem value="Rajkiran">Rajkiran</MenuItem>
                    <MenuItem value="Rajeshkumar Venkatesan">Rajeshkumar Venkatesan</MenuItem>
                    <MenuItem value="sachinamreiss gnanasekaran">sachinamreiss gnanasekaran</MenuItem>
                    <MenuItem value="Others">Others</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className='d-flex flex-row gap-5 mt-5'>
              <div>
                <FormControl sx={{ minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small">Select Priority *</InputLabel>
                  <Select
                    sx={{ width: 328 }}
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={priority}
                    onChange={(event) => setPriority(event.target.value)}
                    label="Select Priority"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="High-Priority">High</MenuItem>
                    <MenuItem value="High-Priority">Medium</MenuItem>
                    <MenuItem value="Low-Priority">Low</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div>
                <TextField
                  sx={{ width: 328 }}
                  //  label="Team Manager"
                  id="outlined-size-small"
                  // defaultValue="Small"
                  size="small"
                  className="email_login"
                  type="date"
                  value={issueDate}
                  onChange={(event) => setIssueDate(event.target.value)}
                  required
                />
              </div>
            </div>
            <div className='mt-5'>
              <div class="form-floating">
                <textarea value={description} onChange={(event) => setDescription(event.target.value)} class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 }}></textarea>
                <label for="floatingTextarea2">Issue Details</label>
              </div>
            </div>
            <div className='d-flex justify-content-center mt-4'>
              <button type="submit" className='btn btn-primary btn_hm'><strong>Submit a Ticket</strong></button>
            </div>
          </form>
        </div>
        <Footer/>
      </div>
 
  );
}

export default EmployeeForm;