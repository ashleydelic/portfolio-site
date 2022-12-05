import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMailOpen} from 'react-icons/hi';
import {BsFilePerson} from 'react-icons/bs';

const SocialLinks = () => {
  return (
    <div className='flex flex-col top-[35%] left-0 fixed'>
      <ul>
          <li className='flex justify-between items-center w-40 h-1/4 px-4 bg-slate-400 text-white'>
              <a href="" className='flex justify-between items-center w-full'>
              <>
             LinkedIn <FaLinkedin />
              </>
              </a>
          </li>
      </ul>
    </div>
  )
}

export default SocialLinks
