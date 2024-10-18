import React, { useState, useEffect } from 'react';

const CardStack = () => {
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
    <div className="relative h-full">
      <div className={`sticky top-10 w-full h-screen transition-transform duration-500 ease-in-out ${scrollIndex === 0 ? 'z-30' : 'z-10'}`}>
        <div className="w-1/12 h-1/3 bg-white border shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-bold">Card 1</h2>
          <p className="text-blue">This is the content of the first card.</p>
        </div>
      </div>
      <div className={`sticky top-16 w-full h-screen transition-transform duration-500 ease-in-out ${scrollIndex === 1 ? 'z-30' : 'z-10'}`}>
        <div className="w-1/12 h-1/3 bg-white border shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-bold">Card 2</h2>
          <p className="text-blue">This is the content of the second card.</p>
        </div>
      </div>
      <div className={`sticky top-24 w-full h-screen transition-transform duration-500 ease-in-out ${scrollIndex === 2 ? 'z-30' : 'z-10'}`}>
        <div className="w-1/12 h-1/3 bg-white border shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-bold">Card 3</h2>
          <p className="text-blue">This is the content of the third card.</p>
        </div>
      </div>
    </div>
  );
};

export default CardStack;
