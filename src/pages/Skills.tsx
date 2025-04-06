import React from 'react';
import './Skills.css';
import { CgCPlusPlus } from "react-icons/cg";
import { IoLogoHtml5 } from "react-icons/io";
import { MdCss } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io5";
import { DiRedis } from "react-icons/di";
import { TbBrandReactNative } from "react-icons/tb";
import { VscAzure,VscVscode } from "react-icons/vsc";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FaReact, FaPython, FaNode,FaGit,FaAngular,FaNodeJs, FaAws,FaJenkins, FaDocker, FaJava,FaMicrosoft,FaJira } from 'react-icons/fa';
import { SiRubyonrails,SiVercel ,SiPostman ,SiMongodb ,SiTypescript ,SiAmazondynamodb , SiPostgresql, SiMysql, SiKubernetes, SiGooglecloud, SiSpringboot, SiPhp, SiNetlify, SiHeroku, SiCss3, SiRabbitmq, SiImessage,SiTableau } from 'react-icons/si';


const iconMap: { [key: string]: JSX.Element } = {
  SiRubyonrails: <SiRubyonrails />,
  FaNode: <FaNode />,
  IoLogoJavascript: <IoLogoJavascript />,
  SiVercel: <SiVercel  />,
  TbBrandReactNative: <TbBrandReactNative />,
  CgCPlusPlus: <CgCPlusPlus />,
  SiSpringboot: <SiSpringboot />,
  FaJira: <FaJira />,
  FaMicrosoft: <FaMicrosoft />,
  FaJenkins: <FaJenkins />, 
  VscVscode: <VscVscode />,
  AiOutlineConsoleSql: <AiOutlineConsoleSql />,
  FaJava: <FaJava />,
  FaNodeJs: <FaNodeJs  />,
  FaAngular: <FaAngular  />,
  DiRedis: <DiRedis />,
  SiPhp: <SiPhp />,
  SiAmazondynamodb: <SiAmazondynamodb  />,
  VscAzure: <VscAzure />,
  IoLogoHtml5: <IoLogoHtml5 />,
  MdCss: <MdCss />,
  FaReact: <FaReact />,
  SiPostman: <SiPostman />,
  FaGit: <FaGit  />,
  SiMongodb: <SiMongodb  />,
  SiTypescript: <SiTypescript  />,
  FaAws: <FaAws />,
  FaPython: <FaPython />,
  SiTableau: <SiTableau />,
  FaDocker: <FaDocker />,
  SiPostgresql: <SiPostgresql />,
  SiMysql: <SiMysql />,
  SiKubernetes: <SiKubernetes />,
  SiGooglecloud: <SiGooglecloud />,
  SiHeroku: <SiHeroku />,
  SiNetlify: <SiNetlify />,
  SiRabbitmq: <SiRabbitmq />,
  SiImessage: <SiImessage />,
};

// Hardcode your skills
const skillsData = [
  // Programming Languages
  {
    category: "Programming Languages",
    name: "JavaScript",
    description: "Experienced in building dynamic web applications and APIs.",
    icon: "IoLogoJavascript" // Using Node.js icon as a proxy for JavaScript
  },
  {
    category: "Programming Languages",
    name: "TypeScript",
    description: "Proficient in adding type safety to JavaScript projects.",
    icon: "SiTypescript"
  },
  {
    category: "Programming Languages",
    name: "Java",
    description: "Skilled in developing backend applications with Spring Boot.",
    icon: "FaJava"
  },
  {
    category: "Programming Languages",
    name: "Python",
    description: "Used for data analysis, automation, and serverless applications.",
    icon: "FaPython" 
  },
  {
    category: "Programming Languages",
    name: "C++",
    description: "Proficient with object-oriented programming and system-level development.",
    icon: "CgCPlusPlus" // Using Java icon as a placeholder; you can add a C++ icon
  },
  // Web & App Development
  {
    category: "Web & App Development",
    name: "React.js",
    description: "Built interactive UIs and dashboards for real-time data visualization.",
    icon: "FaReact"
  },
  {
    category: "Web & App Development",
    name: "React Native",
    description: "Developed cross-platform mobile applications.",
    icon: "FaReTbBrandReactNative"
  },
  {
    category: "Web & App Development",
    name: "Node.js",
    description: "Created RESTful APIs and backend services with Express.js.",
    icon: "FaNode"
  },
  {
    category: "Web & App Development",
    name: "Express.js",
    description: "Designed scalable backend APIs for web applications.",
    icon: "FaNodeJs"
  },
  {
    category: "Web & App Development",
    name: "Spring Boot",
    description: "Developed robust backend applications with Java.",
    icon: "SiSpringboot"
  },
  {
    category: "Web & App Development",
    name: "Angular",
    description: "Familiar with building single-page applications.",
    icon: "FaAngular" // Note: FaAngular isn't in iconMap, but you can add it
  },
  {
    category: "Web & App Development",
    name: "HTML",
    description: "Experienced in structuring web content.",
    icon: "IoLogoHtml5"
  },
  {
    category: "Web & App Development",
    name: "CSS",
    description: "Skilled in styling and responsive design.",
    icon: "MdCss"
  },
  // Cloud & DevOps
  {
    category: "Cloud & DevOps",
    name: "AWS",
    description: "Deployed applications using S3, Lambda, Rekognition, and more.",
    icon: "FaAws"
  },
  {
    category: "Cloud & DevOps",
    name: "Google Cloud",
    description: "Familiar with cloud functions and infrastructure.",
    icon: "SiGooglecloud"
  },
  {
    category: "Cloud & DevOps",
    name: "Azure",
    description: "Explored cloud services for application deployment.",
    icon: "VscAzure" // Note: FaMicrosoft isn't in iconMap, but you can add it
  },
  {
    category: "Cloud & DevOps",
    name: "CI/CD",
    description: "Implemented continuous integration and deployment pipelines.",
    icon: "FaGitAlt"
  },
  {
    category: "Cloud & DevOps",
    name: "Docker",
    description: "Containerized applications for consistent deployment.",
    icon: "FaDocker"
  },
  {
    category: "Cloud & DevOps",
    name: "Kubernetes",
    description: "Managed container orchestration for scalable applications.",
    icon: "SiKubernetes"
  },
  // Databases
  {
    category: "Databases",
    name: "MySQL",
    description: "Optimized queries for performance in web applications.",
    icon: "SiMysql"
  },
  {
    category: "Databases",
    name: "SQL Server",
    description: "Managed relational databases for enterprise applications.",
    icon: "AiOutlineConsoleSql" // Using MySQL icon as a proxy
  },
  {
    category: "Databases",
    name: "MongoDB",
    description: "Worked with NoSQL databases for flexible data storage.",
    icon: "SiMongodb" // Note: SiMongodb isn't in iconMap, but you can add it
  },
  {
    category: "Databases",
    name: "DynamoDB",
    description: "Used in serverless applications for high scalability.",
    icon: "SiAmazondynamodb" // Using PostgreSQL icon as a proxy
  },
  {
    category: "Databases",
    name: "PostgreSQL",
    description: "Managed relational databases with optimized queries.",
    icon: "SiPostgresql"
  },
  {
    category: "Databases",
    name: "Redis",
    description: "Utilized for caching and improving application performance.",
    icon: "DiRedis" // Note: SiRedis isn't in iconMap, but you can add it
  },
  // Tools and Technologies
  {
    category: "Tools and Technologies",
    name: "Power BI",
    description: "Developed interactive dashboards for sales analysis.",
    icon: "FaMicrosoft" // Using Microsoft icon as a proxy
  },
  {
    category: "Tools and Technologies",
    name: "Tableau",
    description: "Familiar with data visualization and business intelligence.",
    icon: "SiTableau" // Using Microsoft icon as a proxy
  },
  {
    category: "Tools and Technologies",
    name: "Git",
    description: "Managed version control for collaborative projects.",
    icon: "FaGit"
  },
  {
    category: "Tools and Technologies",
    name: "Postman",
    description: "Tested and debugged APIs during development.",
    icon: "SiPostman" // Using Git icon as a placeholder
  },
  {
    category: "Tools and Technologies",
    name: "Vercel",
    description: "Hosted various projects on it and have in depth knowledge.",
    icon: "SiVercel" // Using Microsoft icon as a proxy
  },
  {
    category: "Tools and Technologies",
    name: "Jenkins",
    description: "Automated CI/CD pipelines for efficient deployment.",
    icon: "FaJenkins" // Note: FaJenkins isn't in iconMap, but you can add it
  },
  {
    category: "Tools and Technologies",
    name: "VS Code",
    description: "Primary IDE for development and debugging.",
    icon: "VscVscode" // Using Git icon as a placeholder
  },
  {
    category: "Tools and Technologies",
    name: "Jira",
    description: "Managed project tasks and workflows in agile teams.",
    icon: "FaJira" // Using Git icon as a placeholder
  }
];

const Skills: React.FC = () => {
  if (skillsData.length === 0) return <div>No skills available.</div>;

  const skillsByCategory = skillsData.reduce((acc: any, skill: any) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="skills-container">
      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill: any, idx: number) => (
              <div key={idx} className="skill-card">
                <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter: any, i: number) => (
                    <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;