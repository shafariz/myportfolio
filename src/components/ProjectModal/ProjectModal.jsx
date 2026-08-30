import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div 
          className="modal-frosted-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div 
            className="modal-solid-container"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Close Button */}
            <button 
              className="modal-close-btn" 
              onClick={onClose}
              aria-label="Close modal"
            >
              <FiX className="close-icon" />
            </button>
            
            {/* Full Un-cropped Image Container */}
            <div className="modal-img-preview">
              <img src={project.image} alt={project.title} className="modal-img" />
            </div>

            {/* Modal Body Content */}
            <div className="modal-details-body">
              <div className="modal-header-meta">
                <span className="modal-type-badge">{project.type}</span>
                <h3 className="modal-title-heading">{project.title}</h3>
                {project.subtitle && <h4 className="modal-subtitle-text">{project.subtitle}</h4>}
              </div>
              
              <div className="modal-role-pill">
                <strong>Role:</strong> {project.role}
              </div>

              <div className="modal-section-block">
                <h5 className="modal-section-title">About the Project</h5>
                <p className="modal-desc-paragraph">{project.about}</p>
              </div>

              <div className="modal-section-block">
                <h5 className="modal-section-title">Problem Solved</h5>
                <p className="modal-desc-paragraph">{project.problemSolved}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;