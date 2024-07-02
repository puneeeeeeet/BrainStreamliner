import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/logo.png'

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Company' },
    { id: 3, text: 'Resources' },
    { id: 4, text: 'About' },
    { id: 5, text: 'Contact' },
  ];

  return (
    <div className='bg-[#FFF8DB] flex justify-between items-center h-24  mx-auto px-4 text-white'>

      <img className=' ' src={logo} alt=""  height={80} width={75}/>
      <h1 className='w-full text-3xl font-bold text-[#304463] font-mono ml-4'>Brain Streamliner</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#939185] rounded-xl m-2 text-[#304463] cursor-pointer duration-300 text-xl hover:text-black'
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[70%] h-full  bg-[#EEEDEB] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-2xl font-bold text-[#E6E6FA] m-4'>Brain Streamliner</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4  rounded-xl hover:bg-[#E6E6FA] duration-300 hover:text-black cursor-pointer '
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;