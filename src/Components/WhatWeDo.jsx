// import React, { useState, useEffect } from 'react';

// const WhatWeDo = () => {
//   const [scrollIndex, setScrollIndex] = useState(0);

//   const handleScroll = () => {
//     const scrollY = window.scrollY;
//     const index = Math.min(Math.floor(scrollY / window.innerHeight), 2); // Adjust the divisor for more precise control
//     setScrollIndex(index);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);
//   return (
//     <>
//     <div className='w-screen h-[300vh] sm:h-[350vh] flex sm:flex-row flex-col text-blue bg-white  relative pb-44'>
//         <div className='  sm:w-1/2 w-full sm:flex sm:items-center  flex-col gap-5'>
        
//         <div className='sticky top-0 sm:top-56  sm:ml-40 sm:pb-40 mt-56 sm:w-full w-11/12 ml-4' >
//           <div className='flex flex-col w-1/2 text-xl'>
//         <p>
//             What do we
//         </p>
//         <p className='text-3xl font-semibold '>
//             help with?
//         </p>
//         </div>
//         <p className='sm:w-1/2 sm:11/12 text-black text-lg text-justify'>
//             Over 180 million Indians, or 14 per cent of the population, live with mental health issues. Many more suffer silently. Some are ashamed of seeking help. Some are afraid. Some cannot access the help they need.
//         </p>
//         </div>
//         </div>

        
//         {/* Left container */}
//         <div className='sm:w-1/2 h-full flex items-center justify-center  flex-col text-white mt-20 relative'>
        
//         {/* first card */}
//         <div className=' flex  sticky mt-16 sm:mt-48 top-32 sm:top-52  w-10/12  mb-24 sm:mb-40 items-end justify-center'>
//         <div className='blackBox'></div>
//         <div className=' sideBox'>        
//         Anxiety
//           </div>
//         </div>
          
//           {/* Second Card */}
//           <div className=' flex sticky top-36 sm:top-56   w-10/12 mb-24 sm:mb-32 items-end justify-center'>  
//           <div className='blackBox'></div>
//          <div className=' sideBox'>
//          Depression
//          </div> 
//           </div>

//           {/* Third Card */}
//           <div className=' flex sticky top-40 sm:top-60    w-10/12 mb-24 sm:mb-32 items-end justify-center'>  
//           <div className='blackBox'></div>
//          <div className=' sideBox'>
//          OCD
//          </div> 
//           </div>
//           {/* Fourth Card */}
//           <div className=' flex sticky top-44 sm:top-72  w-10/12 mb-24 sm:mb-32 items-center justify-center'>  
//          <div className='blackBox'></div>
//          <div className=' sideBox'>
//          PTSD
//          </div> 
//           </div>
//           {/* Fifth card */}
//           <div className=' flex sticky top-48 sm:top-64   w-10/12 mb-24 sm:mb-32 items-center justify-center'>  
//           <div className='blackBox'></div>
//          <div className=' sideBox'>
//          Sleep Disorder
//          </div> 
//           </div>
//           {/* Sixth Card */}
//           <div className=' flex sticky top-52 sm:top-64   w-10/12 mb-24 sm:mb-28 items-center justify-center'>  
//           <div className='blackBox'></div>
//          <div className=' sideBox'>
//          Stress
//          </div> 
//           </div>
//           {/* Seventh Card */}
//           <div className=' flex sticky top-56 sm:top-72   w-10/12 mb-24 sm:mb-28 items-center justify-center'>  
//           <div className='blackBox'></div>
//          <div className=' sideBox'>
//          Anger Issues
//          </div> 
//           </div>
//           {/* Eigth Card */}
//           <div className=' flex sticky top-60 sm:top-72   w-10/12 mb-24 sm:mb-28 items-center justify-center '>  
//           <div className='blackBox'></div>
//          <div className='sideBox'>
//          Personality Disorder
//          </div> 
//           </div>
//           {/* Ninth Card */}
//           <div className=' flex sticky top-60 sm:top-72  w-10/12 mb-24 sm:mb-60 items-center justify-center '>  
//           <div className='blackBox'></div>
//          <div className=' sideBox'>
//          Substance Dependence
//          </div> 
//           </div>
//               {/* Ends Here */}
//               </div>
//         </div>
    
    
//     </>
//   )
// }

// export default WhatWeDo

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
      <div className='w-screen h-[300vh] sm:h-[400vh] flex sm:flex-row flex-col text-blue bg-white relative pb-44'>
        <div className='sm:w-1/2 w-full sm:flex sm:items-center flex-col gap-5'>
          <div className='sticky top-0 sm:top-56 sm:ml-40 sm:pb-40 mt-56 sm:w-full w-11/12 ml-4'>
            <div className='flex flex-col w-1/2 text-xl'>
              <p>What do we</p>
              <p className='text-3xl font-semibold '>help with?</p> 
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
