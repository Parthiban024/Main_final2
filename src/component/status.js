import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from "./dashboardPage"
function StatusPage() {
  const [acceptedReviews, setAcceptedReviews] = useState([]);
  const [resolvedReviews, setResolvedReviews] = useState([]);
  const [pendingReviews, setPendingReviews] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8001/api/reviews').then((res) => {
      const reviews = res.data;
      const acceptedReviews = reviews.filter((r) => r.accepted);
      const resolvedReviews = reviews.filter((r) => r.resolved);
      const pendingReviews = reviews.filter((r) => !r.accepted && !r.resolved);
      setAcceptedReviews(acceptedReviews);
      setResolvedReviews(resolvedReviews);
      setPendingReviews(pendingReviews);
    });
  }, []);

  const formatTime = (time) => {
    const date = new Date(time);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  };

  const handleReviewStatusChange = () => {
    axios.get('http://localhost:8001/api/reviews').then((res) => {
      const reviews = res.data;
      const acceptedReviews = reviews.filter((r) => r.accepted);
      const resolvedReviews = reviews.filter((r) => r.resolved);
      const pendingReviews = reviews.filter((r) => !r.accepted && !r.resolved);
      setAcceptedReviews(acceptedReviews);
      setResolvedReviews(resolvedReviews);
      setPendingReviews(pendingReviews);
    });
  };

  return (
    <div className='homeMain'>
      <h1>Status Page</h1>
      <h2>Accepted Reviews</h2>
      <table>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Issue Date</th>
            <th>Accepted Date</th>
          </tr>
        </thead>
        <tbody>
          {acceptedReviews.map((r) => (
            <tr key={r._id}>
              <td>{r.employeeName}</td>
              <td>{formatTime(r.issueDate)}</td>
              <td>{formatTime(r.accepted)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Resolved Reviews</h2>
      <table>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Issue Date</th>
            <th>Resolved Date</th>
          </tr>
        </thead>
        <tbody>
          {resolvedReviews.map((r) => (
            <tr key={r._id}>
              <td>{r.employeeName}</td>
              <td>{formatTime(r.issueDate)}</td>
              <td>{formatTime(r.resolved)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Pending Reviews</h2>
      <table>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Issue Date</th>
          </tr>
        </thead>
        <tbody>
          {pendingReviews.map((r) => (
            <tr key={r._id}>
              <td>{r.employeeName}</td>
              <td>{formatTime(r.issueDate)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Table onReviewStatusChange={handleReviewStatusChange} />
    </div>
  );
}

export default StatusPage;