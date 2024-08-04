import React from 'react'
import { Link } from 'react-router-dom'
import {  useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

const SingleBlogContent = ({subtitle, img, txt1, txt2, date,txt3}) => {
  useEffect(()=>{
    AOS.init({duration: 1000})
  }, []);
  return (
    <div className="blogpost" data-aos="fade-up">
         <button className="blog-button">
         <Link to="/blog">
        <span className="left-arrows"><ion-icon name="chevron-back-outline"></ion-icon>
         <span className='txt'>Blog</span>
        </span> 
        </Link>
    </button>
      <section className="post container">
        <div className="row">
          <div className="content col-md-8">
            <h4>{subtitle}</h4>
            <p>{txt1}</p>
            <img src={img} alt="" />
            <p>{txt2}</p>
          </div>
  
          <div className="blog col-md-4">
            <h4>RECENT POSTS</h4>
            <div>
              <article>
                <p>{date}</p>
                <p>{txt3}</p>
                <hr />
              </article>
                <article>
                  <p>{date}</p>
                  <p>{txt3}</p>
                  <hr />
                </article>
            </div>
          </div>
        </div>


      </section>
      
    <div className="buttons">
      <button className="back-button">
        <span className="arrows"><ion-icon name="chevron-back-outline"></ion-icon> <ion-icon name="chevron-back-outline"></ion-icon></span>Prev
    </button>
      <button className="next-button">
        Next <span className="arrows"><ion-icon name="chevron-forward-outline"></ion-icon> <ion-icon name="chevron-forward-outline"></ion-icon></span>

    </button>
    </div>         

    </div>
  )
}

export default SingleBlogContent