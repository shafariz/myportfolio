import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import Marquee from './components/Marquee/Marquee';
import About from './sections/About/About';
import Skills from './sections/Skills/Skills';
import Experience from './sections/Experience/Experience';
import Projects from './sections/Projects/Projects';
import Footer from './sections/Footer/Footer'; // <- Diubah ke folder sections
import './index.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;