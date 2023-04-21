import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Navbar from "./navbarPage"
function ReviewDetails() {


  const location = useLocation();
  const { review } = location.state;

  return (
    <div>
      <Navbar/>
      <div className='viewTable'>
  <table>
    <tbody>
      <tr>
        <td><strong>Employee Name:</strong></td>
        <td>{review.employeeNameThree}</td>
      </tr>
      <tr>
        <td><strong>Employee ID:</strong></td>
        <td>{review.employeeIdThree}</td>
      </tr>
      <tr>
        <td><strong>Email:</strong></td>
        <td>{review.emailIdThree}</td>
      </tr>
      <tr>
        <td><strong>Priority:</strong></td>
        <td>{review.priorityThree}</td>
      </tr>
      <tr>
        <td><strong>Unit No:</strong></td>
        <td>{review.unitNoThree}</td>
      </tr>
      <tr>
        <td><strong>Floor No</strong></td>
        <td>{review.floorNoThree}</td>
      </tr>
      <tr>
        <td><strong>System No:</strong></td>
        <td>{review.systemNoThree}</td>
      </tr>
      <tr>
        <td><strong>Issue:</strong></td>
        <td>{review.systemTypeThree}</td>
      </tr>
      <tr>
        <td><strong>Description:</strong></td>
        <td>{review.descriptionThree}</td>
      </tr>
      <tr>
        <td><strong>Date:</strong></td>
        <td>{review.issueDateThree}</td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
  );
}

export default ReviewDetails;