/* eslint-disable no-unused-vars */
import React from "react";
import BackgroundVideo from "/src/assets/bg.mp4";
import { TypeAnimation } from "react-type-animation";
import { FaFacebookSquare, FaGithub, FaInstagram } from "react-icons/fa";
import { RadialTextGradient } from "react-text-gradients-and-animations";
import About from "./About";
import images from "../assets/ashley.jpg";
import Projects from "./Projects";
import Contact from "./Contact";
const Main = () => {
  return (
    <div className="grid space-y-32 justify-items-center justify-self-center w-full h-full   ">
      <div
        id="homes"
        className="pt-32 grid   grid-cols-2  m-auto justify-items-center w-[1400px] "
      >
        <div className=" flex flex-col justify-center m-auto h-full ">
          <div className="grid grid-cols-2">
            <div className="shrink-0 overflow-hidden w-20 h-20 absolute">
              <div
                className="absolute inset-0 border-4 border-emerald-300 rounded-full animate-ping"
                style={{ animationDelay: "5s" }}
              ></div>
              <img src={images} className="w-20 h-20 rounded-full" />
            </div>
            <div className="relative left-24">
              <p className="text-xl  mb-1 font-thin font-bebos tracking-tight text-teal-100">
                Ashley Durano Rodriguez
              </p>
              <RadialTextGradient
                className="max-w-[500px] text-2xl font-normal font-bebos mb-5"
                shape={"circle"}
                position={"center"}
                colors={["#35ef89", "#6868ca"]}
                animate={true}
                animateDirection="horizontal"
                animateDuration={16}
              >
                Web Developer
              </RadialTextGradient>
            </div>
          </div>
          <div className="relative left-24">
            <span style={{ fontSize: "1em", color: "white" }}>
              <span>I&apos;m a</span>{" "}
              <TypeAnimation
                sequence={["Designer.", 1000, "Coder.", 1000, "Gamer.", 1000]}
                repeat={Infinity}
              />
            </span>
          </div>
          <div className="flex justify-between pt-6 max-w-[200px] w-full text-white">
            <a
              href="https://www.facebook.com/ashleydiligwapo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-wh"
            >
              <FaFacebookSquare
                size={20}
                className="cursor-pointer fill-white"
              />
            </a>
            <a
              href="https://github.com/Ashley-dr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} />
            </a>
            <FaInstagram size={20} />
          </div>
        </div>
        <div className="">
          <About />
        </div>
      </div>
      <Projects />
      <Contact />
    </div>
  );
};

export default Main;
