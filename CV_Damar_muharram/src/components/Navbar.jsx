import React from 'react';
import './Navbar.css';

const Navbar = ({ scrollToSection, sections, activeIndex }) => {
  return (
    <nav className="navbar text-overlay Quattrocento">
      <ul>
        {sections.map((section, index) => (
          <li
            key={section}
            className={activeIndex === index ? 'active' : ''}
          >
            <a href="#" onClick={(e) => { 
              e.preventDefault(); 
              scrollToSection(section);
            }}>
              <span className="icon">
                {section === 'home' ? '🏠' : section === 'about' ? 'ℹ️' : section === 'background' ? '📜' : '🖼️'}
              </span>
              <span className="text">{section.charAt(0).toUpperCase() + section.slice(1)}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
