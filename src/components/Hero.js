
import React from 'react';

const Hero = ({ title, text, dugme}) => {
  return (
    <div className="hero">
           <div className="text-container">
           <h1>{title}</h1>
           <p>{text}</p>
           
           </div>

      </div>
  );
};

export default Hero;
