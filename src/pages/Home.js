
import Header from '../components/Header';
import Hero from '../components/Hero';
import Welcome from '../components/parts_pocetna/Welcome';
import BlogPosts from '../components/blog-parts/BlogPosts';
import { generatePosts } from '../components/blog-parts/utils';
import Footer from '../components/Footer';
import {  useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

const posts = generatePosts(3);

const Home = () => {
  useEffect(()=>{
    AOS.init({duration: 1000})
  }, []);

  return (
    <div>
      <Header imageSrc="img/home-hero1.jpg" />
      <Hero title="Suha Marina 'Vojko'" text="Dobrodošli na stranice našeg obiteljskog restorana u sklopu ACI marine u Supetarskoj Drazi te Suhe marine u Mundanijama, gdje spoj vrhunske gastronomije i sigurne luke stvaraju nezaboravno iskustvo uz more."/>
      <Welcome 
       
       img1="img/home-section2.png"
       img2="img/home-section1.png"
       title="Dobro Došli"
       txt1="Dobrodošli na stranicu našeg obiteljskog restorana s više od dvadeset godina uspješnog poslovanja, smještenog unutar ACI marine u Supetarskoj Drazi. Uživajte u raznovrsnoj gastronomskoj ponudi, obuhvaćajući domaću hrvatsku kuhinju, mediteransku, internacionalna jela te vegetarijanske i dijetalne specijalitete. Naš A LA CARTE restoran također nudi gotova jela. Posjetite nas za doručak, ručak ili večeru te iskoristite mogućnost organizacije različitih događaja."
       txt2="S druge strane, Suha marina, smještena uz glavnu prometnicu u Mundanijama, udaljena je oko 1 km od centra grada Raba. Ova sigurna luka nudi smještaj za oko 100 plovila različitih veličina i modela. Pružamo dodatne sadržaje poput natkrivenog prostora za odmor, sanitarnih čvorova s tuš kabinama te parkirnih mjesta.
       S nama možete uživati u klimatiziranim ili grijanim sobama u kući, a svi sadržaji su vam dostupni tijekom boravka."
       link1="/restoran"
       link2="/suhaMarina"
       />
           <section className="blog blog-poc container" data-aos="fade-up">
           <h2>Pratite naš blog</h2>
      <BlogPosts posts={posts} />
      <div>
      <a href="/blog"><button className="sec">Svi postovi</button></a>
      </div>    
        </section>
      <Footer />
    </div>
  );
}

export default Home;
