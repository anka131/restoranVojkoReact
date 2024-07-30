import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import BlogPosts from '../components/blog-parts/BlogPosts'
import { generatePosts } from '../components/blog-parts/utils';

const posts = generatePosts(6);
const Blog = () => {
  return (
    <div>
        <Navbar imageSrc="\img\david-b-townsend-Tpb312jqxWM-unsplash_resized.jpg"/>
        <Hero title="Pratite naš blog i saznajte novosti Suhe Marine"/>
        <section className="blog blog-page">
        <h2>Pratite naš blog</h2>
        <BlogPosts posts={posts} />
        </section>
        <Footer />
    </div>
  )
}

export default Blog