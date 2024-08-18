import React from 'react'
import Navbar from '../components/Navbar'


const Kontakt = () => {
  return (
    <div>
        
        <footer className='fotpage'>
            <Navbar />
      <h2>Kontakt</h2>
      <div className="container row"> 
        <div className="text col-md-4">
          <img src="img/vojko-white.png" alt="" />
          <p>Vojko Krišković</p>
          <p>Tel. Privatni: 00385 51 776 700</p>
          <p>Tel. Restoran: 00385 51 776 805</p>
          <p>Mob.: +385 91 6776 700</p>
          <p>E-mail: vojko.rab@gmail.com</p>
          <p>Supetarska Draga 454 - Otok Rab</p>
        </div>

        <div className="forma col-md-4">
          <form>
            <label className="form-label">Ime i prezime</label>
            <input type="name" className="form-control" />
            <label  className="form-label">Email</label>
              <input type="email" className="form-control"  aria-describedby="emailHelp"/>
              <label className="form-label">Poruka</label>
              <textarea className="form-control"  rows="5"></textarea>
              
            
            </form>
            <a href='/' className="btn btn-danger">Posaljite</a>
      </div>
     
      </div>
    </footer>
    </div>
  )
}

export default Kontakt