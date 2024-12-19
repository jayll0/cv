import React from 'react';
import Welcome2 from '../components/Welcome2.jsx';

import about2 from '../assets/images/about/Vector.png';
import './AboutPage.css'; 

const AboutPage = () => {
  return (
    <div id="about-section" className="container mx-auto p-4 text-overlay">
      <div className="About-container ">
        <div className="About-text">
        <h2 className="text-2xl font-bold mb-4  z Quattrocento"><Welcome2 /></h2>
          <p className="text-lg x Montserrat">
          Saya mempunyai  beberapa keahlian bahasa pemograman, Saya mempunyai softskill pada  Kerjasama Tim, Pemecahan 
Masalah, dan Kemampuan Adaptasi. Tertarik di bidang full stack, mengikuti perkembangan teknologi, dan mengikuti 
courses tentang programming </p>
          <img src={about2} alt="About Image" className="downimage" />
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
