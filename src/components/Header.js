import React from 'react'
import Navbar from './Navbar';

const Header = ({ imageSrc}) => {
  return (
    <div>


<header>
      <div className="banner-wrapper">
        <img className="banner" src={imageSrc} alt="" />
      </div>

      <Navbar />
      
      </header>
    </div>
  )
}

export default Header