import React from 'react';
import { SiUdemy, SiCoursera, SiIeee } from 'react-icons/si';
import { FaUniversity } from 'react-icons/fa';

// Wrapper component to satisfy TypeScript
const IconWrapper: React.FC<{ icon: React.ComponentType }> = ({ icon: Icon }) => <Icon />;

const iconData: { [key: string]: JSX.Element } = {
  'udemy': <IconWrapper icon={SiUdemy} />,
  'coursera': <IconWrapper icon={SiCoursera} />,
  'ieee': <IconWrapper icon={SiIeee} />,
  'university': <IconWrapper icon={FaUniversity} />
};

// Mock function to simulate fetching certifications
const getCertifications = () => [
  {
    title: "React.js Certification",
    issuer: "Udemy",
    icon: "udemy",
    link: "https://udemy.com/certificate/react",
    description: "Completed a comprehensive course on React.js.",
  },
  {
    title: "Machine Learning",
    issuer: "Coursera",
    icon: "coursera",
    link: "https://coursera.org/certificate/ml",
    description: "Learned machine learning fundamentals.",
  },
];

const Certifications: React.FC = () => {
  const certifications = getCertifications();

  return (
    <div>
      <h1>Certifications</h1>
      {certifications.map((cert, index) => (
        <div key={index}>
          <h2>{cert.title}</h2>
          <p>{cert.issuer} {iconData[cert.icon]}</p>
          <a href={cert.link} target="_blank" rel="noopener noreferrer">View Certificate</a>
          <p>{cert.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Certifications;