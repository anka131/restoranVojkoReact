import React from 'react';
import {  useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Services = () => {
  useEffect(()=>{
    AOS.init({duration: 1000})
  }, []);

  const services = [
    {
      imgSrc: '/img/marina3.png',
      title: 'Transport plovila',
      text: 'Vršimo transport plovila vlastitom vozilom'
    },
    {
      imgSrc: '/img/usluga2.png',
      title: 'Mjesto za odmor',
      text: 'Sjenica'
    },
    {
      imgSrc: 'img/usluga6.png',
      title: 'Priključci za struju',
      text: 'Marina ima priključke za vodu i struju.'
    },
    {
      imgSrc: 'img/usluga3.png',
      title: 'Priključci za vodu',
      text: 'Marina ima priključke za vodu i struju.'
    },
    {
      imgSrc: 'img/usluga6.png',
      title: 'WC i kupaonica',
      text: 'Muški i ženski wc.'
    },
    {
      imgSrc: 'img/usluga5.png',
      title: 'Garaža za plovila',
      text: 'Nudimo i prostranu garažu za vaša plovila.'
    }
  ];

  return (
    <section className='usluge container' data-aos="fade-up">
      <h2>Usluge</h2>
          <article className="row">
      {services.map((service, index) => (
        <div className="card col-md-3" key={index}>
          <img src={service.imgSrc} className="card-img-top" alt={service.title} />
          <div className="card-body">
            <h5>{service.title}</h5>
            <p className="card-text">{service.text}</p>
          </div>
        </div>
      ))}
    </article>
    </section>

  );
};

export default Services;
