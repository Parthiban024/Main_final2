import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
function ReviewDetails() {


  const location = useLocation();
  const { review } = location.state;

  return (
    <div>
      <h2>Review Details</h2>
      <p><strong>Employee Name:</strong> {review.employeeNameTwo}</p>
      <p><strong>Employee ID:</strong> {review.employeeIdTwo}</p>
      <p><strong>Email:</strong> {review.emailIdTwo}</p>
      <p><strong>Priority:</strong> {review.priorityTwo}</p>
      <p><strong>System No:</strong> {review.systemNoTwo}</p>
      <p><strong>Issue:</strong> {review.systemTypeTwo}</p>
      <p><strong>Description:</strong> {review.descriptionTwo}</p>
      <p><strong>Date:</strong> {review.issueDateTwo}</p>
    </div>
  );
}

export default ReviewDetails;