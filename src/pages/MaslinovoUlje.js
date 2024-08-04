import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import OPG from '../components/masline-part/OPG'



const MaslinovoUlje = () => {
  return (
    <div>
      <Navbar imageSrc="/img/opg-vojko.jpg"/>
      <Hero title="OPG Vojko" text="Prodaja domaćeg maslinovog ulja"/>
      <Link to="/kontakt"><button className='link'>Pozovite nas </button></Link>
      <section className="olives container" data-aos="fade-up">
        <p>Dugogodišnja obiteljska tradicija proizvodnje maslinovog ulja. Masline se beru ručno a proces obrade se u cjelosti obavlja na otoku, hladnim prešanjem. Na taj način dobivamo ekstra djevičansko maslinovo ulje aromatičnog okusa i mirisa, a zadržavaju se sve nutritivne vrijednosti.</p>

      <OPG 
      img="img/maslinovo-ulje-vojko-rab.jpg" 
      img1="img/maslinovo-ulje-3.jpg" 
      img2="img/IMG_10061.jpg" 
      img3="img/maslinovo-ulje-1.jpg" 
      img4="img/IMG_09931.jpg" 
      img5="img/426323696_719018183678994_1026169068592327366_n1.jpg" 
      img6="img/maslinovo-ulje-2.jpg"
      />
      </section>
      
      <Footer />
    </div>
  )
}

export default MaslinovoUlje