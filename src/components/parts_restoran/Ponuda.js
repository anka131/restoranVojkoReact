import React from 'react'
import {  useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Ponuda = ({subtitle, dugme, link}) => {
  useEffect(()=>{
    AOS.init({duration: 1000})
  }, []);
  return (
    <div>
      <section className="ponuda" data-aos="fade-up">
      <h2>{subtitle}</h2>
      <a href= {link}><button>{dugme}</button></a>
    </section>
    </div>
  )
}

export default Ponuda