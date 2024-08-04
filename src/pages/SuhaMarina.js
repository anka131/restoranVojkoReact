import React from 'react'
import {  useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import About from '../components/parts_restoran/About'
import Slike from '../components/parts_restoran/Slike'
import Ponuda from '../components/parts_restoran/Ponuda'
import Usluge from '../components/marina-part/Usluge'


const SuhaMarina = () => {
  return (
    <div>
        <Navbar imageSrc="/img/marina-hero.png"/>
        <Hero 
        title="Suha Marina 'Vojko'" 
        text=" Suha marina, udaljena samo 1 km od centra Mundanija, pruža savršen
                spoj pristupačnosti i sigurnosti za plovila"
        />
        <About 
        data-aos="fade-up"
        title = "Suha Marina"
        text="Suha marina nalazi se uz glavnu prometnicu koja spaja grad Rab sa Loparom u mjestu Mundanije, udaljena oko 1 km od samog centra. Prilaz odnosno ulaz prilagođen je najdužim, najširim te najvišim plovilima kojima je dozvoljen transport javnom prometnicom."
        text1="Smještena je uz obiteljsku kuću, ograđena sa svih strana, osvijetljena i čuvana/ kontrolirana čitavo vrijeme. Mogućnost smještaja je oko 100 plovila svih veličina i modela u vanjskom prostoru a postoji i opcija smještaja u garaži, koja je predviđena za manje čamce. Osiguravamo i prihvat kamp-kućica, prikolica, motora."
        imageSrc="/img/marina1.png"
        text2="Marina ima vanjsku rasvjetu, priključke za vodu sa produžnim crijevima, prključke za sve modele elektro –utičnica, osigurano je i povremeno korištenje produžnih elektro kablova, te korištenje ljestvi i manjih dizalica."
        text3="Kompletna površina je veoma kvalitetno tamponirana sitnim kamenom tako da se voda ne zadržava ni po najjačoj kiši. Pored osnovnog sadržaja marina ima i natkriveni prostor za odmor ili druženja, sanitarni čvor sa tuš kabinama, parkirna mjesta za korisnike te mogućnost noćenja uz korištenje svih sadržaja. Dozvoljen je i samostalan rad vlasnika na svojim plovilima kao i odabir majstora. Posjedujemo i traktor iznimne snage prilagođen transportu svih tipova prikolica do dizalice u luci i natrag ako vlasnici nemaju svoj prijevoz. Pružamo i mogućnost boravka u klimatiziranim odnosno grijanim sobama u kući."
        imageSrc1="/img/marina2.png"
        imageSrc2="/img/marina3.png"
        />
        <Usluge />
        <Slike img="/img/home-section1.png" img1="/img/usluga5.png" img2="/img/marina2.png" img3="/img/usluga5.png" img4="/img/usluga2.png" img5="/img/usluga3.png" />
        <Ponuda subtitle="Pogledajte ponudu restorana 'Vojko'" dugme="Restoran" link="/restoran"/>
        <Footer />



    </div>
  )
}

export default SuhaMarina