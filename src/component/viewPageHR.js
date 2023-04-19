import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
function ReviewDetails() {


  const location = useLocation();
  const { review } = location.state;

  return (
    <div>
      <h2>Review Details</h2>
      <p><strong>Employee Name:</strong> {review.employeeNameThree}</p>
      <p><strong>Employee ID:</strong> {review.employeeIdThree}</p>
      <p><strong>Email:</strong> {review.emailIdThree}</p>
      <p><strong>Priority:</strong> {review.priorityThree}</p>
      <p><strong>System No:</strong> {review.systemNoThree}</p>
      <p><strong>Issue:</strong> {review.systemTypeThree}</p>
      <p><strong>Description:</strong> {review.descriptionThree}</p>
      <p><strong>Date:</strong> {review.issueDateThree}</p>
    </div>
  );
}

export default ReviewDetails;