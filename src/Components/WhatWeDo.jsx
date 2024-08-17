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
    <div className='w-screen h-[200vh] sm:h-[150vh] flex sm:flex-row flex-col text-blue  bg-white relative '>
        <div className='  sm:w-1/2 w-full sm:flex sm:items-center  flex-col gap-5'>
        
        <div className='sticky top-0 sm:top-48  sm:ml-40 sm:pb-40 mt-40 sm:w-full w-11/12 ml-4' >
          <div className='flex flex-col w-1/2 text-xl'>
        <p>
            What do we
        </p>
        <p className='text-3xl font-semibold '>
            help with?
        </p>
        </div>
        <p className='sm:w-1/2 sm:11/12 text-black text-lg text-justify'>
            Over 180 million Indians, or 14 per cent of the population, live with mental health issues. Many more suffer silently. Some are ashamed of seeking help. Some are afraid. Some cannot access the help they need.
        </p>
        </div>
        </div>

        
        {/* Left container */}
        <div className='sm:w-1/2 h-full flex items-center  flex-col'>
        
        {/* first card */}
          <div className='items-end flex sticky mt-16 sm:mt-96 top-32 sm:top-40 border-2 border-black h-20 w-10/12 mb-32'>
1

          </div>
          {/* Second Card */}

          <div className='items-end flex sticky top-36 sm:top-44 border-2 border-black h-20 w-10/12 mb-32'>
2
          </div>
          <div className='items-end flex sticky top-40 sm:top-48 border-2 border-black h-20 w-10/12 mb-32'>
3

          </div>
          <div className='items-end flex sticky top-44 sm:top-52 border-2 border-black h-20 w-10/12 mb-32'>
4 

          </div>
              {/* Ends Here */}
              </div>
        </div>
    
    
    </>
  )
}

export default WhatWeDo