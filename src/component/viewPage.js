import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
function ReviewDetails() {


  const location = useLocation();
  const { review } = location.state;

  return (
    <div>
      <h2>Review Details</h2>
      <p><strong>Employee Name:</strong> {review.employeeName}</p>
      <p><strong>Employee ID:</strong> {review.employeeId}</p>
      <p><strong>Email:</strong> {review.emailId}</p>
      <p><strong>Priority:</strong> {review.priority}</p>
      <p><strong>System No:</strong> {review.systemNo}</p>
      <p><strong>Issue:</strong> {review.systemType}</p>
      <p><strong>Description:</strong> {review.description}</p>
      <p><strong>Date:</strong> {review.issueDate}</p>
    </div>
  );
}

export default ReviewDetails;