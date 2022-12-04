import React, { useState } from "react";
import { FaThList, FaRegWindowClose } from "react-icons/fa";


const NavBar = () => {

    const [nav, setNav] = useState(false);

  return (
    
    <div className="flex justify-between items-center w-full h-20 text-white bg-orange-400 px-4 fixed">
    <div>
      <div className="text-2xl font-signature ml-3 cursor-pointer hover:scale-105 duration-200">
        <p className="px-3">Ashley</p>
        <p className=" text-white rounded bg-green-700 px-4">Delić</p>
      </div>
    </div>

      <ul className="md:flex hidden mt-2 md:text-[22px] tracking-widest">
        <li className="px-4 cursor-pointer text-white hover:scale-110 duration-200 font-normal">
          Skills
        </li>
        <li className="px-4 cursor-pointer text-white hover:scale-110 duration-200 font-normal">
          About
        </li>
        <li className="px-4 cursor-pointer text-white hover:scale-110 duration-200 font-normal">
          Projects
        </li>
        <li className="px-4 cursor-pointer text-white hover:scale-110 duration-200 font-normal bg-green-700 rounded hover:bg-green-800">
          Contact
        </li>
      </ul>

      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-3 z-10 md:hidden">
         {nav ? <FaRegWindowClose size={20} /> : <FaThList size={20}/>}
      </div>

      { nav && (
              <ul className="flex justify-center flex-col items-center absolute top-0 left-0 w-full h-screen bg-transparent bg-gray-600 text-white">
              <li className="py-4 cursor-pointer text-white hover:scale-110 duration-200 font-normal">Skills</li>
              <li className="py-4 cursor-pointer text-white hover:scale-110 duration-200 font-normal">About</li>
              <li className="py-4 cursor-pointer text-white hover:scale-110 duration-200 font-normal">Projects</li>
              <li  className="py-4 px-4  cursor-pointer text-white hover:scale-110 duration-200 font-normal bg-green-700 rounded hover:bg-green-800">Contact</li>
          </ul>
      )}

    </div>
  );
};

export default NavBar;
