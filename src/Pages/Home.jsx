import React from 'react'
import WhyChoose from '../Components/WhyChoose';
import CoverPage from './CoverPage';
import Philosophy from '../Components/Philosophy';
import WhatWeDo from '../Components/WhatWeDo';
import About from '../Components/About';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

        
const Home = () => {
  return (
    <div>
      <Navbar  /> 
      <CoverPage />
      <Philosophy />
      <WhyChoose />
      <WhatWeDo />
      <About />
      <Footer/>
      {/* <Testing /> */}
      
    
    </div>
  )
}

export default Home
