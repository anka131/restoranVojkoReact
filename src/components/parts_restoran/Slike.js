import React from 'react'

const Slike = ({img, img1, img2, img3, img4, img5}) => {
  return (
    <div>
           <section className="images">
      <div className="row ">
        <img className="col-md-4" src={img} alt="" />
        <img className="col-md-4"  src={img1} alt="" />
        <img className="col-md-4"  src={img2} alt="" />
  
        <img className="col-md-4"  src={img3} alt="" />
        <img className="col-md-4"  src={img4} alt="" />
        <img className="col-md-4"  src={img5} alt="" />
      </div>
    </section>
    </div>
  )
}

export default Slike