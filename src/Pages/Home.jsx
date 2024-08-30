import React from 'react'
import WhyChoose from '../Components/WhyChoose';
import CoverPage from './CoverPage';
import Philosophy from '../Components/Philosophy';
import WhatWeDo from '../Components/WhatWeDo';
import About from '../Components/About';
import Navbar from '../Components/Navbar';

        
const Home = () => {
  return (
    <div>
      <Navbar  /> 
      <CoverPage />
      <Philosophy />
      <WhyChoose />
      <WhatWeDo />
      
      <About />
      {/* <Testing /> */}
      
    
    </div>
  )
}

export default Home
