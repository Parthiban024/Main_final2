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
          <div className='d-flex flex-row gap-5 mt-5'>
          <div>
                <FormControl sx={{ minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small">Team Name *</InputLabel>
                  <Select
                    sx={{ width: 328 }}
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={systemTypeTwo}
                    onChange={(event) => setSystemTypeTwo(event.target.value)}
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
                    value={systemTypeTwo}
                    onChange={(event) => setSystemTypeTwo(event.target.value)}
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
                    value={systemTypeTwo}
                    onChange={(event) => setSystemTypeTwo(event.target.value)}
                    label="Select Category"

                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="TimeChamp Login Issue">Dinning</MenuItem>
                    <MenuItem value="Loading Issue">Furniture</MenuItem>
                    <MenuItem value="Loading Issue">Wash Room</MenuItem>
                    <MenuItem value="Loading Issue">Drinking water</MenuItem>
                    <MenuItem value="Air Conditioner">Air Conditioner</MenuItem>  
                    <MenuItem value="Loading Issue">Keyboard Table</MenuItem>            
                    <MenuItem value="Loading Issue">Electrical accessories</MenuItem>
                    <MenuItem value="Others">Others</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div>
                <TextField
                  sx={{ width: 328 }}
                  label="New Requirements"
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
                <FormControl sx={{ minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small">Select Priority *</InputLabel>
                  <Select
                    sx={{ width: 328 }}
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