/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { AiFillProject, AiOutlineHome, AiOutlineBuild } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { SiAboutdotme } from "react-icons/si";
import { TbBrandGmail } from "react-icons/tb";
const Sidenav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <GrProjects
        size={40}
        onClick={handleNav}
        className="bg-white/50  fixed top-8 right-6 z-[99] md:hidden hover:scale-110 text-teal-50 ease-in duration-100 "
      />

      {nav ? (
        <div className="fixed h-screen top-1 w-full flex flex-col justify-center items-center z-20 bg-white/50">
          <a
            href="#homes"
            className="
        w-[75%] 
        flex justify-center items-center 
        bg-gradient-to-r from-cyan-500 to-blue-500
        p-3 m-3
        rounded-lg 
        cursor-pointer 
        hover:scale-105 ease-in duration-200"
          >
            <SiAboutdotme className="text-teal-50" size={20} />
            <span className="pl-3 text-teal-50">Homes</span>
          </a>

          <a
            href="#projects"
            className="
        w-[75%] 
        flex justify-center items-center 
        bg-gradient-to-r from-cyan-500 to-blue-500
        p-3 m-3
        rounded-lg 
        cursor-pointer 
        hover:scale-105 ease-in duration-200"
          >
            <AiFillProject className="text-teal-50" size={20} />
            <span className="pl-3 text-teal-50">Projects</span>
          </a>

          <a
            href="#contact"
            className="
        w-[75%] 
        flex justify-center items-center 
        bg-gradient-to-r from-cyan-500 to-blue-500
        p-3 m-3
        rounded-lg 
        cursor-pointer 
        hover:scale-105 ease-in duration-200"
          >
            <TbBrandGmail className="text-teal-50" size={20} />
            <span className="pl-3 text-teal-50">Connect me</span>
          </a>
        </div>
      ) : (
        ""
      )}

      <div className="md:block hidden fixed h-screen top-1 z-20">
        <a
          href="#homes"
          className="
        w-[75%] 
        flex justify-center items-center 
        bg-gradient-to-r from-cyan-500 to-blue-500
        p-3 m-3
        rounded-lg 
        cursor-pointer 
        hover:scale-105 ease-in duration-200"
        >
          <SiAboutdotme className="text-teal-50" size={20} />
        </a>

        <a
          href="#projects"
          className="
        w-[75%] 
        flex justify-center items-center 
        bg-gradient-to-r from-cyan-500 to-blue-500
        p-3 m-3
        rounded-lg 
        cursor-pointer 
        hover:scale-105 ease-in duration-200"
        >
          <AiFillProject className="text-teal-50" size={20} />
        </a>
        <a
          href="#contact"
          className="
        w-[75%] 
        flex justify-center items-center 
        bg-gradient-to-r from-cyan-500 to-blue-500
        p-3 m-3
        rounded-lg 
        cursor-pointer 
        hover:scale-105 ease-in duration-200"
        >
          <TbBrandGmail className="text-teal-50" size={20} />
        </a>
      </div>
    </div>
  );
};

export default Sidenav;
