import React from 'react'

const About = ({imageSrc, imageSrc1,imageSrc2, title, text,text1, text2, text3, text4}) => {
  return (
    <div>
         <section className="about">
      <article className=" row">
        
        <div className="text col-md-6">
          <h2>{title}</h2>
          <p>{text}</p>
          <p>{text1}</p>
        </div>
        <div className="slika col-md-6 ms-5">
          <img src={imageSrc} alt="" />
        </div>
      </article>
      <article className="row">
        <div className="text col-md-6">
          <p>{text2}</p>
          <p>{text3}</p>
          <p>{text4}</p>
        </div>
        <div className="slike col-md-6">
          <img src={imageSrc1} alt="" />
          <img src={imageSrc2} alt="" />
        </div>
      </article>
    </section>
    </div>
  )
}

export default About