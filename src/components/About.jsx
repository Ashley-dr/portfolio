import React from "react";
import AboutItem from "./AboutItem";
const dataArray = [
  {
    year: "2001-05-14",
    title: "Male",
    duration: "22 years old",
    details:
      "Hi, My name is Ashley Durano Rodriguez from Guinsay Danao City Cebu, currently 3rd year College student with a course of Bachelor of Science in Information Technology Major with Programming more on Web developing, as a student I am willing to take much more to learn, beforehand I do some living from developing even though it is not some kind large projects but i believe taking some small effort is a starter for us to grow.",
    tech1: "Tailwindcss",
    tech2: "JavaScript",
    tech3: "ReactJS",
    tech4: "Mysql",
    tech5: "Git",
    tech6: "Xml",
  },
];

const About = () => {
  return (
    <div className="h-[500px] m-auto absolute w-full mt-80">
      <div id="about" className="max-w-[800px] m-auto  mt-20 pt-32">
        <h1 className=" font-bold font-bebas text-emerald-200 text-center mb-10">
          About
        </h1>
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
          />
        ))}
      </div>
    </div>
  );
};

export default About;
