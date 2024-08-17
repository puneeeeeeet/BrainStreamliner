import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
// text-[#89CFF0]
const CoverPage = () => {
  return (
    <div className='w-screen h-screen sm:flex'>
        <div className='h-4/6 sm:w-8/12 sm:h-full bg-white'>
            <div className='flex flex-col items-center justify-center sm:text-7xl text-4xl 
            font-customFont font-semibold h-full text-[#7d8abc] bg-[#E5E4E2] '>
            <img className='w-48 pb-10 ' src={logo} alt=""  height={80} width={75}/>
     
                <div className='animate-fadeIn  '>
                BrainStreamliner
                </div>
                
                <Link className='p-2 border-[#7D8ABC]  text-[#7D8ABC] font-semibold rounded-lg border-2 px-4 text-xl
                  mt-10 animate-bounce'> Contact Us
                </Link>
            </div>   
        </div> 
    </div>
  )
}

export default CoverPage