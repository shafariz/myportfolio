import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import heroBg from '../../assets/hero-bg.webp'; // <-- Impor gambar background kamu di sini
import './Hero.css';

const Hero = () => {
  const { hero } = portfolioData;

  return (
    <section 
      className="hero-section" 
      id="home"
      style={{ backgroundImage: `url(${heroBg})` }} // <-- Memasang background gambar secara dinamis
    >
      {/* Overlay agar teks tetap kontras dan mudah dibaca */}
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero-content">
          
          {/* Kolom Kiri: Teks */}
          <div className="hero-text">
            <motion.div 
              className="greeting-box"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="hero-greeting">{hero.greeting}</span>
              <h1 className="hero-name sketch-highlight">{hero.name}</h1>
            </motion.div>

            <motion.h2 
              className="hero-role"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {hero.role1} <br />
              <span className="role-accent">{hero.role2}</span>
            </motion.h2>
          </div>

          {/* Kolom Kanan: Foto */}
          <div className="hero-image-box">
            <motion.div 
              className="hero-image-wrapper"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img src={hero.image} alt="Shafa" className="hero-img" />
              <div className="cute-badge">
                CREATIVE
              </div>
            </motion.div>
          </div>

        </div>
      </div>
      
      <div className="hero-blob"></div>
    </section>
  );
};

export default Hero;