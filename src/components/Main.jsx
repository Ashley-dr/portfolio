import React from "react";
import BackgroundVideo from "/src/assets/bg.mp4";
import { TypeAnimation } from "react-type-animation";
import { FaFacebookSquare, FaGithub, FaInstagram } from "react-icons/fa";
import { RadialTextGradient } from "react-text-gradients-and-animations";
import About from "./About";

const Main = () => {
  return (
    <div id="main">
      <div className="background">
        <video className="background-video" autoPlay loop muted>
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
      </div>

      <div id="homes" className="w-full h-screen absolute top-0">
        <div
          className="s:max-w-[300px] xs:max-w-[400px]
  sm:max-w-[650px] lg:max-w-[700px] flex flex-col justify-center m-auto h-full"
        >
          <p className="text-lg  mb-1 font-semibold font-bebos tracking-tight text-teal-400">
            👋 Hi, I'm Ashley Durano Rodriguez
          </p>
          <RadialTextGradient
            className="max-w-[500px] sm:text-7xl text-7xl font-bold mb-5"
            shape={"circle"}
            position={"center"}
            colors={["#35ef89", "#6868ca"]}
            animate={true}
            animateDirection="horizontal"
            animateDuration={16}
          >
            Front-End Developer
          </RadialTextGradient>

          <span style={{ fontSize: "2em" }}>
            <span>I'm a</span>{" "}
            <TypeAnimation
              sequence={["Designer.", 1000, "Coder.", 1000, "Gamer.", 1000]}
              repeat={Infinity}
            />
          </span>

          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a href="https://www.facebook.com/ashleydiligwapo/">
              <FaFacebookSquare
                size={30}
                className="cursor-pointer fill-gray-800"
              />
            </a>
            <FaGithub size={30} />
            <FaInstagram size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
