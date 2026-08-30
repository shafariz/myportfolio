import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Fungsi GSAP saat mouse masuk (Hover In)
  const handleMouseEnter = (e) => {
    gsap.to(e.target, { 
      color: "var(--primary)", // Berubah ke warna utama Y2K kamu
      scale: 1.15,             // Membesar sedikit
      duration: 0.4, 
      ease: "back.out(2)"      // Efek membal (bouncy) yang imut
    });
  };

  // Fungsi GSAP saat mouse keluar (Hover Out)
  const handleMouseLeave = (e) => {
    gsap.to(e.target, { 
      color: "var(--on-surface)", // Kembali ke warna teks biasa
      scale: 1, 
      clearProps: "all",          // Membersihkan sisa style GSAP agar kembali ke CSS
      duration: 0.3, 
      ease: "power2.out" 
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Logo */}
        <a 
          href="#home" 
          className="navbar-logo"
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          Shafa.
        </a>

        {/* Menu Tengah (Desktop) */}
        <div className="navbar-links-desktop">
          <a href="#home" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Home</a>
          <a href="#about" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>About</a>
          <a href="#skills" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Skills</a>
          <a href="#experience" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Experience</a>
          <a href="#projects" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Projects</a>
        </div>

        {/* Tombol Contact Kanan (Desktop) */}
        <a href="#contact" className="navbar-contact-desktop">
          Contact Me
        </a>

        {/* Tombol Hamburger (Mobile) */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
          <span className="material-symbols-outlined">
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Menu Dropdown Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="navbar-mobile-menu"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" onClick={() => setIsOpen(false)}>About</a>
            <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
            <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
            <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#contact" className="mobile-contact-btn" onClick={() => setIsOpen(false)}>Contact Me</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;