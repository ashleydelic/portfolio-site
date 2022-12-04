import React from 'react';
import {FaThList, FaRegWindowClose} from 'react-icons/fa';

const NavBar = () => {

  return (
    <div className='hidden md:flex justify-between items-center w-full h-20 text-white bg-orange-400 px-4 fixed'>
     <div>
         <h1 className='text-4xl font-signature ml-3 cursor-pointer hover:scale-105 duration-200'>Ashley</h1>
    </div>

    <ul className='flex'>
                        <li className='px-4 cursor-pointer text-white hover:scale-110 duration-200 font-normal'>Skills</li>
                        <li className='px-4 cursor-pointer text-white hover:scale-110 duration-200 font-normal'>About</li>
                        <li className='px-4 cursor-pointer text-white hover:scale-110 duration-200 font-normal'>Projects</li>
                        <li className='px-4 cursor-pointer text-white hover:scale-110 duration-200 font-normal bg-green-700 rounded hover:bg-green-800'>Contact</li>

    </ul>
    </div>
  )
}



export default NavBar
