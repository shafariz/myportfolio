import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import './Experience.css';

const Experience = () => {
  const { experiences } = portfolioData;
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        
        <motion.div 
          className="experience-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="experience-title">EXPERIENCE</h2>
        </motion.div>

        <div className="accordion-wrapper">
          {experiences.map((exp, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div 
                key={exp.id}
                className={`accordion-item ${isActive ? 'active' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Kepala Kartu Accordion */}
                <div 
                  className="accordion-head" 
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="accordion-info">
                    <div className="accordion-titles">
                      <h3 className="accordion-role-title">{exp.title}</h3>
                      <p className="accordion-org">{exp.organization}</p>
                    </div>
                    <span className="accordion-date">{exp.date}</span>
                  </div>
                  
                  <div className={`accordion-icon ${isActive ? 'rotate' : ''}`}>
                    <span className="material-symbols-outlined">expand_more</span>
                  </div>
                </div>

                {/* Isi Detail Poin-poin */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      className="accordion-body-wrapper"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="accordion-body">
                        <ul className="accordion-description-list">
                          {exp.description.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Experience;