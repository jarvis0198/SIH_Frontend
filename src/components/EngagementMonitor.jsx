// src/components/EngagementMonitor.js
import React, { useState, useEffect } from 'react';

const EngagementMonitor = () => {
  const [engagement, setEngagement] = useState([]);

  useEffect(() => {
    // Fetch engagement data from the backend API
    const fetchEngagementData = async () => {
      try {
        const response = await fetch('http://localhost:5000/engagement'); 
        const data = await response.json();
        setEngagement(data);
      } catch (error) {
        console.error('Error fetching engagement data:', error);
      }
    };

    fetchEngagementData();
  }, []);

  return (
    <div>
      <h2>Engagement Monitor</h2>
      <ul>
        {engagement.map((record, index) => (
          <li key={index}>
            {record.studentName} - Engagement Score: {record.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EngagementMonitor;
