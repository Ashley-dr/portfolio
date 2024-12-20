/* eslint-disable no-unused-vars */
import React from "react";
import Projectitem from "./Projectitem";
import project1 from "../assets/sample1.jpg";
import project2 from "../assets/sample2.jpg";
import project3 from "../assets/sample3.jpg";
import ctu from "../assets/ctu-removebg.png";
import coffee from "../assets/coffe-removebg.png";
import blog from "../assets/blog-removebg.png";
const Projects = () => {
  const dataArray = [
    {
      img: ctu,
      title: "CTU Marketplace",
      about:
        "A Capstone Project E-Commerce from CTU Campus. Can BUY/SELL/TRADE.",
      stack1: "HTML",
      stack2: "TailwindCSS",
      stack3: "ReactJS",
      stack4: "MonggoDB",
      stack5: "ExpressJS",
      stack6: "NodeJS",
      stack7: "ChakraUI",

      dom: "https://cebutechmarketplace.com/",
    },
    {
      img: ctu,
      title: "JRS Express Danao",
      about:
        "JRS Express is a real time tracking system over courier and customer to track items to be delivered.",
      stack1: "HTML",
      stack2: "TailwindCSS",
      stack3: "ReactJS",
      stack4: "MonggoDB",
      stack5: "ExpressJS",
      stack6: "NodeJS",
      stack7: "ShadCN",

      dom: "https://jrsexpress.onrender.com/",
    },
    {
      img: ctu,
      title: "Book reader",
      about:
        "A simple project for students library about 17 sustainable development goals.",
      stack1: "HTML",
      stack2: "TailwindCSS",
      stack3: "ReactJS",
      stack4: "Firebase",
      stack7: "ChakraUI",

      dom: "https://book-reader-k3ak.onrender.com/",
    },
    {
      img: ctu,
      title: "SSG Forum",
      about: "Web forum for SSG students in CTU",
      stack1: "HTML",
      stack2: "TailwindCSS",
      stack3: "ReactJS",
      stack4: "Firebase",
      stack7: "ChakraUI",
      stack8: "ReactMailer",

      dom: "https://ssg-ctu.onrender.com/",
    },
    {
      img: ctu,
      title: "CTU",
      about:
        "A simple web for a small project, Cebu Technological University, Site for admission and enrollment in CTU-Danao Campus.",
      stack1: "HTML",
      stack2: "CSS",
      stack3: "JavaScript",
      stack4: "MySql",
      stack5: "PHP",
      dom: "No Domain Available.",
    },
    {
      img: coffee,
      title: "Stall",
      about:
        "A simple web for a small project, Food Shop Website for a small stall selling Snacks and more.",
      stack1: "HTML",
      stack2: "CSS",
      stack3: "JavaScript",
      stack4: "jQuery",
      dom: "No Domain Available.",
    },
    {
      img: blog,
      title: "My-Blog",
      about:
        "A Project with a Side Server language contains information and has Log in & Register System. Used for Blog Personal Info, also CRUD.",
      stack1: "HTML",
      stack2: "CSS",
      stack3: "JavaScript",
      stack4: "jQuery",
      stack5: "PHP",
      stack6: "MariaDB",
      dom: "No Domain Available.",
    },
  ];
  return (
    <div className="h-[500px] m-auto absolute w-full grid justify-items-center mt-64">
      <div
        id="projects"
        className="max-w-[900px] pb-10 pt-[600px] m-auto flex flex-wrap gap-2 "
      >
        <h1 className="mx-16 font-bold align-center text-emerald-200 font-bebas mb-10 m-auto">
          Projects
        </h1>
        <div className="grid gap-32 grid-cols-1 justify-center">
          {dataArray.map((items, id) => (
            <Projectitem
              key={id}
              img={items.img}
              title={items.title}
              about={items.about}
              stack1={items.stack1}
              stack2={items.stack2}
              stack3={items.stack3}
              stack4={items.stack4}
              stack5={items.stack5}
              stack6={items.stack6}
              stack7={items.stack7}
              stack8={items.stack8}
              dom={items.dom}
            />
          ))}
        </div>
      </div>
      <p className="text-teal-100 text-[16px]  text-center font-bebos w-[600px]">
        PS: For more info my portfolio contains no domains or live server on my
        projects above. I don&apos;t have my own domain or else i don&apos;t
        deploy my small projects into a free web hosting, and only few projects
        I published inside my portfolio because i&apos;m still working on any
        others that contains frameworks also and about the others that i&apos;ve
        already finished is i will published them too soon in my portfolio with
        a live server, thanks.
      </p>
    </div>
  );
};

export default Projects;
