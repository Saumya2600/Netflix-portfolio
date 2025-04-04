import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaBriefcase, FaTools, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';
import blueImage from '../images/blue.png';

// Wrapper component to satisfy TypeScript
const IconWrapper: React.FC<{ icon: React.ComponentType }> = ({ icon: Icon }) => <Icon />;

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const profileImage = location.state?.profileImage || blueImage;

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 80);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            <span className="navbar-logo-text">Saumya Shah</span>
          </Link>
          <ul className="navbar-links">
            <li><Link to="/browse">Home</Link></li>
            <li><Link to="/work-experience">Professional</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact-me">Hire Me</Link></li>
          </ul>
        </div>
        <div className="navbar-right">
          <div className="hamburger" onClick={toggleSidebar}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <img src={profileImage} alt="Profile" className="profile-icon" onClick={() => { navigate('/browse') }} />
        </div>
      </nav>

      <div className={`sidebar-overlay ${isSidebarOpen ? 'open' : ''}`} onClick={closeSidebar}></div>

      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-logo">
          <span className="sidebar-logo-text">Saumya Shah</span>
        </div>
        <ul>
          <li><Link to="/browse" onClick={closeSidebar}><IconWrapper icon={FaHome} /> Home</Link></li>
          <li><Link to="/work-experience" onClick={closeSidebar}><IconWrapper icon={FaBriefcase} /> Professional</Link></li>
          <li><Link to="/skills" onClick={closeSidebar}><IconWrapper icon={FaTools} /> Skills</Link></li>
          <li><Link to="/projects" onClick={closeSidebar}><IconWrapper icon={FaProjectDiagram} /> Projects</Link></li>
          <li><Link to="/contact-me" onClick={closeSidebar}><IconWrapper icon={FaEnvelope} /> Hire Me</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;