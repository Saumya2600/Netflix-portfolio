import React from 'react';
import './Certifications.css';
import { FaExternalLinkAlt, FaUniversity,FaGoogle,FaLinkedin,FaMicrosoft  } from 'react-icons/fa';
import { SiUdemy, SiCoursera, SiIeee } from 'react-icons/si';

// Define the icon mapping directly
const iconData: { [key: string]: JSX.Element } = {
  udemy: <SiUdemy />,
  coursera: <SiCoursera />,
  ieee: <SiIeee />,
  university: <FaUniversity />,
  google: <FaGoogle />,
  linkedin: <FaLinkedin />,
  microsoft: <FaMicrosoft  />,
};

// Hardcoded certifications data based on the images
const certifications = [
  {
    title: 'TCPS 2: Panel on Research Ethics',
    issuer: 'Government of Canada',
    issuedDate: 'Sep 2023',
    // link: 'https://example.com/tcps2', // Replace with actual link if available
    iconName: 'university',
  },
  {
    title: 'Introduction to Data Studio',
    issuer: 'Google',
    issuedDate: 'Dec 2020',
    // link: 'https://example.com/data-studio', // Replace with actual link if available
    iconName: 'google',
  },
  {
    title: 'Learning SQL Programming',
    issuer: 'LinkedIn',
    issuedDate: 'Dec 2020',
    // link: 'https://example.com/sql-programming', // Replace with actual link if available
    iconName: 'linkedin',
  },
  {
    title: 'Microsoft AI Classroom Series',
    issuer: 'Microsoft',
    issuedDate: 'Dec 2020',
    link: 'https://drive.google.com/file/d/1R3MCp-h--v5q4Ssw0WuaY3rTAce5YYBM/view', // Replace with actual link if available
    iconName: 'microsoft',
  },
  {
    title: 'Machine Learning Pipelines with Azure ML Studio',
    issuer: 'Coursera',
    issuedDate: 'Sep 2020',
    link: 'https://www.coursera.org/account/accomplishments/certificate/HZ44WL626ASC', // Replace with actual link if available
    iconName: 'coursera',
  },
  {
    title: 'Python Basics',
    issuer: 'Coursera',
    issuedDate: 'Aug 2020',
    link: 'https://www.coursera.org/account/accomplishments/certificate/AFKVPKY7PJY9', // Replace with actual link if available
    iconName: 'coursera',
  },
  {
    title: 'Predicting Coronavirus Outbreak in India with AI-ML',
    issuer: 'Edureka',
    issuedDate: 'Jul 2020',
    link: 'https://drive.google.com/file/d/188Outtxsy9s9JKxeNsrdX82QzcZDQQDZ/view', // Replace with actual link if available
    iconName: 'udemy',
  },
  {
    title: 'Machine Learning',
    issuer: 'Coursera',
    issuedDate: 'Jun 2020',
    link: 'https://www.coursera.org/account/accomplishments/certificate/ESLNB8WWJUCG', // Replace with actual link if available
    iconName: 'coursera',
  },
];

const Certifications: React.FC = () => {
  if (certifications.length === 0) return <div>Loading...</div>;

  return (
    <div className="certifications-container">
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <a
            href={cert.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="certification-card"
            style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}
          >
            <div className="certification-content">
              <div className="certification-icon">
                {iconData[cert.iconName] || <FaUniversity />}
              </div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              {cert.issuedDate && <span className="issued-date">Issued {cert.issuedDate}</span>}
            </div>
            <div className="certification-link animated-icon">
              <FaExternalLinkAlt />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;