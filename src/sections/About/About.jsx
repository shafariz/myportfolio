import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import './About.css';

const About = () => {
  const { about } = portfolioData;

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        <div className="about-content">
          
          {/* Kolom Kiri: Teks About */}
          <motion.div 
            className="about-text-area"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="about-title">
              {about.titleLine1} <span className="italic-accent">{about.titleHighlight}</span> <br/>
              {about.titleLine2}
            </h2>
            
            <p className="about-description">
              {about.introText}
              <strong className="about-name-bold">{about.nameText}</strong>
              {about.descText}
            </p>
            
            <div className="about-decoration-badge">
              ALWAYS LEARNING
            </div>
          </motion.div>

          {/* Kolom Kanan: Kartu Pendidikan */}
          <div className="about-edu-area">
            
            <motion.h3 
              className="edu-section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              EDUCATION
            </motion.h3>

            <div className="edu-cards-wrapper">
              {about.education.map((edu, index) => (
                <motion.div 
                  key={edu.id}
                  className="edu-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.2) }}
                >
                  {/* Bagian Teks di Kiri */}
                  <div className="edu-text-content">
                    <div className="edu-year-badge">{edu.period}</div>
                    <h4 className="edu-major">{edu.major}</h4>
                    <p className="edu-school">{edu.institution}</p>
                  </div>
                  
                  {/* Bagian Logo di Kanan */}
                  <img src={edu.logo} alt={`${edu.institution} Logo`} className="edu-logo" />
                </motion.div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;