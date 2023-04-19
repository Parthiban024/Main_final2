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
import Swal from "sweetalert2";
function HrForm() {
  const [id, idchange] = useState("");
  const [employeeNameThree, setEmployeeNameThree] = useState('');
  const [employeeIdThree, setEmployeeIdThree] = useState('');
  const [emailIdThree, setEmailIdThre] = useState('');
  const [systemNoThree, setSystemNoThree] = useState('');
  const [systemTypeThree, setSystemTypeThree] = useState('');
  const [unitNoThree, setUnitNoThree] = useState('');
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
      emailIdThree: emailIdThree,
      systemNoThree: systemNoThree,
      systemTypeThree: systemTypeThree,
      unitNoThree: unitNoThree,
      floorNoThree: floorNoThree,
      teamNameThree: teamNameThree,
      teamManagerThree: teamManagerThree,
      priorityThree: priorityThree,
      issueDateThree: issueDateThree,
      descriptionThree: descriptionThree
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

  return (
    <div>
      <Navbar />
      <div className='sec_two d-flex justify-content-center align-items-center'>
        <h1>Create a HR Team Ticket</h1>
      </div>
      <div className='hm_sec_3'>
        <div className='container  d-flex justify-content-center '>
          <div className="form-group">
            <label className="id_display">ID</label>
            <input value={id} disabled="disabled" className="form-control id_display"></input>
          </div>
          <form onSubmit={handleSubmit} className='formPage'>
            <div className='mt-5 d-flex flex-row gap-5'>
              {/* <TextField label="Employee Name" value={employeeName} onChange={(event) => setEmployeeName(event.target.value)} /> */}

              <div>
                <TextField
                  sx={{ width: 200 }}
                  label="Employee Name"
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
              <div>
                <TextField
                  sx={{ width: 200 }}
                  label="Employee ID"
                  id="outlined-size-small"
                  // defaultValue="Small"
                  size="small"
                  className="email_login"
                  type="number"
                  value={employeeIdThree}
                  onChange={(event) => setEmployeeIdThree(event.target.value)}

                  required
                />
              </div>
              <div>
                <TextField
                  sx={{ width: 200 }}
                  label="Email ID"
                  id="outlined-size-small"
                  // defaultValue="Small"
                  size="small"
                  className="email_login"
                  type="email"
                  value={emailIdThree} onChange={(event) => setEmailIdThre(event.target.value)}

                  required
                />
              </div>
            </div>
            <div className='d-flex flex-row gap-5 mt-5'>
              <div>
                <TextField
                  sx={{ width: 320 }}
                  label="System No"
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
                <FormControl sx={{ minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small">Select Issue</InputLabel>
                  <Select
                    sx={{ width: 328 }}
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={systemTypeThree}
                    onChange={(event) => setSystemTypeThree(event.target.value)}
                    label="Select One"

                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="PF & ESI">PF & ESI</MenuItem>
                    <MenuItem value="Salary Issue">Salary Issue</MenuItem>
                    <MenuItem value="Facilities">Facilities</MenuItem>
                    <MenuItem value="Salary Issue">Offer Letter</MenuItem>
                    <MenuItem value="Salary Issue">ID-Card</MenuItem>
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
                  value={unitNoThree}
                  onChange={(event) => setUnitNoThree(event.target.value)}
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
                  value={floorNoThree}
                  onChange={(event) => setFloorNoThree(event.target.value)}
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
                  value={teamNameThree}
                  onChange={(event) => setTeamNameThree(event.target.value)}
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
                  value={teamManagerThree}
                  onChange={(event) => setTeamManagerThree(event.target.value)}
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
                    value={priorityThree}
                    onChange={(event) => setPriorityThree(event.target.value)}
                    label="Select Priority"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="High-Priority">High Priority</MenuItem>
                    <MenuItem value="Low-Priority">Low Priority</MenuItem>
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
            <div className='d-flex justify-content-center mt-4'>
              <button type="submit" className='btn btn-primary btn_hm'>Submit a Ticket</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HrForm;