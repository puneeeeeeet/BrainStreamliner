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

  const data = [
    { blackBoxText: 'Anxiety', sideBoxText: 'There is a lot happening in the world. Somehow, there’s more happening in your mind. We can help.' },
    { blackBoxText: 'Depression', sideBoxText: 'Sometimes, getting out of bed is an ordeal. We can help.' },
    { blackBoxText: 'OCD', sideBoxText: 'Where the mind insists on a replay, even when the heart wants to move forward' },
    { blackBoxText: 'PTSD', sideBoxText: 'A past echo that disrupts today’s melody.' },
    { blackBoxText: 'Sleep Disorder', sideBoxText: 'Contrary to pop culture wisdom, love is not always easy. And that’s okay.We can help.' },
    { blackBoxText: 'Stress', sideBoxText: 'Today’s hustle culture has normalized constant stress. That’s not the way it needs to be. We can help' },
    { blackBoxText: 'Anger Issues', sideBoxText: 'A fleeting spark that can burn bridges.' },
    { blackBoxText: 'Personality Disorder', sideBoxText: 'A complex dance of traits, where understanding and support lead the way.' },
    { blackBoxText: 'Substance Dependence', sideBoxText: 'When the chains are invisible, but the struggle is real.' }
  ];

  return (
    <>
      <div className='w-screen h-[400vh] sm:h-[400vh] flex sm:flex-row flex-col text-blue bg-white relative pb-44'>
        <div className='sm:w-1/2 w-full sm:flex sm:items-center flex-col gap-5'>
          <div className='sticky top-0 sm:top-56 sm:ml-40 sm:pb-40 mt-56 sm:w-full w-11/12 ml-4'>
            <div className='flex flex-col sm:w-1/2 w-3/4 text-xl font-customFont'>
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
          {data.map((item, index) => (
            <div
            key={index}
            className='flex sticky w-11/12 mb-24 items-end justify-center'
            style={{ top: `${150 + index * 5}px` }}  // Adjust this value for overlap
          >
            <div className='blackBox'>{item.blackBoxText}</div>
            <div className='sideBox'>{item.sideBoxText}</div>
          </div>
          ))}

        </div>
      </div>
    </>
  );
}

export default WhatWeDo;
