import React from 'react';
import './ContactMe.css';
import profilePic from '../images/grad.jpg';
import { FaEnvelope, FaPhoneAlt, FaCoffee, FaLinkedin } from 'react-icons/fa';

const userData = {
  name: "Saumya Shah",
  title: "Full Stack Developer | Data Integration Specialist",
  summary: "I'm a passionate developer with experience in full-stack web development, cloud technologies, and data integration.",
  companyUniversity: "Graphite Innovation & Technology, Dalhousie University",
  linkedinLink: "https://www.linkedin.com/in/saum26/",
  email: "shahsaumya261@gmail.com",
  phoneNumber: "(+1) 902-993-0448"
};

const ContactMe: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="linkedin-badge-custom">
        <img src={profilePic} alt={userData.name} className="badge-avatar" />
        <div className="badge-content">
          <h3 className="badge-name">{userData.name}</h3>
          <p className="badge-title">{userData.title}</p>
          <p className="badge-description">{userData.summary}</p>
          <p className="badge-company">{userData.companyUniversity}</p>
          <a
            href={userData.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="badge-link"
          >
            <FaLinkedin className="linkedin-icon" /> View Profile
          </a>
        </div>
      </div>
      <div className="contact-header">
        <p>I'm always up for a chat or a coffee! Feel free to reach out.</p>
      </div>
      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href={`mailto:${userData.email}`} className="contact-link">
            {userData.email}
          </a>
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href={`tel:${userData.phoneNumber}`} className="contact-link">
            {userData.phoneNumber}
          </a>
        </div>
        <div className="contact-fun">
          <p>Or catch up over a coffee ☕</p>
          <FaCoffee className="coffee-icon" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
