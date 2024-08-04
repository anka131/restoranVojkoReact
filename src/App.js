import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home'; 
import Restoran from './pages/Restoran';
import SuhaMarina from './pages/SuhaMarina';
import MaslinovoUlje from './pages/MaslinovoUlje';
import Blog from './pages/Blog';
import Kontakt from './pages/Kontakt';
import SingleBlog from './pages/SingleBlog'
import ScrollToTop from './ScrollToTop';



const App = () => {

  return (
    
     
    <>
    <ScrollToTop />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/restoran" element={<Restoran />} />
        <Route path="/suhamarina" element={<SuhaMarina />} />
        <Route path="/maslinovoulje" element={<MaslinovoUlje />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/singleblog" element={<SingleBlog />} />

      </Routes>
    </>
    
  );


};

export default App;
