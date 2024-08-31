import './App.css';
import React from 'react';
import { Container, Grid } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Attendance from '../src/pages/Attendance';
import EngagementMonitor from './components/EngagementMonitor';
import PerformanceAnalytics from './components/PerformanceAnalytics';
import Auth from './components/Auth';
import NavbarH from './components/Navbar-Home';
// import Navbar from './components/Navbar';
// import MainContent from './components/MainContent';
import Home from '../src/pages/Home'
import Monitoring from '../src/pages/Monitoring'

const App = () => {
  return (
    <Router>
      <div>
        <NavbarH/>
      </div>
      <div>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/engagement" element={<EngagementMonitor />} />
          <Route path="/performance" element={<PerformanceAnalytics />} />
          <Route path="/monitor" element={<Monitoring />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
