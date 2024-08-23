import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Outbox = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    const fetchThreads = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('https://hiring.reachinbox.xyz/api/v1/onebox/list', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setThreads(response.data.data);
      } catch (error) {
        console.error('Error fetching threads:', error);
      }
    };
    fetchThreads();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'D') {
        // Call the DELETE API
      } else if (e.key === 'R') {
        // Open the Reply box
      }
    };
  
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
  

  return (
    <div>
      <h2>Outbox</h2>
      {threads.map((thread) => (
        <div key={thread.id}>
          <h3>{thread.subject}</h3>
          <p>{thread.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Outbox;
