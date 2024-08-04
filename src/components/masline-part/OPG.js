import React from 'react'
import {  useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

const OPG = ({img, img1, img2, img3, img4, img5, img6}) => {
  useEffect(()=>{
    AOS.init({duration: 1000})
  }, []);

  return (
    <div>
         
            <div className="container" data-aos="fade-up">
              <div>
                <img  src={img} alt="" />
                <img  src={img1} alt="" />
              </div>
              <div>
                <img  src={img2} alt="" />
                <img  src={img3} alt="" />
                <img   src={img4} alt="" />
              </div>
              <div>
               <img src={img5} alt="" />
                <img src={img6} alt="" />
              </div>

            </div>
    </div>
  )
}

export default OPG