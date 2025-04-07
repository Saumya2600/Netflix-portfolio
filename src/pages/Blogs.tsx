import React from 'react';
import './Blogs.css';

const blogsData = [
  {
    title: "Recreating Shopify’s BFCM Globe Using react-globe.gl",
    platform: "The New Stack",
    link: "https://thenewstack.io/recreating-shopifys-bfcm-globe-using-react-globe-gl/",
    description: "A tutorial on recreating Shopify's 3D Thanksgiving globe using the react-globe.gl library for globe data visualization.",
  },
  {
    title: "Build A Stunning Generative AI App with a React IDE",
    platform: "Catalins.tech",
    link: "https://catalins.tech/build-a-stunning-generative-ai-app-with-a-react-ide",
    description: "A guide on building a generative AI application that creates images from user prompts using React and a visual IDE.",
  },
  {
    title: "Turbocharging React with WebAssembly",
    platform: "OpenReplay Blog",
    link: "https://blog.openreplay.com/turbocharging-react-with-webassembly",
    description: "An article exploring how to integrate WebAssembly with React to enhance performance in front-end applications.",
  },
  {
    title: "React + AI Stack for 2025",
    platform: "Builder.io",
    link: "https://www.builder.io/blog/react-ai-stack-2025",
    description: "An overview of React and AI tools for developers in 2025, including AI-assisted development options like Visual Copilot for generating React code from Figma designs.",
  },
  {
    title: "Building Web Apps with React, WebAssembly, and Go",
    platform: "Medium",
    link: "https://medium.com/@akshayspatel/building-web-apps-with-react-webassembly-and-go-lang-6c3377b5a20e",
    description: "A tutorial on integrating WebAssembly with React using Go, highlighting the performance benefits of Wasm in web applications.",
  },
];

const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <h1 className="blogs-title">📝 Blogs That Inspire Me</h1>
      <p className="blogs-intro">A collection of insightful articles on React-globe, generative AI, and WebAssembly with React that I find inspiring.</p>
      <div className="blogs-list">
        {blogsData.length > 0 ? (
          blogsData.map((blog, index) => (
            <div key={index} className="blog-card" style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}>
              <h2 className="blog-title">{blog.title}</h2>
              <p className="blog-platform">{blog.platform}</p>
              <a href={blog.link} target="_blank" rel="noopener noreferrer" className="blog-link">
                Read More
              </a>
              <p className="blog-description">{blog.description}</p>
            </div>
          ))
        ) : (
          <p>No blogs available.</p>
        )}
      </div>
    </div>
  );
};

export default Blogs;