import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { CSVLink } from 'react-csv';
import { Route, Routes, Navigate, Link, useNavigate } from "react-router-dom";



function Table({ onReviewStatusChange }) {
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState([]);
  const [acceptedTickets, setAcceptedTickets] = useState(() => {
    const storedAcceptedTickets = localStorage.getItem('acceptedTickets');
    return storedAcceptedTickets ? JSON.parse(storedAcceptedTickets) : [];
  });
  const [resolvedTickets, setResolvedTickets] = useState(() => {
    const storedResolvedTickets = localStorage.getItem('resolvedTickets');
    return storedResolvedTickets ? JSON.parse(storedResolvedTickets) : [];
  });

  const [searchEmployeeName, setSearchEmployeeName] = useState('');
  const [selectedAdmin, setSelectedAdmin] = useState('');
  const [adminAssignments, setAdminAssignments] = useState({});
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const rowsPerPage = 10;


  useEffect(() => {
    axios.get('http://localhost:8001/api/reviews').then((res) => {
      const reviews = res.data;
      setReviews(reviews);
      const acceptedTickets = reviews.filter((r) => r.accepted).map((r) => r._id);
      const resolvedTickets = reviews.filter((r) => r.resolved).map((r) => r._id);
      setAcceptedTickets(acceptedTickets);
      setResolvedTickets(resolvedTickets);

      // retrieve the admin assignments from local storage
      const adminAssignmentsData = {};
      reviews.forEach((r) => {
        const admin = localStorage.getItem(`review-${r._id}-admin`);
        const accept = localStorage.getItem(`review-${r._id}-admin`);
        const resolve = localStorage.getItem(`review-${r._id}-admin`);
        if (admin) {
          adminAssignmentsData[r._id] = admin;
        }
      });
      setAdminAssignments(adminAssignmentsData);
    });
    const filtered = reviews.filter((r) =>
      (!selectedAdmin || adminAssignments[r._id] === selectedAdmin) &&
      (searchEmployeeName === '' ||
        r.employeeName.toLowerCase().includes(searchEmployeeName.toLowerCase()))
    );
    setFilteredReviews(filtered);

  }, [selectedAdmin, adminAssignments, searchEmployeeName, reviews, startDate, endDate]);



  const formatTime = (time) => {
    const date = new Date(time);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

// admin page
useEffect(() => {   
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8001/api/admin');
      setMessage(response.data.message);
    } catch (error) {
      console.log(error);
    }

  };

  const headers = [
    { label: 'Employee Name', key: 'employeeName' },
    { label: 'Employee ID', key: 'employeeId' },
    { label: 'Email', key: 'emailId' },
    { label: 'Priority', key: 'priority' },
    { label: 'Unit No', key: 'unitNo' },
    { label: 'Floor No', key: 'floorNo' },
    { label: 'System No', key: 'systemNo' },
    { label: 'Issue', key: 'systemType' },
    { label: 'Description', key: 'description' },
    { label: 'Date', key: 'issueDate' },
    { label: 'Admin Assignment', key: 'adminAssignment' },
    { label: 'Accepted', key: 'accepted' },
    { label: 'Accepted Time', key: 'acceptedTime' },
    { label: 'Resolved', key: 'resolved' },
    { label: 'Resolved Time', key: 'resolvedTime' },
  ];

  const csvData = reviews.filter((r) =>
    (!selectedAdmin || adminAssignments[r._id] === selectedAdmin) &&
    (searchEmployeeName === '' ||
      r.employeeName.toLowerCase().includes(searchEmployeeName.toLowerCase()))
  )
    .filter((r) => {
      const acceptedTime = localStorage.getItem(`review-${r._id}-accepted-time`);
      const resolvedTime = localStorage.getItem(`review-${r._id}-resolved-time`);

      if (startDate && endDate) {
        return (
          (!startDate || acceptedTime >= startDate) &&
          (!endDate || acceptedTime <= endDate) &&
          (!startDate || resolvedTime >= startDate) &&
          (!endDate || resolvedTime <= endDate)
        );
      } else {
        return true;
      }
    }).map((r) => ({
      employeeName: r.employeeName,
      employeeId: r.employeeId,
      emailId: r.emailId,
      priority: r.priority,
      unitNo: r.unitNo,
      floorNo: r.floorNo,
      systemNo: r.systemNo,
      systemType: r.systemType,
      description: r.description,
      issueDate: formatTime(r.issueDate),
      adminAssignment: adminAssignments[r._id] || localStorage.getItem(`review-${r._id}-admin`) || '',
      accepted: localStorage.getItem(`review-${r._id}-accepted`) === 'true' ? 'Yes' : 'No',
      acceptedTime: localStorage.getItem(`review-${r._id}-accepted-time`) && new Date(localStorage.getItem(`review-${r._id}-accepted-time`)).toLocaleString('en-IN'),
      resolved: localStorage.getItem(`review-${r._id}-resolved`) === 'true' ? 'Yes' : 'No',
      resolvedTime: localStorage.getItem(`review-${r._id}-resolved-time`) && new Date(localStorage.getItem(`review-${r._id}-resolved-time`)).toLocaleString('en-IN'),
    }));

  const navigate = useNavigate();

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this review!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:8001/api/reviews/${id}`).then((res) => {
          // show success message
          Swal.fire({
            title: 'Deleted!',
            text: 'The review has been deleted.',
            icon: 'success',
            confirmButtonText: 'OK',
          });
          // remove the deleted review from the local state
          const updatedReviews = reviews.filter((r) => r._id !== id);
          setReviews(updatedReviews);
          // call the callback function to update the status page
          onReviewStatusChange();
        });
      }
    });
  };

  const handleAccept = (review, selectedAdmin) => {
    // update the state of the accepted reviews
    setAcceptedTickets((prevState) => {
      const updatedAcceptedTickets = [...prevState, review._id];
      localStorage.setItem('acceptedTickets', JSON.stringify(updatedAcceptedTickets));
      return updatedAcceptedTickets;
    });

    // store the state of the accepted property in local storage
    localStorage.setItem(`review-${review._id}-accepted`, true);


    localStorage.setItem(`review-${review._id}-accepted-time`, new Date().toISOString());
    setAdminAssignments((prevState) => ({
      ...prevState,
      [review._id]: selectedAdmin,
    }));

    // store the selected admin assignment in local storage
    localStorage.setItem(`review-${review._id}-admin`, selectedAdmin);
    // store the state of the checkbox in local storage
    localStorage.setItem(`review-${review._id}-checkbox`, true);

    const updatedReview = { ...review, accepted: Date.now(), assignedAdmin: selectedAdmin };
    const updatedReviews = reviews.map((r) => (r._id === review._id ? updatedReview : r));
    setReviews(updatedReviews);

    axios.post('http://localhost:8001/api/accept', review).then((res) => {
      // send email to user using nodemailer
      const emailData = {
        to: review.emailId,
        subject: 'Ticket Accepted',
        text: 'Your review has been accepted by the IT team.',
      };
      axios.post('http://localhost:8001/api/send-email', emailData).then((res) => {
        // show success message
        Swal.fire({
          title: 'Success',
          text: 'The review has been accepted and an email has been sent to the user.',
          icon: 'success',
          confirmButtonText: 'OK',
        });
        // update the review in the local state
        const updatedReview = { ...review, accepted: Date.now() };
        const updatedReviews = reviews.map((r) => (r._id === review._id ? updatedReview : r));
        setReviews(updatedReviews);
        // update the state of the accepted reviews
        setAcceptedTickets((prevState) => [...prevState, review._id]);
        // store the state of the accepted property in local storage
        localStorage.setItem(`review-${review._id}-accepted`, true);
        // store the state of the checkbox in local storage
        localStorage.setItem(`review-${review._id}-checkbox`, true);
        // call the callback function to update the status page
        onReviewStatusChange();
        // send the updated review data to the backend API
        axios.post(`http://localhost:8001/api/reviews/${review._id}`, updatedReview);
      });
    });
  };

  const handleResolve = (review, selectedAdmin) => {
    // update the state of the resolved reviews
    setResolvedTickets((prevState) => {
      const updatedResolvedTickets = [...prevState, review._id];
      localStorage.setItem('resolvedTickets', JSON.stringify(updatedResolvedTickets));
      return updatedResolvedTickets;
    });

    // store the state of the accepted property in local storage
    localStorage.setItem(`review-${review._id}-resolved`, true);

    localStorage.setItem(`review-${review._id}-resolved-time`, new Date().toISOString());
    setAdminAssignments((prevState) => ({
      ...prevState,
      [review._id]: selectedAdmin,
    }));

    // store the selected admin assignment in local storage
    localStorage.setItem(`review-${review._id}-admin`, selectedAdmin);
    // store the state of the checkbox in local storage
    localStorage.setItem(`review-${review._id}-checkbox`, true);

    axios.post('http://localhost:8001/api/resolve', review).then((res) => {
      // show success message
      Swal.fire({
        title: 'Success',
        text: 'The review has been resolved.',
        icon: 'success',
        confirmButtonText: 'OK',
      });

      // update the review in the local state
      const updatedReview = { ...review, resolved: Date.now() };
      const updatedReviews = reviews.map((r) => (r._id === review._id ? updatedReview : r));
      setReviews(updatedReviews);
      // update the state of the resolved reviews
      setResolvedTickets((prevState) => [...prevState, review._id]);
      // store the state of the resolved property in local storage
      localStorage.setItem(`review-${review._id}-resolved`, true);
      // store the state of the checkbox in local storage
      localStorage.setItem(`review-${review._id}-checkbox`, true);
      // call the callback function to update the status page
      onReviewStatusChange();
      // send the updated review data to the backend API
      axios.post(`http://localhost:8001/api/reviews/${review._id}`, updatedReview);
    });
  };



  // pagination script
  const totalRows = reviews
    .filter((r) =>
      (!selectedAdmin || adminAssignments[r._id] === selectedAdmin) &&
      (searchEmployeeName === '' ||
        r.employeeName.toLowerCase().includes(searchEmployeeName.toLowerCase()))
    )
    .filter((r) => {
      const acceptedTime = localStorage.getItem(`review-${r._id}-accepted-time`);
      const resolvedTime = localStorage.getItem(`review-${r._id}-resolved-time`);

      if (startDate && endDate) {
        return (
          (!startDate || acceptedTime >= startDate) &&
          (!endDate || acceptedTime <= endDate) &&
          (!startDate || resolvedTime >= startDate) &&
          (!endDate || resolvedTime <= endDate)
        );
      } else {
        return true;
      }
    }).length;


  const totalPages = Math.ceil(totalRows / rowsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className='homeMain'>
      <div className='sec_two d-flex justify-content-center align-items-center'>
        <h1>Admin Panel</h1>
      </div>
      <div>
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
      <div className='row container'>

        <div className='col-3'>
          <input
            type="text"
            className="form-control "
            placeholder="Search by Employee Name"
            value={searchEmployeeName}
            onChange={(e) => setSearchEmployeeName(e.target.value)}
          />
        </div>
        <div className='col-3'>
          <select
            className="form-select"
            value={selectedAdmin}
            onChange={(e) => setSelectedAdmin(e.target.value)}
          >
            <option value="">Filter by Admin</option>
            <option value="Sakthi">Sakthi</option>
            <option value="Rex Andreson">Rex Andreson</option>
            <option value="Sathish">Sathish</option>
          </select>
        </div>
        <div className='col-3'>
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </div>
      </div>
      <div className='d-flex justify-content-end'>
        <CSVLink data={csvData} headers={headers} filename={'reviews.csv'} className="btn btn-primary mb-3">
          Export CSV
        </CSVLink>
      </div>
      <div className="card">
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>

                <th>Serial No</th>
                <th>Employee Name</th>
                <th>Employee ID</th>
                <th>Email</th>
                <th>Priority</th>
                <th>Unit No</th>
                <th>Floor No</th>
                <th>System No</th>
                <th>Issue</th>
                <th>Description</th>
                <th>Date</th>
                <th>Ticket taken by</th>
                {/* <th>View</th> */}
                <th>Actions</th>
                <th>Accept</th>
                <th>Resolve</th>
                <th>Accepted Date & Time</th>
                <th>Resolved Date & Time</th>
              </tr>
            </thead>
            <tbody>
              {reviews.filter((r) =>
                (!selectedAdmin || adminAssignments[r._id] === selectedAdmin) &&
                (searchEmployeeName === '' ||
                  r.employeeName.toLowerCase().includes(searchEmployeeName.toLowerCase()))
              )
                .filter((r) => {
                  const acceptedTime = localStorage.getItem(`review-${r._id}-accepted-time`);
                  const resolvedTime = localStorage.getItem(`review-${r._id}-resolved-time`);

                  if (startDate && endDate) {
                    return (
                      (!startDate || acceptedTime >= startDate) &&
                      (!endDate || acceptedTime <= endDate) &&
                      (!startDate || resolvedTime >= startDate) &&
                      (!endDate || resolvedTime <= endDate)
                    );
                  } else {
                    return true;
                  }
                })
                .slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage).map((r, index) => (
                  <tr key={r._id}>
                    <td>{index + 1}</td>
                    <td>{r.employeeName}</td>
                    <td>{r.employeeId}</td>
                    <td>{r.emailId}</td>
                    <td>{r.priority}</td>
                    <td>{r.unitNo}</td>
                    <td>{r.floorNo}</td>
                    <td>{r.systemNo}</td>
                    <td>{r.systemType}</td>
                    <td>{r.description}</td>
                    <td>{formatTime(r.issueDate)}</td>
                    <td>
                      <select
                        className="form-select"
                        value={adminAssignments[r._id] || localStorage.getItem(`review-${r._id}-admin`) || ''}
                        onChange={(e) => {
                          const selectedAdmin = e.target.value;
                          setAdminAssignments((prevState) => ({
                            ...prevState,
                            [r._id]: selectedAdmin,
                          }));
                          localStorage.setItem(`review-${r._id}-admin`, selectedAdmin);
                        }}
                      >
                        <option value="">Select Admin</option>
                        <option value="Sakthi">Sakthi</option>
                        <option value="Rex Andreson">Rex Andreson</option>
                        <option value="Sathish">Sathish</option>
                      </select>
                    </td>
                    <td>
                      <button className="btn btn-primary btn-sm" onClick={() => handleDelete(r._id)}>
                        <i className="fa fa-trash"></i>
                      </button>
                    </td>

                    <td>
                      <input
                        type="checkbox"
                        className="btn btn-primary btn-sm checkbox_main ms-3"
                        onClick={() => handleAccept(r, adminAssignments[r._id])}
                        defaultChecked={localStorage.getItem(`review-${r._id}-accepted`)}
                        disabled={!adminAssignments[r._id] || localStorage.getItem(`review-${r._id}-accepted`)}
                      />
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        className="btn btn-success btn-sm ms-3"
                        onClick={() => handleResolve(r, adminAssignments[r._id])}
                        defaultChecked={localStorage.getItem(`review-${r._id}-resolved`)}
                        disabled={!adminAssignments[r._id] || localStorage.getItem(`review-${r._id}-resolved`)}
                      />
                    </td>
                    <td>{localStorage.getItem(`review-${r._id}-accepted-time`) && new Date(localStorage.getItem(`review-${r._id}-accepted-time`)).toLocaleString('en-IN')}</td>
                    <td>{localStorage.getItem(`review-${r._id}-resolved-time`) && new Date(localStorage.getItem(`review-${r._id}-resolved-time`)).toLocaleString('en-IN')}</td>
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