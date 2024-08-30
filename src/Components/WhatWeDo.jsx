import React, { useState, useEffect } from 'react';

const WhatWeDo = () => {
  const [scrollIndex, setScrollIndex] = useState(0);  

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const index = Math.min(Math.floor(scrollY / window.innerHeight), 2); // Adjust the divisor for more precise control
    setScrollIndex(index);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='w-screen h-[400vh] sm:h-[400vh] flex sm:flex-row flex-col text-blue bg-white relative pb-44'>
        <div className='sm:w-1/2 w-full sm:flex sm:items-center flex-col gap-5'>
          <div className='sticky top-0 sm:top-56 sm:ml-40 sm:pb-40 mt-56 sm:w-full w-11/12 ml-4'>
            <div className='flex flex-col w-1/2 text-xl'>
              <p className='text-2xl '>What do we</p>
              <p className='text-4xl font-semibold mb-3 '>help with?</p> 
            </div>
            <p className='sm:w-1/2 sm:11/12 text-black text-lg text-justify'>
              Over 180 million Indians, or 14 per cent of the population, live with mental health issues. Many more suffer silently. Some are ashamed of seeking help. Some are afraid. Some cannot access the help they need.
            </p>
          </div>
        </div>

        {/* Right container */}
        <div className='sm:w-1/2 h-full flex items-center justify-center flex-col text-white mt-20 relative'>

          {/* Define a base top position and increment for overlap */}
          {['Anxiety', 'Depression', 'OCD', 'PTSD', 'Sleep Disorder', 'Stress', 'Anger Issues', 'Personality Disorder', 'Substance Dependence'].map((text, index) => (
            <div
              key={index}
              className='flex sticky w-10/12 mb-24 items-end justify-center'
              style={{ top: `${150 + index * 5}px` }}  // Adjust this value for overlap
            >
              <div className='blackBox'>{text}</div>
              <div className='sideBox'></div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}

export default WhatWeDo;
