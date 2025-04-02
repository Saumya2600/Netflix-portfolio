import React from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';

// Hardcode Saumya Shah's profile banner data
const bannerData = {
  headline: "Saumya Shah - Full Stack Developer",
  profileSummary: "Hi, I’m a passionate Software Developer with over a 2 years of experience. I specialize in building scalable and user-friendly web applications using React.js, Node.js, and AWS. With hands-on experience in full-stack development, data integration, and cloud technologies, I thrive on solving complex problems and delivering impactful solutions. When I’m not coding, you’ll find me exploring new technologies, contributing to open-source projects, or working on personal projects that challenge me to grow. I’m always eager to learn, collaborate, and create something meaningful. Let’s build something amazing together!",
  resumeLink: { url: "https://drive.google.com/file/d/1UZ4VzHw8aFEtw0rj-faE1V6ITxIbwd-8/view?usp=drive_link" }, // Replace with your actual resume link
  linkedinLink: "https://www.linkedin.com/in/saum26/" // Replace with your actual LinkedIn URL
};

const ProfileBanner: React.FC = () => {
  const handlePlayClick = () => {
    window.open(bannerData.resumeLink.url, '_blank');
  };

  const handleLinkedinClick = () => { 
    window.open(bannerData.linkedinLink, '_blank');
  };

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline" id='headline'>{bannerData.headline}</h1>
        <p className="banner-description">
          {bannerData.profileSummary}
        </p>

        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="LinkedIn" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;