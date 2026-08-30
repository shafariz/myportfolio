import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import ProjectModal from '../../components/ProjectModal/ProjectModal';
import './Projects.css';

const Projects = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        {/* Title Header */}
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="projects-title-heading">
            Things I've <span className="proj-title-accent serif-italic">Build</span>
          </h2>
          <p className="projects-subtitle-text">Explore some of my recent work and digital solutions</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-exact-card"
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-card-img" />
                <div className="view-project-overlay">
                  <span className="view-project-pill">View Project</span>
                </div>
              </div>

              <div className="project-card-body">
                <div className="project-title-wrapper">
                  <h3 className="project-card-title">{project.title}</h3>
                  {project.subtitle && <p className="project-card-subtitle">{project.subtitle}</p>}
                </div>

                <div className="project-divider"></div>

                <div className="project-role-section">
                  <span className="project-role-label">MY ROLE</span>
                  <span className="project-role-value">{project.role}</span>
                </div>

                <div className="project-type-section">
                  <span className="project-type-pill">
                    <span className="pill-dot"></span>
                    {project.type}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal Component */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};

export default Projects;