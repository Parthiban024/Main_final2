import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "./navbarPage"
import Swal from "sweetalert2";
import { Route, Routes, Navigate, Link, useNavigate } from "react-router-dom";
import { CSVLink } from 'react-csv';
function Table(data) {
  const [review, setReviews] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('');


  const filteredData = selectedMonth ? data.filter(item => item.month === selectedMonth) : data;

  const headers = [
    { label: 'Employee Namw', key: 'employeeNameThree' },
    { label: 'Employee ID', key: 'employeeIdThree' },
    { label: 'Email', key: 'emailIdThree' },
    { label: 'Priority', key: 'priorityThree' },
    { label: 'Unit No', key: 'unitNoThree' },
    { label: 'Floor No', key: 'floorNoThree' },
    { label: 'System No', key: 'systemNoThree' },
    { label: 'Issue', key: 'systemTypeThree' },
    { label: 'Description', key: 'descriptionThree' },

  ];

  const csvData = review.map(r => ({
    employeeNameThree: r.employeeNameThree,
    employeeIdThree: r.employeeIdThree,
    emailIdThree: r.emailIdThree,
    priorityThree: r.priorityThree,
    unitNoThree: r.unitNoThree,
     floorNoThree: r.floorNoThree,
    systemNoThree: r.systemNoThree,
    systemTypeThree: r.systemTypeThree,
    descriptionThree: r.descriptionThree,
  }));

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8001/api/hrreview').then((response) => {
      setReviews(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8001/api/hrreview/${id}`).then(() => {
      // remove the deleted review from the local state
      const updatedReviews = review.filter((r) => r._id !== id);
      setReviews(updatedReviews);
      // show a success message
      Swal.fire({
        title: 'Success',
        text: 'The review has been deleted.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    }).catch(() => {
      // show an error message
      Swal.fire({
        title: 'Error',
        text: 'There was an error deleting the review.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    });
  };
  const handleAccept = (ticket) => {
    axios.post('http://localhost:8001/api/accepthr', ticket).then((res) => {
      // send email to user using nodemailer
      const emailData = {
        to: ticket.emailIdThree,
        subject: 'Ticket Accepted',
        text: 'Your ticket has been accepted by the IT team.'
      };
      axios.post('http://localhost:8001/api/send-emailhr', emailData).then((res) => {
        // show success message
        Swal.fire({
          title: 'Success',
          text: 'The ticket has been accepted and an email has been sent to the user.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        // reload the page to update the table
      }).catch(() => {
        // show error message
        Swal.fire({
          title: 'Error',
          text: 'There was an error sending the email.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      });
    }).catch(() => {
      // show error message
      Swal.fire({
        title: 'Error',
        text: 'There was an error accepting the ticket.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    });
  };

  const handleResolve = (ticket) => {
    axios.post('http://localhost:8001/api/resolvehr', ticket).then((res) => {
      // send email to user using nodemailer
      const emailData = {
        to: ticket.emailIdThree,
        subject: 'Ticket Resolved',
        text: 'Your ticket has been resolved by the IT team.'
      };
      axios.post('http://localhost:8001/api/send-emailhr', emailData).then((res) => {
        // show success message
        Swal.fire({
          title: 'Success',
          text: 'The ticket has been resolved and an email has been sent to the user.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        // reload the page to update the table
      }).catch(() => {
        // show error message
        Swal.fire({
          title: 'Error',
          text: 'There was an error sending the email.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      });
    }).catch(() => {
      // show error message
      Swal.fire({
        title: 'Error',
        text: 'There was an error resolving the ticket.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    });
  };
  const handleViewDetails = (id) => {
    const selectedReview = review.find((r) => r._id === id);
    navigate(`/reviewthree/${id}`, { state: { review: selectedReview } });
  };
  return (
    <div>
      {/* <Navbar /> */}
      <div className='sec_two d-flex justify-content-center align-items-center'>
        <h1>HR Panel</h1>
      </div>
      <CSVLink className='exportbtn btn btn-success btn-sm  table_main' data={csvData} headers={headers} filename={`data_${selectedMonth || 'all_months'}.csv`}>
        Export to CSV
      </CSVLink>
      <div className='hm_sec_3'>
        <div className='container  d-flex justify-content-center '>
          <table id="table-to-xls" className="table table-hover tablePage">
            <thead className="thead_bg">
              <tr>
              <th >Employee Name</th>
                <th >Employee ID</th>
                <th>Email</th>
                <th>Priority</th>
                <th>Unit No</th>
                <th>Floor No</th>
                <th>System No</th>
                <th>Issue</th>
                <th>Description</th>
                <th>Date</th>
                <th>View</th>
                <th>Remove</th>
                <th>Accept</th>
                <th>Resolve</th>
              </tr>
            </thead>
            <tbody>
              {review.map((r) => (
                <tr key={r._id}>
                  <td>{r.employeeNameThree}</td>
                  <td>{r.employeeIdThree}</td>
                  <td>{r.emailIdThree}</td>
                  <td>{r.priorityThree}</td>
                  <td>{r.unitNoThree}</td>
                  <td>{r.floorNoThree}</td>
                  <td>{r.systemNoThree}</td>
                  <td>{r.systemTypeThree}</td>
                  <td>{r.descriptionThree}</td>
                  <td>{r.issueDateThree}</td>
                  <td>
                    <button
                      className="btn btn-info btn-sm ms-1"
                      onClick={() => handleViewDetails(r._id)}
                    >
                      <i className="fa fa-eye"></i>
                    </button>
                  </td>
                  <td>
                    {review.map((review) => (
                      <tr key={review._id}>
                        <Link to={{ pathname: `/reviewthree/${review._id}`, state: { review } }}>

                        </Link>
                      </tr>
                    ))} 
                    <td>
                      <button
                        className="btn btn-danger btn-sm ms-3"
                        onClick={() => handleDelete(r._id)}
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    </td>
                  </td>
                  <td>
                    <input type="checkbox" className="btn btn-primary btn-sm checkbox_main ms-3" onClick={() => handleAccept(r)} />
                    {/* <i className="fa fa-check"></i>
                    </button> */}
                  </td>
                  <td>
                    <input type='checkbox' className="btn btn-success btn-sm ms-3" onClick={() => handleResolve(r)} />
                    {/* <i className="fa fa-check-square"></i>
                    </button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}



export default Table;
