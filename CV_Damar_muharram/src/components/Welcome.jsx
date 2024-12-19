// src/components/TypeAnimation.jsx
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypeAnimation = () => {
  return (
    <span className="text-accent color2">
      <Typewriter
        words={['Developer', 'Programmer', 'Problem Solver']}
        loop={Infinity}
        cursor
        cursorStyle="|"
        typeSpeed={40}
        deleteSpeed={40}
        delaySpeed={2000}
      />
    </span>
  );
};

export default TypeAnimation;
