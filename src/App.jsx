import React, { useRef, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import BackgroundPage from './pages/BackgroundPage';
import AboutPage from './pages/AboutPage';

const App = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const homeRef = useRef(null);
  const galleryRef = useRef(null);
  const backgroundRef = useRef(null);
  const aboutRef = useRef(null);

  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    background: backgroundRef,
    gallery: galleryRef
  };

  const scrollToSection = (section) => {
    sectionRefs[section]?.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Object.keys(sectionRefs).indexOf(entry.target.id);
          setActiveIndex(index);
        }
      });
    }, { threshold: 0.5 });

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <div>
      <Navbar scrollToSection={scrollToSection} sections={Object.keys(sectionRefs)} activeIndex={activeIndex} />
      <div ref={homeRef} id="home" className="section">
        <HomePage scrollToSection={scrollToSection} />
      </div>
      <div ref={aboutRef} id="about" className="section">
        <AboutPage />
      </div>
      <div ref={backgroundRef} id="background" className="section">
        <BackgroundPage />
      </div>
      <div ref={galleryRef} id="gallery" className="section">
        <GalleryPage />
      </div>
    </div>
  );
};

export default App;
