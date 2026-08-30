import React from 'react';
import { FaLinkedinIn, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';
import './Footer.css';

const Footer = () => {
  const { contact } = portfolioData;

  return (
    <footer className="footer-section" id="contact">
      <div className="footer-container">
        
        <div className="footer-content">
          {/* Kolom Kiri: Branding & Deskripsi Singkat */}
          <div className="footer-col-brand">
            <h2 className="footer-logo">SHAFA.</h2>
            <p className="footer-desc">
              Turning ideas into creative digital solutions with passion & logic.
            </p>
          </div>

          {/* Kolom Tengah: Navigasi */}
          <div className="footer-col-nav">
            <h4 className="footer-heading">Navigation</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </div>

          {/* Kolom Kanan: Kontak & Sosmed */}
          <div className="footer-col-contact">
            <h4 className="footer-heading">Get in Touch</h4>
            <a href={`mailto:${contact.email}`} className="footer-email-link">
              <FaEnvelope /> {contact.email}
            </a>
            
            <div className="footer-socials">
              <a 
                href={contact.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a 
                href={contact.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-icon"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Garis Pembatas & Copyright */}
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <p>© 2026 Shafa Rizqi Nur Wahidah. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;