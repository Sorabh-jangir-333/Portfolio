import React from "react";
import "./Skills.css";
import { FaReact, FaNodeJs, FaJs, FaGitAlt, FaCloudUploadAlt } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiExpress, SiMongodb, SiFirebase, SiAuth0 } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "React.js", icon: <FaReact /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
    { name: "JavaScript (ES6+)", icon: <FaJs /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Authentication & Security (JWT, Firebase)", icon: <SiAuth0 /> },
    { name: "Multer (File Uploads)", icon: <FaCloudUploadAlt /> }, // Using a cloud upload icon as a replacement
    { name: "Version Control (Git & GitHub)", icon: <FaGitAlt /> }
  ];

  return (
    <section id="skills">
      <div className="wave-background">
        <div className="container">
          <h2>My Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-icon">{skill.icon}</div>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
