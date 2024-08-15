import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'


const CoverPage = () => {
  return (
    <div className='w-screen h-screen'>
        <div className='h-1/2 bg-white'>
            <div className=' flex flex-col items-center justify-center text-4xl font-customFont font-semibold h-full bg-[#89CFF0] text-white'>
            <img className=' w-32 pb-10' src={logo} alt=""  height={80} width={75}/>
     
                <h1 className='animate-bounce '>
                BrainStreamliner
                </h1>
                
                <Link className='p-2 border-white rounded-lg border-2 px-4 text-xl font-normal mt-5 animate-pulse'> Contact Us
                </Link>
            </div>
           
        </div> 
    </div>
  )
}

export default CoverPage