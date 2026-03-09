import React from "react";
import { FaGithub } from "react-icons/fa";

function Projects() {

  const projectList = [
    {
      title: "Multi-Vendor Marketplace",
      desc: "A scalable Amazon-style marketplace built with React.js, FastAPI, and MySQL supporting customers, vendors, and admin roles with product management, cart system, order processing, and secure payment gateway.",
      github: "https://github.com/yourusername/devconnect",
    },
    {
      title: "PCM Buddy",
      desc: "AI powered educational chatbot built using Django and LLMs to help students learn Physics, Chemistry, and Mathematics.",
      github: "https://github.com/diljithmon170/PCM-Buddy",
    },
    {
      title: "AI Mentee",
      desc: "AI based learning management system with quizzes, automated content generation, and progress tracking.",
      github: "https://github.com/diljithmon170/Ai-Mentee",
    },
  ];

  return (
    <section id="projects" className="projects">

      <h1 className="projects-title">Projects</h1>

      <div className="projects-container">

        {projectList.map((project, index) => (
          <div key={index} className="project-card">

            <h3 className="project-title">
              {project.title}
            </h3>

            <p className="project-desc">
              {project.desc}
            </p>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              <FaGithub /> View Code
            </a>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Projects;
