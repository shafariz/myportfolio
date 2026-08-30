import React, { useState } from 'react';
import { FaLinkedinIn, FaInstagram, FaEnvelope, FaGithub, FaPaperPlane } from 'react-icons/fa';
import gsap from 'gsap';
import { portfolioData } from '../../data/portfolioData';
import './Footer.css';

const Footer = () => {
  const { contact } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`Portfolio Message from ${formData.name || 'Visitor'}`);
    const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  const handleIconMouseEnter = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.2,
      y: -4,
      boxShadow: "0 8px 20px rgba(2, 132, 199, 0.35)",
      duration: 0.3,
      ease: "back.out(2)"
    });
  };

  const handleIconMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      y: 0,
      boxShadow: "0 4px 12px rgba(186, 230, 253, 0.2)",
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <footer className="footer-section" id="contact">
      <div className="footer-container">

        <div className="footer-glass-card glass-card">

          <div className="footer-content-grid">
            {/* Left Column: Big Heading & Social Icons */}
            <div className="footer-col-brand">
              <h2 className="footer-big-heading">
                Let's create something <span className="title-gradient-accent serif-italic">Meaningful</span>
              </h2>

              <div className="footer-socials-row">
                <a
                  href={`mailto:${contact.email}`}
                  className="footer-social-icon-btn glass-pill"
                  aria-label="Email"
                  title={`Email: ${contact.email}`}
                  onMouseEnter={handleIconMouseEnter}
                  onMouseLeave={handleIconMouseLeave}
                >
                  <FaEnvelope />
                </a>

                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon-btn glass-pill"
                  aria-label="Instagram"
                  title="Instagram"
                  onMouseEnter={handleIconMouseEnter}
                  onMouseLeave={handleIconMouseLeave}
                >
                  <FaInstagram />
                </a>

                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon-btn glass-pill"
                  aria-label="GitHub"
                  title="GitHub"
                  onMouseEnter={handleIconMouseEnter}
                  onMouseLeave={handleIconMouseLeave}
                >
                  <FaGithub />
                </a>

                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon-btn glass-pill"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  onMouseEnter={handleIconMouseEnter}
                  onMouseLeave={handleIconMouseLeave}
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            {/* Right Column: Quick Message Email Form */}
            <div className="footer-col-form">
              <form onSubmit={handleSubmit} className="footer-quick-form">
                <div className="footer-form-group">
                  <label className="footer-form-label">YOUR NAME</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Huang Renjun"
                    className="footer-form-input"
                    required
                  />
                </div>

                <div className="footer-form-group">
                  <label className="footer-form-label">YOUR EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="renjun@gmail.com"
                    className="footer-form-input"
                    required
                  />
                </div>

                <div className="footer-form-group">
                  <label className="footer-form-label">YOUR MESSAGE</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    className="footer-form-textarea"
                    rows="3"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="footer-form-submit-btn">
                  <span>Send Message</span>
                  <FaPaperPlane className="btn-send-icon" />
                </button>
              </form>
            </div>
          </div>

          {/* Divider Line */}
          <div className="footer-divider-line"></div>

          {/* Bottom Copyright */}
          <div className="footer-bottom-bar">
            <p>© 2026 Shafa Rizqi Nur Wahidah.</p>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;