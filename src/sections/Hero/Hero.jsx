import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi';
import { portfolioData } from '../../data/portfolioData';
import './Hero.css';

const Hero = () => {
  const { hero } = portfolioData;

  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        
        <motion.div 
          className="hero-floating-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="hero-centered-content">
            
            <motion.div 
              className="hero-greeting-pill glass-pill"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="hero-pill-dot"></span>
              <span>{hero.badge}</span>
            </motion.div>

            <motion.h1 
              className="hero-name-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Hello, I'm <span className="serif-italic hero-name-accent">{hero.name}</span>
            </motion.h1>

            <motion.h2 
              className="hero-role-subheading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="serif-italic hero-role-accent">Aspiring</span> Web Developer &amp; Data Analyst
            </motion.h2>

            <motion.div 
              className="hero-action-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a href="#projects" className="hero-btn-primary">
                <span>My Projects</span>
                <FiArrowDownRight className="btn-icon" />
              </a>

              <a 
                href={hero.cvUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hero-btn-secondary"
              >
                <span>View My CV</span>
                <FiArrowUpRight className="btn-icon" />
              </a>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;