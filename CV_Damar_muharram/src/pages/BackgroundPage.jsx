import React, { useEffect } from 'react';
import background from '../assets/images/background/Clip_path_group.svg';
import background2 from '../assets/images/background/Clip_path_group_copy.svg';
import './BackgroundPage.css'; 

const BackgroundPage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const overlays2 = document.querySelectorAll('.text-overlay2');
      const viewportHeight = window.innerHeight;

      overlays2.forEach(overlay2 => {
        const rect = overlay2.getBoundingClientRect();
        if (rect.top < viewportHeight && rect.bottom > 0) {
          overlay2.classList.add('scroll-active');
        } else {
          overlay2.classList.remove('scroll-active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="background-container all">

      <div className="sub-section">
        <div className="title x text-overlay k Quattrocento">My Background</div>
      </div>
      <div className="background-section flex-row sec-desc text-overlay">
        <img src={background2} alt="Background Image 2" className="image-style mt-4 s2" />
        <div className="sub-section desc">
                <div className="background-section flex-row s text-overlay2">
        <img src={background} alt="Background Image 1" className="image-style mt-4 s" />
      </div>
          <div className="sub-t Quattrocento">Education</div>
          <ul className="mini-t Montserrat">
            <li>SMAN 14 Tangerang</li>
            <li>Informatics Undergraduate at Telkom University (Expected Graduation: 2027)</li>
          </ul>
        </div>
      </div>
      <div className="background-section flex-row sec-desc text-overlay">
        <div className="sub-section">
          <div className="sub-t Quattrocento">Experience</div>
          <ul className="mini-t Montserrat">
            <li>Participated in CCI The Hack Event as a front-end assist and back-end assist, contributing to the development of web projects using React and JavaScript XML for the user interface and Golang with the Fiber framework to manage the API</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BackgroundPage;
