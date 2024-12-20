/* eslint-disable no-unused-vars */
import React from "react";
import AboutItem from "./AboutItem";
const dataArray = [
  {
    year: "2001-05-14",
    title: "Male",
    duration: "23 years old",
    details:
      "Hi, I'm Ashley Durano Rodriguez from Guinsay, Danao City, Cebu. I'm a 4th-year Bachelor of Science in Information Technology student, specializing in Programming with a focus on Web Development. As a student, I'm eager to learn and grow. I've already gained some experience by working on small development projects, which I believe are valuable stepping stones toward bigger opportunities.",
    tech1: "Tailwindcss",
    tech2: "JavaScript",
    tech3: "ReactJS",
    tech4: "MonggoDB",
    tech5: "Git",
    tech6: "Xml",
    tech7: "ExpressJS",
    tech8: "NodeJS",
    tech9: "Postgree",
    tech10: "React Native",
  },
];

const About = () => {
  return (
    <div className="h-[500px] m-auto absolute w-full ">
      <div
        id="about"
        className="max-w-[900px] pb-10 m-auto flex flex-wrap gap-2 "
      >
        {dataArray.map((items, id) => (
          <AboutItem
            key={id}
            year={items.year}
            title={items.title}
            duration={items.duration}
            details={items.details}
            tech1={items.tech1}
            tech2={items.tech2}
            tech3={items.tech3}
            tech4={items.tech4}
            tech5={items.tech5}
            tech6={items.tech6}
            tech7={items.tech7}
            tech8={items.tech8}
            tech9={items.tech9}
            tech10={items.tech10}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
