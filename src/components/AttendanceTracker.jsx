// src/components/AttendanceTracker.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AttendanceTracker = () => {
  const [attendance, setAttendance] = useState([]);
  
  useEffect(() => {
    // Fetch attendance data from the backend API
    const fetchAttendanceData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/attendance'); // Example API endpoint
        const data = await response.json();
        setAttendance(data);
      } catch (error) {
        console.error('Error fetching attendance data:', error);
      }
    };

    fetchAttendanceData();
  }, []);

  return (
    <div>
      <h2>Attendance Tracker</h2>
      <ul>
        {attendance.map((record, index) => (
          <li key={index}>
            {record.name} - {record.date} - {record.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AttendanceTracker;
