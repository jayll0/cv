// src/components/Flower.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Flower = () => {
  return (
    <motion.svg
      className="flower"
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <motion.circle
        cx="100"
        cy="100"
        r="90"
        stroke="#ff6347"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ strokeDasharray: "10 90" }}
        animate={{ strokeDasharray: ["50 150", "90 10"] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </motion.svg>
  );
};

export default Flower;
