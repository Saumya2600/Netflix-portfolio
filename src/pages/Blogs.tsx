import React from 'react';
import { SiMedium, SiDevdotto } from 'react-icons/si'; // Corrected imports

const blogsData = [
  {
    title: "Make Your Rails Console Look Better",
    platform: "Medium",
    icon: <SiMedium />,
    link: "https://medium.com/@chintusamala96/make-your-rails-console-look-better-510988d40566",
    description: "Learn tips to customize your Rails console for a better experience.",
  },
  {
    title: "Docker Fundas - My Version",
    platform: "Medium",
    icon: <SiMedium />,
    link: "https://medium.com/@chintusamala96/docker-fundas-my-version-7b9262bd90d4",
    description: "An introductory guide to Docker fundamentals from my perspective.",
  },
  {
    title: "Grape Gem in Ruby on Rails: Handling User Model and API Endpoint",
    platform: "Dev.to",
    icon: <SiDevdotto />,
    link: "https://dev.to/samalasumanth0262/grape-gem-in-ruby-on-rails-handling-user-model-and-api-endpoint-g6d",
    description: "A guide to using the Grape gem for API development in Ruby on Rails.",
  },
];

const Blogs: React.FC = () => {
  return (
    <div>
      <h1>Blogs</h1>
      {blogsData.map((blog, index) => (
        <div key={index}>
          <h2>{blog.title}</h2>
          <p>{blog.platform} {blog.icon}</p>
          <a href={blog.link} target="_blank" rel="noopener noreferrer">Read More</a>
          <p>{blog.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Blogs;