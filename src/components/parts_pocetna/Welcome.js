import React from 'react';
import {  useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Welcome = ({img1, img2, title, txt1, txt2, link1, link2}) => {
  useEffect(()=>{
    AOS.init({duration: 1000})
  }, []);
  return (
    <section className="welcome" data-aos="fade-up">
      <div className="row">
        <div className="slike col-md-8">
          <div className="slika1">
            <img src={img1} alt="" />
          </div>
          <div className="slika2">
            <img src={img2} alt="" />
          </div>
        </div>
        <div className="txt col-md-4">
          <h2>{title}</h2>
          <p>{txt1}</p>
          <p>{txt2}</p>
          <div className="dugmici">
            <div>
            <a href={link1}><button>Restoran</button></a>
            </div>
            <div>
              <a href={link2}><button>Suha Marina</button></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
