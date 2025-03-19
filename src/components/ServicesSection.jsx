import React from "react";
import "./ServicesSection.css";
import { FaLaptopCode, FaMobileAlt, FaPalette, FaServer, FaDatabase, FaShieldAlt, FaCodeBranch } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    description: "Building responsive and modern websites using React.js, Tailwind CSS, and Bootstrap.",
  },
  // {
  //   icon: <FaMobileAlt />,
  //   title: "Mobile App Development",
  //   description: "Creating seamless and high-performance mobile applications with React Native.",
  // },
  {
    icon: <FaPalette />,
    title: "UI/UX Design",
    description: "Designing interactive and user-friendly interfaces with a focus on accessibility.",
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    description: "Developing scalable APIs and server-side applications using Node.js and Express.js.",
  },
  {
    icon: <FaDatabase />,
    title: "Database Management",
    description: "Efficiently handling data storage and retrieval using MongoDB.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Authentication & Security",
    description: "Implementing secure authentication and authorization using JWT and Firebase.",
  },
  {
    icon: <FaCodeBranch />,
    title: "Version Control & Deployment",
    description: "Managing code collaboration and deployment using Git, GitHub, and CI/CD pipelines.",
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">My Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
