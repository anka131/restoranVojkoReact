import React from 'react'
import Navbar from '../components/Navbar'
import SingleBlogContent from '../components/blog-parts/SingleBlogContent'
import Footer from '../components/Footer'

const SingleBlog = () => {
  return (
    <div>
        <Navbar imageSrc="img/steven-weeks-7uhSBPRtQGw-unsplash_resized.jpg"/>
        <SingleBlogContent 
        subtitle="Fusce eget semper lacus. Sed ipsum purus, mollis non magna at, pellentesque pharetra augue."
        txt1="Fusce eget semper lacus. Sed ipsum purus, mollis non magna at, pellentesque pharetra augue. Quisque auctor urna elit, eu cursus massa ultricies vitae. Donec lorem diam, porttitor ac leo at, pretium faucibus metus"
        img="/img/steven-weeks-7uhSBPRtQGw-unsplash.jpg"
        txt2="Fusce eget semper lacus. Sed ipsum purus, mollis non magna at, pellentesque pharetra augue. Quisque auctor urna elit, eu cursus massa ultricies vitae. Donec lorem diam, porttitor ac leo at, pretium faucibus metus. Nunc sed metus nec quam tristique sodales vitae sit amet ante. Sed tempus sit amet urna sit amet tristique. Donec placerat nibh lacus, quis auctor libero mollis ut. Curabitur facilisis condimentum neque. Sed hendrerit ut justo sit amet commodo. Nunc eu enim nisi. Sed et bibendum leo, at accumsan risus."
        date="23.03.2024"
        txt3="Fusce eget semper lacus. Sed ipsum purus, mollis non magna at, pellentesque pharetra augue."

        />
        <Footer />
    </div>
  )
}

export default SingleBlog