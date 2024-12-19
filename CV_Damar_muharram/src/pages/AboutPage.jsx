import React from 'react';
import Welcome2 from '../components/Welcome2.jsx';
import './AboutPage.css'; 

const AboutPage = () => {
  return (
    <div id="about-section" className="container mx-auto p-4 text-overlay">
      <div className="About-container ">
        <div className="About-text">
        <h2 className="text-2xl font-bold mb-4  z Quattrocento"><Welcome2 /></h2>
          <p className="text-lg x Montserrat">
            I'm Arya Wijaya, an Informatics student at Telkom University with a passion for solving web development challenges.  
          
            Currently, I'm diving into both front-end and back-end development, with hands-on experience from projects like CCI The Hack Event.  
          
            I'm excited to be at the start of my career in software development, constantly seeking new opportunities to grow and contribute to innovative projects.
          </p>
          <img src={about2} alt="About Image" className="downimage" />
        </div>
        <img src={about} alt="About Image" className="Rightimage" />
      </div>
    </div>
  );
};

export default AboutPage;
