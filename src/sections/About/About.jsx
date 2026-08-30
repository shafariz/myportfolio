import React from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { portfolioData } from '../../data/portfolioData';
import './About.css';

const About = () => {
  const { about, hero } = portfolioData;

  const handleCardMouseEnter = (e) => {
    gsap.to(e.currentTarget, {
      y: -6,
      boxShadow: "0 20px 40px -10px rgba(147, 197, 253, 0.4), 0 12px 25px -8px rgba(2, 132, 199, 0.25)",
      duration: 0.35,
      ease: "power2.out"
    });
  };

  const handleCardMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      y: 0,
      boxShadow: "0 10px 30px -5px rgba(186, 230, 253, 0.3)",
      duration: 0.35,
      ease: "power2.out"
    });
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Title Header */}
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="about-title-heading">
            Turning <span className="title-gradient-accent serif-italic">Curiosity</span> <br />
            into <span className="title-gradient-accent serif-italic">Creation</span>
          </h2>
        </motion.div>

        {/* Content Layout Grid */}
        <div className="about-grid">

          {/* Left Column: Photo + Glass Card for Intro Text */}
          <motion.div
            className="about-bio-photo-wrapper"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="about-photo-card">
              <img src={hero.image} alt="Shafa Profile" className="about-profile-img" />
            </div>

            <div className="about-bio-card glass-card">
              <p className="about-bio-paragraph">
                {about.introText}
                <strong className="about-name-bold">{about.nameText}</strong>
                {about.descText}
              </p>
            </div>
          </motion.div>

          {/* Right Column: Education Glass Cards */}
          <div className="about-edu-col">

            <motion.h3
              className="edu-section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              My <span className="title-gradient-accent serif-italic">Education</span>
            </motion.h3>

            <div className="edu-cards-list">
              {about.education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  className="edu-glass-card glass-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.15) }}
                  onMouseEnter={handleCardMouseEnter}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <div className="edu-text-info">
                    <span className="edu-period-badge glass-pill">{edu.period}</span>
                    <h4 className="edu-major-title">{edu.major}</h4>
                    <p className="edu-school-name">{edu.institution}</p>
                  </div>

                  <div className="edu-logo-wrapper">
                    <img src={edu.logo} alt={`${edu.institution} Logo`} className="edu-logo-img" />
                  </div>
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