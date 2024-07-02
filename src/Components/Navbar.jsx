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
    { id: 2, text: 'About us' },
    { id: 3, text: 'Self Assessment' },
    { id: 4, text: 'Workshop' },
    { id: 5, text: 'Group Therapies' }, 
    { id: 6, text: 'Blogs' },
    { id: 7, text: 'Offer' },
    { id: 8, text: 'Contact us' },
  ];

  return (
    <div className='bg-[#7D8ABC] flex justify-between items-center h-24  mx-auto px-4 text-white'>

      <img className=' ' src={logo} alt=""  height={80} width={75}/>
      <a href='/' className='w-full text-3xl font-bold text-[#FFF8DB] font-mono ml-4'>Brain Streamliner</a >

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='px-5 py-4 hover:bg-[#304463] rounded-xl m-2 text-[#FFF8DB] cursor-pointer duration-300 text-nowrap hover:text-[#FFF8DB]'
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
            ? 'fixed md:hidden left-0 top-0 w-[70%] h-full  bg-[#7D8ABC] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-2xl font-bold text-[#FFF8DB] m-4'>Brain Streamliner</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4  rounded-xl hover:bg-[#304463] duration-300 hover:text-[#FFF8DB] cursor-pointer '
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;