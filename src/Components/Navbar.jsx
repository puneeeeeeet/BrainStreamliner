import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import {Link } from 'react-router-dom'

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);
  const [navBack, setNavBack] =useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };
  const changeBackground =()=>{
    if(window.scrollY>600){
      setNavBack(true)
    }else{
      setNavBack(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);
  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home', path:'/' },
    { id: 2, text: 'About us', path:'/AboutUs' },
    { id: 3, text: 'Self Assessment', path:'/SelfAssessment' },
    { id: 4, text: 'Workshop', path:'/Workshop' },
    { id: 5, text: 'Group Therapies', path:'/Group' }, 
    { id: 6, text: 'Blogs', path:'/Blog' },
    { id: 7, text: 'Offer', path:'/Offer' },
    { id: 8, text: 'Contact us', path:'/ContactUs' },
  ];

  return (
    <div className={navBack  ? 'navbar active' :'navbar'}>

      <div  className={navBack ? 'w-full text-3xl font-bold text-[#FFF8DB] font-customFont   ml-4':'hidden'}>Brain Streamliner</div >

      {/* Desktop Navigation */}
      {/* <ul className='hidden md:flex'> */}

      {/* ICON FOR NAVIGAYION OPEN AND CLOSE */}
      <div className='hidden md:flex' onClick={handleNav}>
      {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      
      <ul
        className={
          nav
            ? 'fixed left-0 top-20 w-full h-[80%]   bg-[#F7F7F8] animate-fadeindown duration-500 z-20 rounded-b-2xl text-[#7EA1FF] font-semibold text-xl'
            : 'hidden fixed'
        }
      >
        {/* Mobile Logo */}
        {/* <h1 className='w-full text-2xl font-bold text-[#FFF8DB] m-4'>Brain Streamliner</h1> */}

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <Link to={item.path}
          onClick={handleNav}
            key={item.id}
            className='p-4  ml-11 w-48 mt-2  flex rounded-xl hover:bg-[#7EA1FF]  duration-300 hover:text-white cursor-pointer '>
            {item.text}
          </Link>
        ))}
      </ul>
      </div>
      
      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className={navBack ? "block md:hidden z-10 ": "hidden"}>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[70%] h-full  bg-[#7EA1FF] ease-in-out duration-500 z-20'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
      
        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <Link to={item.path}
          onClick={handleNav}
            key={item.id}
            className='p-4  flex rounded-xl hover:bg-[#004aad] duration-300 hover:text-[#FFF8DB] cursor-pointer '>
            {item.text}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;