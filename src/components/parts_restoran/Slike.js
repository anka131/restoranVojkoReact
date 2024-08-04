import React from 'react'
import {  useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Slike = ({img, img1, img2, img3, img4, img5}) => {
  useEffect(()=>{
    AOS.init({duration: 1000})
  }, []);
  return (
    <div>
           <section className="images container" data-aos="fade-up">
      <div className="row ">
        <img className="col-md-4" src={img} alt="" />
        <img className="col-md-4"  src={img1} alt="" />
        <img className="col-md-4"  src={img2} alt="" />
  
        <img className="col-md-4"  src={img3} alt="" />
        <img className="col-md-4"  src={img4} alt="" />
        <img className="col-md-4"  src={img5} alt="" />
      </div>
    </section>
    </div>
  )
}

export default Slike