import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Skills from './sections/Skills/Skills';
import Experience from './sections/Experience/Experience';
import Projects from './sections/Projects/Projects';
import Footer from './sections/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { FaPlane } from 'react-icons/fa';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="app-wrapper">
      {/* Animated Floating Airport & Sky Background */}
      <div className="cloud-background-container" aria-hidden="true">
        {/* Pure Sky Blue & Sun Gradient Overlay */}
        <div className="sky-gradient-overlay"></div>

        {/* Warm Yellow Sun Disc in Hero Sky */}
        <div className="hero-sun-container" aria-hidden="true">
          <div className="hero-sun-disc"></div>
          <div className="hero-sun-corona"></div>
        </div>

        {/* Animated Flying Airplanes */}
        <div className="airplane-flying-wrapper plane-1">
          <div className="airplane-trail"></div>
          <FaPlane className="flying-plane-icon" />
        </div>

        <div className="airplane-flying-wrapper plane-2">
          <FaPlane className="flying-plane-icon plane-reversed" />
          <div className="airplane-trail trail-reversed"></div>
        </div>

        <div className="airplane-flying-wrapper plane-3">
          <div className="airplane-trail"></div>
          <FaPlane className="flying-plane-icon plane-descent" />
        </div>

        {/* Animated Small Hot Air Balloons (In non-hero sections) */}
        <div className="hot-air-balloon balloon-1" aria-hidden="true">
          <svg className="balloon-svg" viewBox="0 0 100 140">
            <path d="M 50 10 C 20 10 10 35 10 60 C 10 80 35 95 42 110 L 58 110 C 65 95 90 80 90 60 C 90 35 80 10 50 10 Z" fill="rgba(2, 132, 199, 0.45)" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="2" />
            <path d="M 32 20 C 25 35 25 75 35 102" fill="none" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.5" />
            <path d="M 68 20 C 75 35 75 75 65 102" fill="none" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.5" />
            <rect x="44" y="118" width="12" height="10" rx="2" fill="rgba(30, 41, 59, 0.4)" />
            <line x1="42" y1="110" x2="44" y2="118" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="1.5" />
            <line x1="58" y1="110" x2="56" y2="118" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="hot-air-balloon balloon-2" aria-hidden="true">
          <svg className="balloon-svg" viewBox="0 0 100 140">
            <path d="M 50 10 C 20 10 10 35 10 60 C 10 80 35 95 42 110 L 58 110 C 65 95 90 80 90 60 C 90 35 80 10 50 10 Z" fill="rgba(56, 189, 248, 0.45)" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="2" />
            <path d="M 32 20 C 25 35 25 75 35 102" fill="none" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.5" />
            <path d="M 68 20 C 75 35 75 75 65 102" fill="none" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.5" />
            <rect x="44" y="118" width="12" height="10" rx="2" fill="rgba(30, 41, 59, 0.4)" />
            <line x1="42" y1="110" x2="44" y2="118" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="1.5" />
            <line x1="58" y1="110" x2="56" y2="118" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Dotted Flight Path Route Line down the document */}
        <div className="flight-route-container">
          <svg className="flight-route-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M 15 10 Q 85 30 20 50 T 80 85" fill="none" stroke="rgba(2, 132, 199, 0.2)" strokeWidth="0.35" strokeDasharray="1.5, 1.5" />
          </svg>
        </div>

        {/* Floating Clouds Distributed Everywhere Across Document */}
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
        <div className="cloud cloud-4"></div>
        <div className="cloud cloud-5"></div>
        <div className="cloud cloud-6"></div>
        <div className="cloud cloud-7"></div>
        <div className="cloud cloud-8"></div>
        <div className="cloud cloud-9"></div>
        <div className="cloud cloud-10"></div>
        <div className="cloud cloud-11"></div>
        <div className="cloud cloud-12"></div>

        {/* Mountain Ridge Silhouette (Mid-level Horizon above Airport) */}
        <div className="mountain-ridge-container">
          <svg className="mountain-ridge-svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path d="M 0 320 L 0 180 L 150 110 L 320 200 L 500 90 L 680 180 L 850 100 L 1050 190 L 1220 120 L 1440 210 L 1440 320 Z" fill="rgba(56, 189, 248, 0.08)" />
            <path d="M 0 320 L 0 220 L 200 150 L 380 230 L 580 140 L 760 210 L 920 130 L 1150 210 L 1320 150 L 1440 230 L 1440 320 Z" fill="rgba(14, 116, 144, 0.07)" />
          </svg>
        </div>

        {/* Airport Control Tower & Terminal Skyline Silhouette */}
        <div className="airport-skyline-container">
          <svg className="airport-skyline-svg" viewBox="0 0 1440 240" preserveAspectRatio="none">
            {/* Control Tower */}
            <path d="M 120 240 L 120 80 L 105 80 L 105 60 L 135 60 L 135 80 L 125 80 L 125 240 Z" fill="rgba(30, 41, 59, 0.12)" />
            <polygon points="100,60 140,60 130,45 110,45" fill="rgba(2, 132, 199, 0.25)" />
            <rect x="118" y="20" width="4" height="25" fill="rgba(2, 132, 199, 0.4)" />
            <circle cx="120" cy="18" r="3" fill="#0284C7" className="tower-beacon" />

            {/* Terminal Main Building & Hangar Curved Roofs */}
            <path d="M 0 240 L 0 160 Q 60 120 120 160 L 120 240 Z" fill="rgba(30, 41, 59, 0.08)" />
            <path d="M 180 240 L 180 140 Q 300 110 420 140 L 420 240 Z" fill="rgba(30, 41, 59, 0.09)" />
            <path d="M 400 240 L 400 170 Q 550 130 700 170 L 700 240 Z" fill="rgba(14, 116, 144, 0.09)" />
            <path d="M 750 240 L 750 150 Q 880 120 1010 150 L 1010 240 Z" fill="rgba(30, 41, 59, 0.1)" />
            <path d="M 1050 240 L 1050 135 Q 1200 95 1350 135 L 1350 240 Z" fill="rgba(2, 132, 199, 0.08)" />
            <path d="M 1300 240 L 1300 165 Q 1370 140 1440 165 L 1440 240 Z" fill="rgba(30, 41, 59, 0.07)" />
          </svg>
        </div>

        {/* Airport Runway Base Strip */}
        <div className="airport-runway-strip">
          <div className="runway-centerline"></div>
          <div className="runway-lights-row">
            <span className="runway-light light-cyan"></span>
            <span className="runway-light light-gold"></span>
            <span className="runway-light light-cyan"></span>
            <span className="runway-light light-gold"></span>
            <span className="runway-light light-cyan"></span>
            <span className="runway-light light-gold"></span>
            <span className="runway-light light-cyan"></span>
            <span className="runway-light light-gold"></span>
          </div>
        </div>

      </div>

      {/* Foreground Content */}
      <div className="main-content">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;