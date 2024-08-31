// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Classroom Monitoring Dashboard</h1>
      <nav>
        <ul>
        <li>
            <Link to="/auth">Sign In</Link>
          </li>
          <li>
            <Link to="/attendance">Attendance Tracker</Link>
          </li>
          <li>
            <Link to="/engagement">Engagement Monitor</Link>
          </li>
          <li>
            <Link to="/performance">Performance Analytics</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;