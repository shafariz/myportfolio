import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import gsap from 'gsap';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Shrink desktop navbar ONLY when the hero section is completely out of view
      const heroElement = document.getElementById('home');
      if (heroElement) {
        const heroBottom = heroElement.getBoundingClientRect().bottom;
        setIsScrolled(heroBottom <= 90);
      } else {
        setIsScrolled(window.scrollY > window.innerHeight * 0.85);
      }

      // Active section detection (Including 'contact' section)
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPos = window.scrollY + 120;

      // Check if scrolled near the bottom of the page
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 80) {
        setActiveSection('contact');
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (e, targetId) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    setIsOpen(false);
    setActiveSection(targetId);

    const scrollToTarget = () => {
      const element = document.getElementById(targetId);
      if (element) {
        // Precise offset so section titles rest comfortably close below floating navbar without colliding
        const navbarOffset = targetId === 'home' ? 0 : (targetId === 'contact' ? 30 : -12);
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = Math.max(0, elementPosition - navbarOffset);

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    // Execute scroll immediately and also on next frame for mobile responsiveness
    scrollToTarget();
    setTimeout(scrollToTarget, 60);
  };

  // GSAP Link Hover In
  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, { 
      scale: 1.05,
      duration: 0.25, 
      ease: "power2.out"
    });
  };

  // GSAP Link Hover Out
  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, { 
      scale: 1, 
      duration: 0.25, 
      ease: "power2.out" 
    });
  };

  // GSAP Contact Button Hover
  const handleBtnMouseEnter = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.06,
      boxShadow: "0 8px 20px rgba(2, 132, 199, 0.45)",
      duration: 0.25,
      ease: "power2.out"
    });
  };

  const handleBtnMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      boxShadow: "0 4px 14px rgba(2, 132, 199, 0.35)",
      duration: 0.25,
      ease: "power2.out"
    });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' }
  ];

  return (
    <nav className="navbar-wrapper">
      <div className={`navbar-glass-pill ${isScrolled ? 'scrolled' : ''}`}>
        
        {/* Mobile Hamburger Button (On the LEFT for Mobile) */}
        <button 
          className="mobile-menu-btn" 
          onClick={toggleMenu} 
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined">
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <div className="navbar-links-desktop">
          {navItems.map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`} 
              onClick={(e) => handleNavClick(e, item.id)}
              className={`nav-link-item ${activeSection === item.id ? 'active' : ''}`}
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Contact Me Button (Desktop Right) */}
        <a 
          href="#contact" 
          onClick={(e) => handleNavClick(e, 'contact')}
          className={`navbar-contact-btn ${isScrolled ? 'scrolled' : ''} ${activeSection === 'contact' ? 'active-contact' : ''}`}
          onMouseEnter={handleBtnMouseEnter}
          onMouseLeave={handleBtnMouseLeave}
          title="Contact Me"
        >
          <FaPaperPlane className="contact-btn-icon" />
          <span className="contact-btn-text">Contact Me</span>
        </a>

        {/* Mobile Contact Icon Button (On the RIGHT for Mobile) */}
        <a 
          href="#contact" 
          onClick={(e) => handleNavClick(e, 'contact')}
          className={`mobile-contact-icon-btn ${activeSection === 'contact' ? 'active-contact' : ''}`}
          title="Contact Me"
        >
          <FaPaperPlane className="mobile-contact-icon" />
        </a>

      </div>

      {/* Mobile Glassmorphism Animated Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="navbar-mobile-menu glass-card"
            initial={{ opacity: 0, height: 0, scaleY: 0.85, transformOrigin: "top" }}
            animate={{ opacity: 1, height: "auto", scaleY: 1 }}
            exit={{ opacity: 0, height: 0, scaleY: 0.85 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              className="mobile-menu-inner"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
                closed: { transition: { staggerChildren: 0.04, staggerDirection: -1 } }
              }}
            >
              {navItems.map((item) => (
                <motion.a 
                  key={item.id}
                  href={`#${item.id}`} 
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: -12 }
                  }}
                >
                  {item.label}
                </motion.a>
              ))}
              
              <motion.a 
                href="#contact" 
                className="mobile-contact-btn" 
                onClick={(e) => handleNavClick(e, 'contact')}
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: -12 }
                }}
              >
                <FaPaperPlane style={{ marginRight: '8px' }} />
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;