import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
//import cargoCoverImage from '../../Assets/cargo cover solution.jpg'; 

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('schedules');
  const [fromPort, setFromPort] = useState('');
  const [toPort, setToPort] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* Header Section */}
      <section className="header-section">
        <h1 className="main-title">Welcome to our Shipping & Logistics Company</h1>
      </section>

      {/* Our Solutions Section */}
      <section className="solutions-section">
        <div className="container">
          <h2>Our Solutions</h2>
          <p>
            As a global leader in container shipping, our worldwide teams of industry-specific experts offer round-the-clock personalized service. We ensure fast and reliable transit times, providing the best solutions for your needs.
          </p>
          <div className="solutions-container">
            <div className="solution">
              <h3>Shipping Solutions</h3>
            </div>
            <div className="solution">
              <h3>Inland Transportation & Logistics Solutions</h3>
            </div>
            <div className="solution">
              <h3>Air Cargo Solutions</h3>
            </div>
            <div className="solution">
              <h3>Digital Business Solutions</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
