import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import About from '../components/parts_restoran/About'
import Slike from '../components/parts_restoran/Slike'
import Ponuda from '../components/parts_restoran/Ponuda'

const Restoran = () => {
  return (
    <div>
    <Navbar imageSrc="/img/restoran-hero.png"/>
    <Hero  title="Restoran 'Vojko'" text="Dobro došli na stranice našeg obiteljskog restorana koji uspješno posluje više od dvadeset godina." />
    <About 
    title="Restoran 'Vojko'" 

    text="Dobro došli na stranice našeg obiteljskog restorana koji uspješno posluje više od dvadeset godina. Otvoreni smo od uskrsa do 11 mjeseca. Restoran se nalazi u sklopu ACI marine u Supetarskoj Drazi." 
    text1="Kapacitet restorana iznosi oko 180 mjesta, natkriveno oko 120. Dođite i uvjerite se u kvalitetu i raznolikost naše gastronomske ponude. Kod nas možete uživati u domaćoj hrvatskoj kuhinji, mediteranskoj kuhinji , isprobati razna internacionalna jela, vegetarijanska te dijetalna jela.Naš restoran je A LA CARTE ali nudimo i gotova jela."

    imageSrc="/img/restoran-1.png"

    text2="Dođite kod nas na doručak, ručak ili večeru. Sigurni smo da se nećete razočarati jer ćete u našoj ponudi zasigurno naći ono što želite."
    text3="Nudimo vam sve vrste mesa i ribe ,voća i povrća te slastica. Organiziramo i prihvat grupa gostiju po vrlo popularnim cijenama. Restoran posjeduje vlastita parkirna mjesta . A u naš restoran možete doći brodom, autom ili autobusom. Plaćati možete gotovinom ili karticom."
    text4="Kod nas možete organizirati svadbe, rođendanske proslave, godišnjice i slično sa muzikom ili bez, po vašoj želji."

    imageSrc1="/img/restoran3.png"
    imageSrc2="/img/restoran2.png"
    />
    <Slike img="/img/restoran-1.png" img1="img/restoran2.png" img2="img/opg-vojko.jpg" img3="img/maslinovo-ulje-1.jpg" img4="img/home-section1.png"  img5="img/IMG_09931.jpg" />
    <Ponuda  subtitle="Pogledajte ponudu Suhe Marine" dugme="Suha marina" link="/suhaMarina"/>
    <Footer />
           
    </div>
  )
}

export default Restoran