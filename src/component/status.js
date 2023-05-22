import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TicketStatus({ match }) {
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const response = await axios.get(`http://localhost:8001/api/reviews/${match?.params?.id}`);
        setTicket(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTicket();
  }, [match?.params?.id]);

  if (!ticket) {
    return <div>Loading...</div>;
  }

  return (
    <div className='homemain'>
      <h1>Ticket Status</h1>
      <p>Accepted: {ticket.accepted ? 'Yes' : 'No'}</p>
      <p>Resolved: {ticket.resolved ? 'Yes' : 'No'}</p>
    </div>
  );
}

export default TicketStatus;