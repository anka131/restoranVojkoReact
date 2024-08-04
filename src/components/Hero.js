
import React from 'react';
import {  useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Hero = ({ title, text, dugme}) => {
  useEffect(()=>{
    AOS.init({duration: 1000})
  }, []);
  return (
    <div className="hero" data-aos="fade-in">
           <div className="text-container">
           <h1>{title}</h1>
           <p>{text}</p>
           
           </div>

      </div>
  );
};

export default Hero;
