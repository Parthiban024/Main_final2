import React, { useState } from 'react';
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


function TimechampForm() {
  const [id, idchange] = useState("");
  const [employeeNameTwo, setEmployeeNameTwo] = useState('');
  const [employeeIdTwo, setEmployeeIdTwo] = useState('');
  const [emailIdTwo, setEmailIdTwo] = useState('');
  const [systemNoTwo, setSystemNoTwo] = useState('');
  const [systemTypeTwo, setSystemTypeTwo] = useState('');
  const [unitNoTwo, setUnitNoTwo] = useState('');
  const [floorNoTwo, setFloorNoTwo] = useState('');
  const [teamNameTwo, setTeamNameTwo] = useState('');
  const [teamManagerTwo, setTeamManagerTwo] = useState('');
  const [priorityTwo, setPriorityTwo] = useState('');
  const [issueDateTwo, setIssueDateTwo] = useState('');
  const [descriptionTwo, setDescriptionTwo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formDataTwo = {

      employeeNameTwo: employeeNameTwo,
      employeeIdTwo: employeeIdTwo,
      emailIdTwo: emailIdTwo,
      systemNoTwo: systemNoTwo,
      systemTypeTwo: systemTypeTwo,
      unitNoTwo: unitNoTwo,
      floorNoTwo: floorNoTwo,
      teamNameTwo: teamNameTwo,
      teamManagerTwo: teamManagerTwo,
      priorityTwo: priorityTwo,
      issueDateTwo: issueDateTwo,
      descriptionTwo: descriptionTwo
    };



    axios.post('https://productionfinal.onrender.com/api/timechamp', formDataTwo)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    Swal.fire(
      'Your ticket has been sent to the IT-team!',
      'You clicked the button!',
      'success'
    )

    window.location = "/"
  };

  return (
    <div>
      <Navbar />
      <div className='sec_two d-flex justify-content-center align-items-center color font_header2'>
        <h2><strong>Create a Facility Team Ticket</strong></h2>
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
                  sx={{ width: 320 }}
                  label="Employee Name"
                  id="outlined-size-small"
                  // defaultValue="Small"
                  size="small"
                  className="email_login"
                  type="text"
                  value={systemNoTwo}
                  onChange={(event) => setSystemNoTwo(event.target.value)}
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
                  value={systemNoTwo}
                  onChange={(event) => setSystemNoTwo(event.target.value)}
                  required
                />
              </div>
              
             
             
            </div>
            <div className='d-flex flex-row gap-5 mt-5'>
              <div>
                <TextField
                  sx={{ width: 320 }}
                  label="Email ID"
                  id="outlined-size-small"
                  // defaultValue="Small"
                  size="small"
                  className="email_login"
                  type="text"
                  value={systemNoTwo}
                  onChange={(event) => setSystemNoTwo(event.target.value)}
                  required
                />
              </div>
              <div>
                <FormControl sx={{ minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small">Select Issue</InputLabel>
                  <Select
                    sx={{ width: 328 }}
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={systemTypeTwo}
                    onChange={(event) => setSystemTypeTwo(event.target.value)}
                    label="Select One"

                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="TimeChamp Login Issue">Air Conditioner</MenuItem>
                    <MenuItem value="Loading Issue">Drinking water</MenuItem>
                    <MenuItem value="Loading Issue">Wash Room</MenuItem>
                    <MenuItem value="TimeChamp Login Issue">Tube light</MenuItem>
                    <MenuItem value="Loading Issue">Fan</MenuItem>
                    <MenuItem value="Others">Others</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className='d-flex flex-row gap-5 mt-5'>
              <div>
                <TextField
                  sx={{ width: 320 }}
                  label="Unit No"
                  id="outlined-size-small"
                  // defaultValue="Small"
                  size="small"
                  className="email_login"
                  type="number"
                  value={unitNoTwo}
                  onChange={(event) => setUnitNoTwo(event.target.value)}
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
                  value={floorNoTwo}
                  onChange={(event) => setFloorNoTwo(event.target.value)}
                  required
                />
              </div>
            </div>
            <div className='d-flex flex-row gap-5 mt-5'>
              <div>
                <TextField
                  sx={{ width: 320 }}
                  label="Team Name"
                  id="outlined-size-small"
                  // defaultValue="Small"
                  size="small"
                  className="email_login"
                  type="text"
                  value={teamNameTwo}
                  onChange={(event) => setTeamNameTwo(event.target.value)}
                  required
                />
              </div>
              <div>
                <TextField
                  sx={{ width: 328 }}
                  label="Team Manager"
                  id="outlined-size-small"
                  // defaultValue="Small"
                  size="small"
                  className="email_login"
                  type="text"
                  value={teamManagerTwo}
                  onChange={(event) => setTeamManagerTwo(event.target.value)}
                  required
                />
              </div>
            </div>
            <div className='d-flex flex-row gap-5 mt-5'>
              <div>
                <FormControl sx={{ minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small">Select Priority</InputLabel>
                  <Select
                    sx={{ width: 320 }}
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={priorityTwo}
                    onChange={(event) => setPriorityTwo(event.target.value)}
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
                  value={issueDateTwo}
                  onChange={(event) => setIssueDateTwo(event.target.value)}
                  required
                />
              </div>
            </div>
            <div className='mt-5'>
              <div class="form-floating">
                <textarea value={descriptionTwo} onChange={(event) => setDescriptionTwo(event.target.value)} class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 }}></textarea>
                <label for="floatingTextarea2">Comments</label>
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

export default TimechampForm;