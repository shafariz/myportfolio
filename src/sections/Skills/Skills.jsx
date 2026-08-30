import React from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { portfolioData } from '../../data/portfolioData';
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
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const handleBadgeHover = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.1,
      y: -3,
      boxShadow: "0 8px 20px rgba(2, 132, 199, 0.3)",
      duration: 0.3,
      ease: "back.out(2)"
    });
  };

  const handleBadgeLeave = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      y: 0,
      boxShadow: "0 4px 12px rgba(186, 230, 253, 0.2)",
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        {/* Title */}
        <motion.h2
          className="skills-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="skills-accent serif-italic">Toolkit</span>
        </motion.h2>

        {/* Category Grid */}
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
              className="skill-category-card glass-card"
              variants={cardVariants}
            >
              <h3 className="category-title">{categoryGroup.category}</h3>

              <div className="skill-badges-wrapper">
                {categoryGroup.items.map((skill, idx) => (
                  <div
                    className="skill-badge-item glass-pill"
                    key={idx}
                    onMouseEnter={handleBadgeHover}
                    onMouseLeave={handleBadgeLeave}
                  >
                    <img src={skill.logo} alt={skill.name} className="skill-logo-img" />
                    <span className="skill-name-text">{skill.name}</span>
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