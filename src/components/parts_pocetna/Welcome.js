import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = ({img1, img2, title, txt1, txt2, dugme1, dugme2}) => {
  return (
    <section className="welcome">
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
              <button><Link to="/restoran">{dugme1}</Link></button>
            </div>
            <div>
              <button><Link to="/suhaMarina">{dugme2}</Link></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
