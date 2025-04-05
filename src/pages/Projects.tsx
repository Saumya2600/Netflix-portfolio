import React from 'react';
import './Projects.css';
import { FaReact, FaNodeJs, FaAws, FaDatabase, FaDocker, FaAngular, FaGithub, FaGitlab, FaGoogle, FaJava, FaJenkins, FaMicrosoft, FaPython, FaVuejs } from 'react-icons/fa';
import { SiRubyonrails,SiVercel, SiMysql,SiPostgresql, SiMongodb, SiMaterialdesign, SiHtml5, SiCss3, SiJquery, SiAwsamplify, SiFirebase, SiTerraform, SiArgo } from 'react-icons/si';
import { GrDeploy, GrKubernetes } from "react-icons/gr";

// Hardcode your project images (add these to src/images/)
import vesselTrackingImage from '../images/git-dash.png';
import taskmanagerImage from '../images/task-manage.png';
import salesAnalysisImage from '../images/allmeno.png';
import maskWatchImage from '../images/chris.jpg';
import pawPalsImage from '../images/Hotelcalifornia.jpg';
import triviaTitansImage from '../images/atomic_habits.jpg';

// Create a type-safe tech icons mapping
const techIcons: Record<string, React.ComponentType> = {
  "React.js": FaReact,
  "NodeJS": FaNodeJs,
  "AWS": FaAws,
  "Vercel": SiVercel,
  "PostgreSQL": SiPostgresql,
  "MongoDB": SiMongodb,
  "SQL": SiMysql,
  "Ruby On Rails": SiRubyonrails,
  "Material UI": SiMaterialdesign,
  "HTML5": SiHtml5,
  "CSS3": SiCss3,
  "jQuery": SiJquery,
  "AWS-ECS": SiAwsamplify,
  'Cognito': FaAws,
  'Lambda': FaAws,
  'ECS': FaAws,
  'Jenkins': FaJenkins,
  'Docker': FaDocker,
  'GraphQL': FaDatabase,
  'CI/CD': FaGitlab,
  'GitLab': FaGitlab,
  'GitHub': FaGithub,
  'Heroku': GrDeploy,
  'Netlify': GrDeploy,
  'Firebase': SiFirebase,
  'GCP': FaGoogle,
  'Azure': FaMicrosoft,
  'Kubernetes': GrKubernetes,
  'Terraform': SiTerraform,
  'ArgoCD': SiArgo,
  'Java': FaJava,
  'Spring Boot': FaJava,
  'Python': FaPython,
  'Node.js': FaNodeJs,
  'Express.js': FaNodeJs,
  'Hibernate': FaJava,
  'Maven': FaJava,
  'Gradle': FaJava,
  'JUnit': FaJava,
  'Mockito': FaJava,
  'Jest': FaReact,
  'React': FaReact,
  'Angular': FaAngular,
  'Vue.js': FaVuejs,
  'Next.js': FaReact,
  'Gatsby': FaReact,
  'Nuxt.js': FaVuejs,
  'Redux': FaReact,
  'Vuex': FaVuejs,
  'Tailwind CSS': SiCss3,
  'Bootstrap': SiCss3,
  'JQuery': SiJquery,
};

// TechIcon component to properly render icons
const TechIcon: React.FC<{ tech: string }> = ({ tech }) => {
  const IconComponent = techIcons[tech];
  return IconComponent ? <IconComponent /> : <>🔧</>;
};

// Hardcode your projects
const projects = [
  {
    title: "Vessel Tracking & Sustainability Dashboard",
    description: "Developed a company-wide dashboard to track vessels coated by the company, enabling real-time monitoring and operational insights. Includes a dedicated page for sustainability metrics showing tons of CO2 saved.",
    techUsed: "React.js, Express.js, SQL, AWS S3, Vercel",
    image: { url: vesselTrackingImage }
  },
  {
    title: "Task Management App",
    description: "Full-stack task management application with drag-and-drop functionality, user authentication, and real-time updates. Built with modern web technologies and deployed on cloud platforms.",
    techUsed: "React.js, Node.js, Express.js, MongoDB, Vercel",
    image: { url: taskmanagerImage },
    githubLink: "https://github.com/yourusername/task-manager" // Add your repo link
  },
  {
    title: "Sales Analysis",
    description: "Developed interactive sales dashboards in Microsoft Power BI to visualize financial performance and product sales across geographic regions over the past decade.",
    techUsed: "Microsoft Power BI, SQL",
    image: { url: salesAnalysisImage }
  },
  {
    title: "Mask Watch",
    description: "Built a serverless application using AWS services to analyze images for individuals wearing face masks, with automated image processing and label generation.",
    techUsed: "AWS Lambda, AWS Rekognition, AWS S3, Python",
    image: { url: maskWatchImage }
  },
  {
    title: "PawPals",
    description: "Designed and implemented a pet-related web application with a homepage and related pages, focusing on code quality and database performance.",
    techUsed: "Java, Spring Boot, MySQL, React",
    image: { url: pawPalsImage }
  },
  {
    title: "Trivia Titans",
    description: "Developed an engaging online quiz game with a dynamic game lobby, real-time leaderboard, and user-friendly interface for organizing and playing quizzes.",
    techUsed: "AWS Lambda, React, DynamoDB, API Gateway",
    image: { url: triviaTitansImage }
  }
];

const Projects: React.FC = () => {
  if (projects.length === 0) return <div>No projects available.</div>;

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            <img src={project.image.url} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-used">
                {project.techUsed.split(', ').map((tech, i) => (
                  <span key={i} className="tech-badge">
                    <TechIcon tech={tech} /> {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;