import React from 'react';
import './Marquee.css';

const Marquee = () => {
  const topText = "FRONT-END DEVELOPER • DATA ANALYTICS ENTHUSIAST • REACT.JS & VITE • ";
  const bottomText = "SOFT Y2K AESTHETIC • RESPONSIVE DESIGN • INTERACTIVE UI • PROBLEM SOLVER • ";

  return (
    <div className="marquee-wrapper">
      {/* Baris Atas (Sekarang Biru dan Berjalan ke Kiri) */}
      <div className="marquee-container top-marquee">
        <div className="marquee-content animate-left">
          <span>{topText}</span>
          <span>{topText}</span>
          <span>{topText}</span>
          <span>{topText}</span>
        </div>
      </div>

      {/* Baris Bawah (Sekarang Pink dan Berjalan ke Kanan) */}
      <div className="marquee-container bottom-marquee">
        <div className="marquee-content animate-right">
          <span>{bottomText}</span>
          <span>{bottomText}</span>
          <span>{bottomText}</span>
          <span>{bottomText}</span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;