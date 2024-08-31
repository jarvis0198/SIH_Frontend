import React from 'react';
import '../css/Hero.css';
import hero from '../assets/herogood.png';

const Hero = () => {
  return (
    <div className="hero" >
      
      <div className="hero-content">
  <h1>
    Welcome to <br />
    <span className="highlight-text">Monitoring System</span>
  </h1>
  <p>
    An automated system that can help detect early signs of poor-quality training in various institutions and ensure high standards.
  </p>
</div>

      <div className="hero-image">
        <img src={hero} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
