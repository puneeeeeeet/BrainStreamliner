import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import  Video from '../assets/video.mp4'
// text-[#89CFF0]
const CoverPage = () => {
  return (
    <div className='w-screen h-screen sm:flex bg-[#E5E4E2] '>
        <div className='h-full sm:w-8/12 sm:h-full bg-[#E5E4E2]'>
            <div className='flex flex-col items-center justify-center sm:text-7xl text-4xl 
            font-customFont font-semibold h-full text-[#004aad] bg-[#E5E4E2] '>
            <img className='w-48 pb-10 animate-zoomInUp ' src={logo} alt=""  height={80} width={75}/>
     
                <div className='animate-fadeinup  '>
                BrainStreamliner
                </div>
                
                <Link className='p-2 border-[#004aad]  text-[#004aad] font-semibold rounded-lg border-2 px-4 text-xl
                  mt-10 animate-bounce'> Contact Us
                </Link>
            </div>   
        </div> 
        <video src={Video}  loop autoPlay muted className='sm:rounded-l-full mr-5 m-1 animate-fadeinright w-0 h-0 sm:w-fit sm:h-fit' />
    </div>
  )
}

export default CoverPage