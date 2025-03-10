/* eslint-disable no-unused-vars */
import React from "react";
import { TbBrandGmail } from "react-icons/tb";
import { FaFacebookSquare, FaGithub, FaInstagram } from "react-icons/fa";
const Contact = () => {
  return (
    <div className=" m-auto  w-full ">
      <div id="contact" className="max-w-[800px] pb-32 m-auto pt-32">
        <h1 className=" font-bold font-bebas text-emerald-200 text-center mb-10">
          Connect with me.
        </h1>
        <p className="w-[600px] m-auto text-center text-teal-100 font-bebos font-bold">
          I am seeking more experiences and knowledge continously, Feel free to
          connect with me via gmail{" "}
          <b className="text-teal-400">ashleydurano1234@gmail.com</b> and for
          sure i would be thrilled to be working with you.
        </p>

        <a
          href=""
          className="mt-8 text-teal-100 sm:text-base rounded px-4 py-3 border border-teal-300 font-mono font-bold hover:text-teal-200 transition-colors flex items-center gap-2 w-fit mx-auto aos-init aos-animate"
        >
          <TbBrandGmail size={25}></TbBrandGmail>
          <span className="text-1xl font-bebos">Contact me.</span>
        </a>

        <div className="flex justify-between max-w-[200px] w-full m-auto mt-20">
          <a href="https://www.facebook.com/ashleydiligwapo/">
            <FaFacebookSquare
              size={25}
              className="cursor-pointer fill-white-800"
            />
          </a>
          <a href="https://github.com/Ashley-dr">
            <FaGithub size={25} className="cursor-pointer fill-gray-100" />
          </a>
          <a href="https://www.instagram.com/ashleydurano/">
            <FaInstagram size={25} className="cursor-pointer fill-gray-100" />
          </a>
        </div>
        <h4 className="text-gray-100 mt-5 text-center font-bebas font-thin text-sm">
          &copy; {new Date().getFullYear()} PORTFOLIO BY ASHLEY RODRIGUEZ.
        </h4>
      </div>
    </div>
  );
};

export default Contact;
