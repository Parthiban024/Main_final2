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


function HrForm() {
  const [id, idchange] = useState("");
  const [employeeNameThree, setEmployeeNameThree] = useState('');
  const [employeeIdThree, setEmployeeIdThree] = useState('');
  const [systemNoThree, setSystemNoThree] = useState('');
  const [floorNoThree, setFloorNoThree] = useState('');
  const [teamNameThree, setTeamNameThree] = useState('');
  const [teamManagerThree, setTeamManagerThree] = useState('');
  const [priorityThree, setPriorityThree] = useState('');
  const [issueDateThree, setIssueDateThree] = useState('');
  const [descriptionThree, setDescriptionThree] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formDataThree = {

      employeeNameThree: employeeNameThree,
      employeeIdThree: employeeIdThree,
      systemNoThree: systemNoThree,
      floorNoThree: floorNoThree,
      teamNameThree: teamNameThree,
      teamManagerThree: teamManagerThree,
      priorityThree: priorityThree,
      issueDateThree: issueDateThree,
      descriptionThree: descriptionThree,
    };

axios.post('http://localhost:8001/api/hrreview', formDataThree)
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
      <div className='sec_two d-flex justify-content-center align-items-center color font_header2'>
      <h2><strong>Create a HR Team Ticket</strong></h2>
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
                  value={systemNoThree}
                  onChange={(event) => setSystemNoThree(event.target.value)}
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
                  type="text"
                  value={employeeNameThree}
                  onChange={(event) => setEmployeeNameThree(event.target.value)}
                  required
                />
              </div>
            </div>
            <div className='d-flex flex-row gap-5 mt-5'>
              <div>
                <TextField
                  sx={{ width: 328 }}
                  label="Email ID"
                  id="outlined-size-small"
                  // defaultValue="Small"
                  size="small"
                  className="email_login"
                  type="email"
                  value={employeeIdThree}
                  onChange={(event) => setEmployeeIdThree(event.target.value)}
                  required
                />
              </div>
              <div>
                <FormControl sx={{ minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small">Select Role *</InputLabel>
                  <Select
                    sx={{ width: 328 }}
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={priorityThree}
                    onChange={(event) => setPriorityThree(event.target.value)}
                    label="Select Role"

                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="PF & ESI">Analyst</MenuItem>
                    <MenuItem value="Salary Issue">Senior Analyst</MenuItem>
                    <MenuItem value="Facilities">Quality Analyst</MenuItem>
                    <MenuItem value="PF & ESI">Team Lead</MenuItem>
                    <MenuItem value="Salary Issue">Quality Manager</MenuItem>
                    <MenuItem value="Salary Issue">Project Manager</MenuItem>
                    <MenuItem value="PF & ESI">Senior Operations Manager</MenuItem>
                    <MenuItem value="PF & ESI">Delivery Head</MenuItem>
                    <MenuItem value="PF & ESI">IT Admin</MenuItem>
                    <MenuItem value="Others">Others</MenuItem>
                  </Select>
                </FormControl>
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
                    value={teamNameThree}
                    onChange={(event) => setTeamNameThree(event.target.value)}
                    label="Select Category"

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
                    value={teamManagerThree}
                    onChange={(event) => setTeamManagerThree(event.target.value)}
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
                  <InputLabel id="demo-select-small">Select Category *</InputLabel>
                  <Select
                    sx={{ width: 328 }}
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={floorNoThree}
            onChange={(event) => setFloorNoThree(event.target.value)}
                    label="Select Category"

                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="PF & ESI">PF & ESI</MenuItem>
                    <MenuItem value="Salary Issue">Pay slip</MenuItem>
                    <MenuItem value="Facilities">ID-Card</MenuItem>
                    <MenuItem value="Facilities">Salary Issue</MenuItem>
                    <MenuItem value="Salary Issue">Offer Letter</MenuItem>
                    <MenuItem value="Salary Issue">Experience Letter</MenuItem>
                    <MenuItem value="Salary Issue">GreytHR Software Issue</MenuItem>
                    <MenuItem value="Others">Others</MenuItem>
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
                  value={issueDateThree}
                  onChange={(event) => setIssueDateThree(event.target.value)}
                  required
                />
              </div>
            </div>
            <div className='mt-5'>
              <div class="form-floating">
                <textarea value={descriptionThree} onChange={(event) => setDescriptionThree(event.target.value)} class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 }}></textarea>
                <label for="floatingTextarea2">Comments</label>
              </div>
            </div>
            <div className='d-flex justify-content-center mt-5'>
              <button type="submit" className='btn btn-primary btn_hm'><strong>Submit a Ticket</strong></button>
            </div>
          </form>
        </div>
        <Footer/>
      </div>
     

  );
}

export default HrForm;