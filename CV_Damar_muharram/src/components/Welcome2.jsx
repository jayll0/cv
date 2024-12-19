// src/components/Welcome.jsx
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './Welcome.css'; // Pastikan CSS yang diperlukan ada di sini

const Welcome = () => {
  const typedRef = useRef(null);
    
  useEffect(() => {
    // Initialize Typed.js with a delay of 3 seconds
    const timer = setTimeout(() => {
      new Typed(typedRef.current, {
        strings: ["Who is Arya?"],
        typeSpeed: 150,


      });
    },); // Delay of 3 seconds

    // Cleanup
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="welcome-container">
      <div className="">
        <span ref={typedRef} > </span>
      </div>
    </div>
  );
};

export default Welcome;
