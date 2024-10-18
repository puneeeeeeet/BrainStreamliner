import React from 'react'
import brain1 from '../assets/brain1.jpg'

const About = () => {
  return (
    <div className='bg-[#E5E4E2] w-screen h-screen  sm:flex'>
        <div className='sm:w-1/2 sm:h-full w-0 h-0 flex items-center justify-center'>
        <img
            className="w-80 mix-blend-darken animate-pulse  sm:pb-10  mt-24 "
            src={brain1}
            alt=""
            height={80}
            width={75}
          />
        </div>
        <div className='sm:w-1/2 h-full text-black flex items-center justify-center '>
        <div className='flex flex-col   sm:w-7/12 w-11/12'>
            <p className='text-2xl font-semibold text-[#004aad] font-customFont'>About</p>
            <p className='text-4xl font-bold text-[#004aad] font-customFont'>Brain Streamliner</p>
            <p className='sm:w-3/4 text-justify text-lg font-medium'> 
            Brain Streamliner’s origins are what set it apart from other young mental healthcare providers. Brain Streamliner finds its origins in the Cadabams Group, India’s largest private mental healthcare provider.  Brain Streamliner is an effort to transform the unidimensional idea of therapy into a multidimensional healing experience.
            </p>
        </div>
        </div>
        
    </div>
  )
}

export default About