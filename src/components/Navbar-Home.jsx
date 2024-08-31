import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import navi from '../assets/Logo.png'


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
      <Link to="/">
          <img src={navi} alt="NIT Kurukshetra Logo" className='nit-logo' />
        </Link>
      </div>
      <ul className="nav-links">
      <li><Link to="/attendance">Attendance</Link></li>
        <li><Link to="/engagement">Engagement</Link></li>
        <li><Link to="/performance">Performance</Link></li>
        <li><Link to="/leaderboard">Leaderboard</Link></li>
        <li><Link to="/monitor">Monitoring</Link></li>
      </ul>
      <button className="get-started-btn">Get Started</button>
    </nav>
  );
};

export default Navbar;
