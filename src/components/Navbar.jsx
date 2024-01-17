import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className='header'>
        <Link to='/' 
        className='border-2 border-t-gray-500 border-r-gray-700 border-b-gray-800 border-l-gray-950   w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md mr-2 -ml-4'
        ><p className='blue-gradient_text text-xs sm:text-xl'>SS</p></Link>

        <nav className='flex text-md gap-4 sm:text-lg sm:gap-7 font-medium'>

        <NavLink className={({ isActive}) => isActive ? 'text-gray-500' : 'text-black'} to='/about'>About</NavLink>
        <NavLink className={({ isActive}) => isActive ? 'text-gray-500' : 'text-black'} to='/projects'>Projects</NavLink>
        <NavLink className={({ isActive}) => isActive ? 'text-gray-500' : 'text-black'} to='/contact'>Contact</NavLink>
        <Link target='_blank' to='https://github.com/sivasankar-s'><FaGithub  className='text-2xl sm:text-3xl'/></Link>
        <Link target='_blank' to='https://www.linkedin.com/in/sivasankar-s31/'><FaLinkedin className='text-2xl sm:text-3xl' /></Link>
        </nav>

    </div>
  )
}

export default Navbar