/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import About from "./About";
import images from "../assets/ashley.jpg";
const AboutItem = ({
  year,
  title,
  duration,
  details,
  tech1,
  tech2,
  tech3,
  tech4,
  tech5,
  tech6,
  tech7,
  tech8,
  tech9,
  tech10,
}) => {
  return (
    <div className="">
      <div className=" ">
        <div className="w-[370px]  flex flex-wrap gap-2  ">
          <span className=" ssm:text-lg lg:text-sm text-gray-200 font-bebos font-medium mb-5 mt-5 flex flex-col gap-5">
            <p className="border-t pt-2">{details}</p>
          </span>

          <span className=" inline-block px-3rounded-md text-sm text-green-100 py-2 border-t ">
            Tech Stacks:
          </span>
          <div className="ssm:text-lg lg:text-sm space-x-2 space-y-2">
            {[
              tech1,
              tech2,
              tech3,
              tech4,
              tech5,
              tech6,
              tech7,
              tech8,
              tech9,
              tech10,
            ].map(
              (tech, index) =>
                tech && (
                  <span
                    key={index}
                    className="inline-block px-2 bg-emerald-300 rounded-xs  text-gray-800 py-2 font-thin"
                  >
                    {tech}
                  </span>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutItem;
