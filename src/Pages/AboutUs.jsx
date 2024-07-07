import React from 'react'
import tamana from '../assets/tamana.jpg';
const AboutUs = () => {
  return (
    <div>
      <h1 className=' text-3xl sm:ml-24 sm:mt-6 text-[#434b6c]'>
        About Us
      </h1>
      {/* First Section */}
      <div className='flex justify-center items-center py-3'>
      <div className='w-80 mx-10 h-96   '>
            <img src={tamana} className='h-full w-full'>
            </img>
        </div>
        <div className='w-10/12 sm:w-96 h-full  flex  justify-center text-[#304463]'>
          <div className=''>
            <a href="https://www.linkedin.com/in/puneet-chhabra-3089b621b/" className='text-4xl  font-bold underline underline-offset-2'>
            Dr. Gayatri Ahuja
            </a>
            <p className='text-wrap text-justify  mt-5 text-black'>
            Welcome to "Brainstreamliner", a company dedicated to revolutionizing mental health and professional training in psychology. 
            I am Gayatri Ahuja, 
            MSc. in Clinical Psychology, and I founded Brainstreamliner with a vision to make mental processes more accessible and efficient.
              </p>
          </div>
        </div>
      </div>
      {/* First Section Ends */}


      {/* Second Section */}
      <div className='flex justify-center items-center py-10 text-black'>
      
        <div className='w-10/12 sm:w-96 h-full  flex  justify-center '>

          <div className=''>
            <h1 className='text-xl  font-semibold  underline-offset-2  '>
            Our Story:
            </h1>
               <p className='text-wrap text-justify   '>
             The idea for Brainstreamliner emerged from my personal journey as a psychology student and clinician. I often felt overwhelmed by the intricate theories and emotional challenges, seeking a more streamlined path to mental clarity. This pivotal experience inspired me to create a place where mental processes are simplified, making it easier for individuals and professionals to navigate their psychological journeys.
              </p>
              <p className='text-wrap text-justify   '>
              Brainstreamliner aims to enhance mental well-being and professional growth through innovative and effective psychological services. We are committed to providing tools and techniques that promote mental clarity, emotional resilience, and overall well-being
              </p>
          </div>
        </div>
        <div className='w-80 mx-10 h-96   '>
            <img src={tamana} className='h-full w-full'>
            </img>
        </div>
      </div>
      {/* Second Section Ends*/}

      {/* Third Section Starts */}
      <div className='flex justify-center items-center py-10 text-black'>
      <div className='w-80 mx-10 h-96   '>
            <img src={tamana} className='h-full w-full'>
            </img>
        </div>
        <div className='w-10/12 sm:w-96 h-full  flex  justify-center '>

          <div className=''>
            <h1 className='text-xl  font-semibold  underline-offset-2  '>
            Our Services:
            </h1>
            <p className='text-wrap text-justify   '>
            <p className='flex gap-1'>
              <p className='font-semibold w-30'>Workshops:</p>Practical and engaging workshops designed to deepen understanding and develop essential psychological skills.
            </p>
            <p  className='flex gap-1'>
            <p className='font-semibold w-30'>Counseling:</p>Personalized counseling sessions that focus on individual needs, promoting mental clarity and emotional health.
            </p>
            <p className='flex gap-1'>
            <p className='font-semibold w-44'>Clinical Trainings:</p>Specialized training in Art Therapy and Cognitive Behavioral Therapy (CBT) for therapists, equipping them with cutting-edge techniques.
            </p>
            <p className='flex gap-1'>
            <p className='font-semibold w-30'>Coaching:</p>Dedicated coaching for psychology students and professionals to help them excel in their academic and clinical endeavors.
            </p>
            </p>
            
          </div>
        </div>
        
      </div>
      {/* Third Section Ends */}
      <div className='flex items-center justify-center pb-3'>
      <p className='text-xl font-semibold'>
      Join us at Brainstreamliner, where we turn the complexities of psychology into a journey of clarity and compassion.
      </p>
      </div>
      <div className='flex items-center justify-center pb-5'>
        <a href="/ContactUs" className=' bg-[#304463] rounded-md flex items-center justify-center px-4 p-2'>
          Contact Us
        </a>
      </div>
      

    </div>
  )
}

export default AboutUs