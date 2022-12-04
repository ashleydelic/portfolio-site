import React from 'react';
import {FaThList, FaRegWindowClose} from 'react-icons/fa';

const NavBar = () => {
  return (
    <div className='flex justify-between items-center w-full h-20 text-white bg-orange-400 px-4 fixed'>
     <div>
         <h1 className='text-4xl font-signature ml-3'>Ashley</h1>
    </div>

    <ul className='flex'>
       <li className='px-4 cursor-pointer capitalize font-normal text-white hover:scale-110 duration-200'>Home</li>

    </ul>
    </div>
  )
}



export default NavBar
