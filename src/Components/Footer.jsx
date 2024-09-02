import React from 'react'

const Footer = () => {
  return (
    <div className="sm:flex  h-48 sm:h-24 w-screen bg-blue text-white">
      <div className="sm:w-1/2 flex flex-col items-start sm:ml-20 justify-center sm:border-r-2 ">
        <div className="flex">
          <p className="font-bold mr-7">Address: </p>
          <p>Eduworld, Block E Ansal Sushant City Panipat</p>
        </div>
        <div className="flex ">
          <p className="font-bold mr-2">Contact us: </p>
          <div className='flex flex-col'>
          <div className="sm:border-r-2 sm:mr-2 pr-2"> brainstreamliner@gmail.com </div>
          <p>+91 7988417778</p>
            </div>
          
        </div>
      </div>

      <div className='flex items-center justify-center sm:w-1/2'>
        @copyright -puneeeeeeet
      </div>
    </div>
  );
}

export default Footer