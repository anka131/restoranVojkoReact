import React from 'react'
import { Link } from "react-router-dom";

const Navbar = ({ imageSrc}) => {
  return (
    <div>

<header>
      <div className="banner-wrapper">
        <img className="banner" src={imageSrc} alt="" />
      </div>

        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <img src="img/vojko-white.png" alt="" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse  flex-row-reverse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className=" nav-link text-light" to="/">Početna</Link>
                </li>
                <li className="nav-item">
                  <Link className=" nav-link text-light" aria-current="page"  to="/restoran">Restoran</Link>
                </li>
                <li className="nav-item">
                <Link className=" nav-link text-light" aria-current="page"  to="/suhamarina">Suha Marina</Link>
                </li>
                <li className="nav-item">
                <Link className=" nav-link text-light" aria-current="page"  to="/maslinovoulje">Maslinovo ulje</Link>
                </li>
                <li className="nav-item">
                <Link className=" nav-link text-light" aria-current="page"  to="/blog">Blog</Link>
                </li>
                <li className="nav-item">
                <Link className=" nav-link text-light" aria-current="page"  to="/kontakt">Kontakt</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      
      </header>
    </div>
  )
}

export default Navbar