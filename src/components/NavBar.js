import React from 'react';
import {FaThList, FaRegWindowClose} from 'react-icons/fa';

const NavBar = () => {

    const links = [
        {
            id: 1,
            link: 'Skills'
        },
        {
            id: 2,
            link: 'About'
        },
        {
            id: 3,
            link: 'Projects'
        },
        {
            id: 4,
            link: 'Contact'
        }
        
    ]
  return (
    <div className='flex justify-between items-center w-full h-20 text-white bg-orange-400 px-4 fixed'>
     <div>
         <h1 className='text-4xl font-signature ml-3'>Ashley</h1>
    </div>

    <ul className='flex'>
       <li className='px-4 cursor-pointer text-white hover:scale-110 duration-200 font-normal'>Skills</li>

    </ul>
    </div>
  )
}



export default NavBar
