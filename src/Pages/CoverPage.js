import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import  Video from '../assets/video.mp4'
// text-[#89CFF0]
const CoverPage = () => {
  return (
    <div className="w-screen h-[130vh] sm:h-screen sm:flex bg-[#E5E4E2]    ">
      <div className="h-11/12  sm:w-8/12 sm:h-full  flex flex-col items-center justify-center sm:text-7xl text-4xl 
            font-semibold  text-[#004aad] bg-[#E5E4E2]  "
        >
          <img
            className="w-48 sm:pb-10 animate-zoomInUp mt-24 "
            src={logo}
            alt=""
            height={80}
            width={75}
          />

          <div className="animate-fadeinup   font-customFont">
            BrainStreamliner
          </div>

          <Link
            className="p-2 border-[#004aad]  text-[#004aad] font-semibold rounded-lg border-2 px-4 text-xl 
                  mt-20 mb-10 animate-bounce "
          >
           
            Contact Us
          </Link>
        </div>
      
      <div>
        <video
          src={Video}
          loop
          autoPlay
          muted
          className="sm:rounded-l-full  sm:m-1 sm:animate-fadeinright  sm:w-fit sm:h-fit"
        />
      </div>
    </div>
  );
}

export default CoverPage