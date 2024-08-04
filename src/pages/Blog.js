import React from 'react'
import {  useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import BlogPosts from '../components/blog-parts/BlogPosts'
import { generatePosts } from '../components/blog-parts/utils';

const posts = generatePosts(6);

const Blog = () => {
  useEffect(()=>{
    AOS.init({duration: 2000})
  }, []);
  
  return (
    <div>
        <Navbar imageSrc="\img\david-b-townsend-Tpb312jqxWM-unsplash_resized.jpg"/>
        <Hero title="Pratite naš blog i saznajte novosti Suhe Marine"/>
        <section className="blog blog-page container" data-aos="fade-up">
        <h2>Pratite naš blog</h2>
        <BlogPosts posts={posts} />
        </section>
        <Footer />
    </div>
  )
}

export default Blog