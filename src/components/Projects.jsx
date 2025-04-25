import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Engage Hub",
      description:
        "A modern social platform designed to connect people, foster discussions, and build interactive communities.",
      link: "https://github.com/Sorabh-jangir-333/EngageHub-",
    },
    {
      title: "Job Portal (MERN Stack)",
      description:
        "Developed a full-stack job portal with authentication, job postings, resume uploads, and application tracking.",
      link: "https://github.com/Sorabh-jangir-333/Job-Portal-MERN-Stack",
    },
    {
      title: "E-commerce Website",
      description:
        "Built a responsive e-commerce platform with product listings, cart functionality, and checkout process.",
      link: "https://github.com/Sorabh-jangir-333/E-commerce-Web-App",
    },
    {
      title: "Rate Your Instructor",
      description:
        "Created a website for students to review and rate professors based on various criteria. The platform also allows instructors to manage their profiles. Gives students a voice to share honest feedback.",
      link: "https://github.com/Sorabh-jangir-333/Rate-Your-Instructor",
    },
    {
      title: "TaskMate - A Simple Task Management App",
      description:
        " TaskMate is a lightweight and efficient task management web app, allows users to create, view, and manage tasks in a visually appealing and interactive manner.",
      link: "https://github.com/Sorabh-jangir-333/TaskMate---A-Simple-Task-Management-App",
    },
    {
      title: "College Project - UserCRUD ",
      description:
        "UserCRUD is a simple web app for managing users. It allows users to create, view, update, and delete profiles with name, email, and image URL.",
      link: "https://github.com/Sorabh-jangir-333/UserCRUD",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
