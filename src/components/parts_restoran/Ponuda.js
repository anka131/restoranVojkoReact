import React from 'react'
import { Link } from 'react-router-dom';

const Ponuda = ({subtitle, dugme, link}) => {
  return (
    <div>
      <section className="ponuda">
      <h2>{subtitle}</h2>
      <button><Link to= {link}>{dugme}</Link></button>
    </section>
    </div>
  )
}

export default Ponuda