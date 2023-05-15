import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Navbar from "./navbarPage"
function ReviewDetails() {


  const location = useLocation();
  const { review } = location.state;

  return (
    <div>
      {/* <Navbar/> */}
      <div className='viewTable'>
  <table>
    <tbody>
      <tr>
        <td><strong>Employee Name:</strong></td>
        <td>{review.employeeNameTwo}</td>
      </tr>
      <tr>
        <td><strong>Employee ID:</strong></td>
        <td>{review.employeeIdTwo}</td>
      </tr>
      <tr>
        <td><strong>Email:</strong></td>
        <td>{review.emailIdTwo}</td>
      </tr>
      <tr>
        <td><strong>Priority:</strong></td>
        <td>{review.priorityTwo}</td>
      </tr>
      <tr>
        <td><strong>Unit No</strong></td>
        <td>{review.unitNoTwo}</td>
      </tr>
      <tr>
        <td><strong>Floor No</strong></td>
        <td>{review.floorNoTwo}</td>
      </tr>
      <tr>
        <td><strong>System No:</strong></td>
        <td>{review.systemNoTwo}</td>
      </tr>
      <tr>
        <td><strong>Issue:</strong></td>
        <td>{review.systemTypeTwo}</td>
      </tr>
      <tr>
        <td><strong>Description:</strong></td>
        <td>{review.descriptionTwo}</td>
      </tr>
      <tr>
        <td><strong>Date:</strong></td>
        <td>{review.issueDateTwo}</td>
      </tr>
    </tbody>
  </table>
</div>

    </div>
  );
}

export default ReviewDetails;