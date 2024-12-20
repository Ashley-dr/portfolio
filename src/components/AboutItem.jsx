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
    <div className="mt-64">
      <div className="grid grid-cols-2  w-full max-w-[500px]   mx-14 lg:mx-44 ">
        <img
          src={images}
          className="shrink-0 overflow-hidden outline outline-emerald-300 outline-offset-8 w-32 rounded-full  ml-3 mt-10 "
        />

        <div className="w-[370px]  flex flex-wrap gap-2  ">
          <span className="inline-block px-2 bg-emerald-300 rounded-md font-semibold text-gray-600">
            {year}
          </span>
          <span className="inline-block px-2 bg-emerald-300 rounded-md font-semibold text-gray-600">
            {title}
          </span>
          <span className="inline-block px-2 bg-emerald-300 rounded-md font-semibold text-gray-600">
            {duration}
          </span>
          <br></br>
          <span className=" ssm:text-lg lg:text-sm text-gray-200 font-bebos font-medium mb-5 mt-5">
            {details}
          </span>

          <span className=" inline-block px-3 bg-emerald-300/60 rounded-md font-semibold text-green-100 py-2">
            My Tech Stacks:
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
                    className="inline-block px-2 bg-emerald-200 rounded-md font-semibold text-gray-800 py-2"
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
