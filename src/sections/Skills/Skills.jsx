import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import skillsBg from '../../assets/skills-bg.webp'; 
import './Skills.css';

const Skills = () => {
  const { about } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section 
      className="skills-section" 
      id="skills"
      style={{ backgroundImage: `url(${skillsBg})` }} 
    >
      <div className="skills-container">
        
        <motion.h2 
          className="skills-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          TOOLS <span className="skills-accent">of the</span> TRADE
        </motion.h2>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {about.skills.map((categoryGroup, index) => (
            <motion.div 
              key={index} 
              className="skill-category-card"
              variants={cardVariants}
            >
              <h3 className="category-title">{categoryGroup.category}</h3>
              
              <div className="skill-badges-wrapper">
                {categoryGroup.items.map((skill, idx) => (
                  <div className="skill-badge-item" key={idx}>
                    <img src={skill.logo} alt={skill.name} className="skill-logo" />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;