import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';
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

        {/* Title Header */}
        <motion.div
          className="experience-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="experience-title-heading">
            My <span className="exp-title-accent serif-italic">Journey</span>
          </h2>
        </motion.div>

        {/* Accordion List */}
        <div className="experience-accordion-wrapper">
          {experiences.map((exp, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={exp.id}
                className={`exp-glass-item glass-card ${isActive ? 'exp-active' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                {/* Accordion Head */}
                <div
                  className="exp-accordion-head"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="exp-info-box">
                    <h3 className="exp-role-title">{exp.title}</h3>
                    <p className="exp-organization-name">{exp.organization}</p>
                  </div>

                  <div className="exp-head-right">
                    <span className="exp-date-pill glass-pill">{exp.date}</span>
                    <div className={`exp-toggle-icon ${isActive ? 'icon-rotated' : ''}`}>
                      <span className="material-symbols-outlined">expand_more</span>
                    </div>
                  </div>
                </div>

                {/* Accordion Body */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      className="exp-accordion-body-wrapper"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.25, 1, 0.5, 1] }}
                    >
                      <div className="exp-accordion-body">
                        <ul className="accordion-description-list">
                          {exp.description.map((point, idx) => (
                            <li key={idx} className="exp-description-item">
                              <FaChevronRight className="exp-bullet-icon" />
                              <span>{point}</span>
                            </li>
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