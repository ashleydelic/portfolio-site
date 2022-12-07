import React, { useState } from "react";
import { FaThList, FaRegWindowClose } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";
import * as Scroll from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-orange-400 px-4 fixed">
      <div>
        <div className="text-2xl font-signature ml-3 cursor-pointer hover:scale-105 duration-200">
          <p className="px-3 text-white">Ashley</p>
          <p className=" text-white rounded bg-green-700 px-4">Delić</p>
        </div>
      </div>

      <ul className="md:flex hidden mt-2 md:text-[22px] tracking-widest">
        <li className="px-4 cursor-pointer text-white hover:scale-110 duration-200 font-normal">
          <a href="#home">Home</a>
        </li>
        <li className="px-4 cursor-pointer text-white hover:scale-110 duration-200 font-normal">
          <a href="#about">About me</a>
        </li>
        <li className="px-4 cursor-pointer text-white hover:scale-110 duration-200 font-normal">
          <a href="#projects">Projects</a>
        </li>
        <li className="px-4 cursor-pointer text-white hover:scale-110 duration-200 font-normal">
          <a href="#toolkit">Toolkit</a>
        </li>
        <li className="px-4 cursor-pointer text-white hover:scale-110 duration-200 font-normal bg-green-700 rounded hover:bg-green-800">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-3 z-10 md:hidden"
      >
        {nav ? <FaRegWindowClose size={20} /> : <FaThList size={20} />}
      </div>

      {nav && (
        <ul className="flex justify-center flex-col items-center absolute top-0 left-0 w-full h-screen bg-transparent bg-gray-600 text-white">
          <li className="py-4 cursor-pointer text-white hover:scale-110 duration-200 font-normal">
            <a href="/#home">Home</a>
          </li>
          <li className="py-4 cursor-pointer text-white hover:scale-110 duration-200 font-normal">
            <a href="/#about">About Me</a>
          </li>
          <li className="py-4 cursor-pointer text-white hover:scale-110 duration-200 font-normal">
            <a href="/#projects">Projects</a>
          </li>
          <li className="py-4 px-4  cursor-pointer text-white hover:scale-110 duration-200 font-normal bg-green-700 rounded hover:bg-green-800">
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
