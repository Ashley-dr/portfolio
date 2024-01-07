import React from "react";
import { TbBrandGmail } from "react-icons/Tb";
import { FaFacebookSquare, FaGithub, FaInstagram } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="h-[500px] m-auto absolute w-full mt-440x">
      <div id="contact" className="max-w-[800px] pb-20 m-auto">
        <h1 className="text-white font-bold font-bebas text-emerald-200 text-center mb-10">
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
              className="cursor-pointer fill-gray-800"
            />
          </a>
          <a href="https://github.com/AshleyDurano">
            <FaGithub size={25} className="cursor-pointer fill-gray-800" />
          </a>
          <a href="https://www.instagram.com/ashleydurano/">
            <FaInstagram size={25} className="cursor-pointer fill-gray-800" />
          </a>
        </div>
        <h4 className="text-gray-700 mt-5 text-center font-bebos">
          © 2023 PORTFOLIO BY ASHLEY RODRIGUEZ.
        </h4>
      </div>
    </div>
  );
};

export default Contact;
