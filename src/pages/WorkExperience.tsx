import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';

const timeLineData = [
  {
    timelineType: "work",
    title: "Full Stack Developer",
    name: "Graphite Innovation & Technology",
    dateRange: "Jan 2024 - Mar 2025",
    techStack: "React.js, Express.js, AWS, PostgreSQL, MySQL, Python, Vercel",
    summaryPoints: "Developed a company-wide dashboard for real-time data visualization using React.js and Express.js, hosted on AWS Cloud. Performed vessel analysis with Python scripts for data cleaning and analysis. Managed relational databases with optimized queries and automated data workflows."
  },
  {
    timelineType: "education",
    name: "Dalhousie University",
    title: "Master of Applied Computer Science (GPA: 3.78/4.30)",
    dateRange: "Jan 2023 - Apr 2024",
    summaryPoints: "Coursework: Advanced Topics in Software Development, Data Management Warehousing & Management, Advanced Topics in Cloud Computing, Serverless Computing, UI/UX, Human-Computer Interaction."
  },
  {
    timelineType: "work",
    title: "Associate Software Engineer",
    name: "Accenture Solutions Pvt. Ltd.",
    dateRange: "Nov 2021 - Sep 2022",
    techStack: "Java,MySQL",
    summaryPoints: "Contributed to project tasks using Java programming. Collaborated with cross-functional teams in an agile environment to deliver high-quality solutions. Gained experience in agile methodologies and best practices for software development."
  },
  {
    timelineType: "work",
    title: "Intern",
    name: "Suven Consultants & Technology Pvt. Ltd.",
    dateRange: "Sep 2020 - Nov 2020",
    techStack: "Dialogflow",
    summaryPoints: "Designed and deployed a chatbot using Dialogflow, enhancing user interactions and automating processes. Integrated the chatbot with Facebook Messenger to expand accessibility."
  },
  {
    timelineType: "education",
    name: "Indus University",
    title: "Bachelor of Computer Engineering (CGPA: 9.54/10.00)",
    dateRange: "Aug 2017 - Aug 2021",
    summaryPoints: "Coursework: Data Structures, Object-Oriented Programming, Software Engineering, Operating Systems, Computer Networks, Web Development, Database Management System, Data Analysis."
  }
];

const WorkExperience: React.FC = () => {
  if (!timeLineData || timeLineData.length === 0) return <div>No timeline data available.</div>;

  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">📅 Work Experience & Education Timeline</h2>
      </div>
      <VerticalTimeline>
        {timeLineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${item.timelineType}`}
            contentStyle={
              item.timelineType === "work"
                ? index === 0
                  ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                  : { background: 'rgb(240, 240, 240)', color: '#fff' }
                : { background: 'rgb(255, 224, 230)', color: '#fff' }
            }
            contentArrowStyle={
              item.timelineType === "work"
                ? { borderRight: index === 0 ? '7px solid rgb(33, 150, 243)' : '7px solid rgb(240, 240, 240)' }
                : { borderRight: '7px solid rgb(255, 224, 230)' }
            }
            date={item.dateRange}
            iconStyle={
              item.timelineType === "work"
                ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                : { background: 'rgb(255, 160, 200)', color: '#fff' }
            }
            icon={item.timelineType === "work" ? <WorkIcon /> : <SchoolIcon />}
          >
            {item.timelineType === "work" ? (
              <div style={{ color: 'black' }}>
                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.name}</h4>
                <p className="vertical-timeline-element-tech">🔧 {item.techStack}</p>
                <p>{item.summaryPoints}</p>
              </div>
            ) : (
              <div style={{ color: 'black' }}>
                <h3 className="vertical-timeline-element-title">{item.name}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.title}</h4>
                <p>{item.summaryPoints}</p>
              </div>
            )}
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;