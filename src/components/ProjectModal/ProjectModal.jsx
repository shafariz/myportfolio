import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div 
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="modal-content"
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()} 
          >
            <button className="modal-close-btn" onClick={onClose}>×</button>
            
            <div className="modal-img-wrapper">
              <img src={project.image} alt={project.title} className="modal-img" />
            </div>

            <div className="modal-details">
              <span className="modal-type-badge">{project.type}</span>
              <h3 className="modal-title">{project.title}</h3>
              {project.subtitle && <h4 className="modal-subtitle">{project.subtitle}</h4>}
              
              <div className="modal-role-box">
                <strong>Role:</strong> {project.role}
              </div>

              <div className="modal-text-section">
                <h5 className="modal-section-title">About the Project</h5>
                <p className="modal-desc">{project.about}</p>
              </div>

              <div className="modal-text-section">
                <h5 className="modal-section-title">Problem Solved</h5>
                <p className="modal-desc">{project.problemSolved}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;