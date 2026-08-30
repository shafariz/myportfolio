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
        
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="projects-title">FEATURED PROJECTS</h2>
          <p className="projects-subtitle">Click any card to see full details</p>
        </motion.div>

        {/* Grid Kartu Proyek */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card"
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-img" />
              </div>

              <div className="project-info">
                <h3 className="project-card-title">{project.title}</h3>
                {project.subtitle && <p className="project-card-subtitle">{project.subtitle}</p>}
                
                <div className="project-meta-box">
                  <div className="project-role-text">
                    <span className="meta-label">MY ROLE</span>
                    <span className="meta-value">{project.role}</span>
                  </div>
                  <span className="project-type-badge">{project.type}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pemanggilan Komponen Modal Terpisah */}
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />

      </div>
    </section>
  );
};

export default Projects;