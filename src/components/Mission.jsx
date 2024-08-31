import React, { useEffect, useState } from 'react';
import '../css/Mission.css';
import mission1 from '../assets/mission1.png';
import mission2 from '../assets/mission2.png';
import mission3 from '../assets/mission3.jpg';
import mission4 from '../assets/mission4.jpeg';

const images = [
  mission1,
  mission2,
  mission3,
  mission4
];

const Mission = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="mission"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="mission-content">
        <h2>Our Mission</h2>
        <p>
          "To enhance classroom management, optimizes teaching methods, and ensure high-quality learning experiences"
        </p>
      </div>
    </div>
  );
};

export default Mission;
