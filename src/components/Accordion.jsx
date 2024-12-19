import React, { useState } from 'react';
import '../pages/HomePage.css';
const Accordion = ({ title, content, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <div className="border-b border-gray-200">
   
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="py-2 px-4">
            
          {content}
          
        </div>
      </div>
    </div>
  );
};

export default Accordion;
