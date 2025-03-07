/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
const Projectitem = ({
  img,
  title,
  about,
  stack1,
  stack2,
  stack3,
  stack4,
  stack5,
  stack6,
  stack7,
  stack8,
  dom,
}) => {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <div className="grid grid-cols-2 ">
        <div className="w-full max-w-[500px]   mx-16 lg:mx-0 ">
          <h1 className="mb-5 text-4xl font-bebos text-teal-400 font-medium">
            {title}
          </h1>

          <div className="flex flex-wrap gap-2 w-96">
            <p className="bg-gray-900/80 px-3 py-1 rounded text-emerald-600 font-bebos font-bold">
              Stacks:
            </p>
            {[
              stack1,
              stack2,
              stack3,
              stack4,
              stack5,
              stack6,
              stack7,
              stack8,
            ].map(
              (stack, index) =>
                stack && (
                  <span
                    key={index}
                    className="bg-gray-900/80 px-3 py-1 rounded text-emerald-400 font-bebos font-bold"
                  >
                    {stack}
                  </span>
                )
            )}
          </div>

          <p className="mb-5 mt-5 text-teal-200 font-bebos">{about}</p>
          {dom === "No Domain Available." ? (
            <>
              {" "}
              <span className=" p-2 bg-gray-900 rounded rounded-m text-red-900">
                {dom}
              </span>
            </>
          ) : (
            <>
              {" "}
              <span className="p-2 bg-gray-900 rounded rounded-m text-emerald-900">
                <a
                  href={dom}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  {dom}
                </a>
              </span>
            </>
          )}
        </div>
        <img
          className="ssm: max-w-[300px] lg:max-w-[500px] ssm: mx-20 lg:mx-0 ssm: mt-32 lg:mt-0"
          src={img}
        />
      </div>
    </ScrollAnimation>
  );
};

export default Projectitem;
