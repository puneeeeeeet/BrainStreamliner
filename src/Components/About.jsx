import React from 'react'

const About = () => {
  return (
    <div className='bg-[#E5E4E2] w-screen h-screen  sm:flex'>
        <div className='sm:w-1/2 sm:h-full w-0 h-0 '>

        </div>
        <div className='sm:w-1/2 h-full text-black flex items-center justify-center gap'>
        <div className='flex flex-col   sm:w-7/12 w-11/12'>
            <p className='text-2xl font-semibold'>About</p>
            <p className='text-4xl font-bold'>MindTalk</p>
            <p className='sm:w-3/4 text-justify text-lg font-medium'> 
            Mindtalk’s origins are what set it apart from other young mental healthcare providers. Mindtalk finds its origins in the Cadabams Group, India’s largest private mental healthcare provider. Mindtalk is an effort to transform the unidimensional idea of therapy into a multidimensional healing experience.
            </p>
        </div>
        </div>
    </div>
  )
}

export default About