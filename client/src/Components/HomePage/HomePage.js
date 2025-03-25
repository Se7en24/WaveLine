import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import solutionsBackground from '../../Assets/ii.jpg';
import shippingIcon from '../../Assets/ii.jpg';
import inlandIcon from '../../Assets/gg.jpg';
import airCargoIcon from '../../Assets/cc.jpg';
import digitalIcon from '../../Assets/mm.jpg';
import cargoCoverIcon from '../../Assets/cargo cover solution.jpg';
import agricultureImg from '../../Assets/agriculture.webp';
import fruitsImg from '../../Assets/fruits.webp';
import pharmaceuticalsImg from '../../Assets/pharmaceuticals.webp';
import carPartsImg from '../../Assets/car-parts.webp';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const HomePage = () => {
  const [activeTab, setActiveTab] = useState('schedules');
  const [fromPort, setFromPort] = useState('');
  const [toPort, setToPort] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const industries = [
    {
      title: "Agriculture",
      image: agricultureImg,
      description: "With global sourcing an everyday reality, WaveLine connects the growers, farmers and producers of agricultural products around the world with their key markets.",
    },
    {
      title: "Fruits",
      image: fruitsImg,
      description: "Whether you're shipping apples or avocados, our world-leading reefer fleet is equipped with the technology you need to keep your fruit in perfect condition.",
    },
    {
      title: "Pharmaceuticals",
      image: pharmaceuticalsImg,
      description: "More and more pharmaceutical companies are turning to sea transport to deliver medicines and other essential goods quickly and safely to their destination.",
    },
    {
      title: "Car Parts",
      image: carPartsImg,
      description: "Whether you are shipping production or service parts, a reliable and experienced shipping partner is a vital link in your uninterruptible supply chain.",
    },
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev === industries.length - 1 ? 0 : prev + 1));
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, [industries.length]);

  return (
    <div className="home">
      {/* Header Section */}
      <section className="header-section">
        <h1 className="main-title">Leader in Shipping & Logistics</h1>
      </section>

      {/* Our Solutions Section */}
      <section className="solutions-section" style={{ backgroundImage: `url(${solutionsBackground})` }}>
        <div className="solutions-overlay">
          <h2>Our Solutions</h2>
          <p className="solutions-description">
            As a global leader in container shipping, our worldwide teams of industry-specific experts offer round-the-clock personalized service. We ensure fast and reliable transit times, providing the best solutions for your needs.
          </p>
          <div className="solutions-container">
            <div className="solution">
              <img src={shippingIcon} alt="Shipping Solutions" className="solution-icon" />
              <h3>Shipping Solutions</h3>
            </div>
            <div className="solution">
              <img src={inlandIcon} alt="Inland Transportation" className="solution-icon" />
              <h3>Inland Transportation & Logistics Solutions</h3>
            </div>
            <div className="solution">
              <img src={airCargoIcon} alt="Air Cargo" className="solution-icon" />
              <h3>Air Cargo Solutions</h3>
            </div>
            <div className="solution">
              <img src={digitalIcon} alt="Digital Business" className="solution-icon" />
              <h3>Digital Business Solutions</h3>
            </div>
            <div className="solution">
              <img src={cargoCoverIcon} alt="Cargo Cover" className="solution-icon" />
              <h3>Cargo Cover Solutions</h3>
            </div>
          </div>
          <button className="see-all-button">See all solutions</button>
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries-section">
        <div className="container">
          <h2 className="section-title">Your Shipping Needs Met</h2>
          <div className="title-underline"></div>

          <div className="description-text">
            <p>At Wave Line we pride ourselves on being a global container shipping company that delivers tailored solutions designed to meet the specific needs of each of our customers.</p>
          </div>

          <div className="industries-slider">
            <button className="slider-arrow prev" onClick={() => setCurrentSlide(prev => (prev === 0 ? industries.length - 1 : prev - 1))}>
              ‹
            </button>

            <div className="industries-container">
              {industries.map((industry, index) => (
                <div 
                  key={industry.title}
                  className={`industry-card ${index === currentSlide ? 'active' : ''}`}
                  style={{ backgroundImage: `url(${industry.image})` }}
                >
                  <div className="industry-content">
                    <h3>{industry.title}</h3>
                    <p>{industry.description}</p>
                    <button className="read-more">READ MORE</button>
                  </div>
                </div>
              ))}
            </div>

            <button className="slider-arrow next" onClick={() => setCurrentSlide(prev => (prev === industries.length - 1 ? 0 : prev + 1))}>
              ›
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-left">
            <div className="location-selector">
              <select defaultValue="IN" className="country-select">
                <option value="IN">IN</option>
              </select>
              <select defaultValue="MUMBAI" className="office-select">
                <option value="MUMBAI">WaveLine MUMBAI</option>
              </select>
            </div>
          </div>

          <div className="footer-center">
            <div className="footer-links">
              <span>Solutions</span>
              <span>Local information</span>
              <span>E-Business</span>
              <span>Sustainability</span>
              <span>myWaveLine</span>
            </div>
          </div>

          <div className="footer-section">
            <h3>GET TO KNOW US</h3>
            <div className="footer-links">
              <Link to="/about">Wave Line Group</Link>
              <Link to="/newsroom">Newsroom</Link>
              <Link to="/events">Events</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/contact">Contact us</Link>
              <Link to="/preferences">Preference Center</Link>
            </div>

            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
