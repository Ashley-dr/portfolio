import React from 'react'
import Projectitem from './Projectitem'
import project1 from '../assets/sample1.jpg'
import project2 from '../assets/sample2.jpg'
import project3 from '../assets/sample3.jpg'
import ctu from '../assets/ctu-removebg.png'
import coffee from '../assets/coffe-removebg.png'
import blog from '../assets/blog-removebg.png'
const Projects = () => {
  const dataArray = [{
    img: ctu,
    title: 'CTU',
    about: 'A simple web for a small project, Cebu Technological University, Site for admission and enrollment in CTU-Danao Campus.',
    stack1: 'HTML',
    stack2: 'CSS',
    stack3: 'JavaScript',
    stack4: 'MySql',
    stack5: 'PHP',
    dom: 'No Domain Available.',
  },
  {
    img: coffee,
    title: 'Stall',
   about: 'A simple web for a small project, Food Shop Website for a small stall selling Snacks and more.',
   stack1: 'HTML',
    stack2: 'CSS',
    stack3: 'JavaScript',
    stack4: 'jQuery',
   dom: 'No Domain Available.',
  },
  {
    img: blog,
    title: 'My-Blog',
    about: 'A Project with a Side Server language contains information and has Log in & Register System. Used for Blog Personal Info, also CRUD.',
    stack1: 'HTML',
     stack2: 'CSS',
     stack3: 'JavaScript',
     stack4: 'jQuery',
     stack5: 'PHP',
     stack6: 'MariaDB',
    dom: 'No Domain Available.',
   }
]
  return (
    <div className='h-[500px] m-auto absolute w-full mt-220x'>
    <div id='projects' className='max-w-[900px] pb-10 pt-32 m-auto flex flex-wrap gap-2 '>
    <h1 className='text-white font-bold align-center text-emerald-200 font-bebas mb-10 m-auto'>Projects</h1>
      <div className='grid gap-72 grid-cols-1 justify-center'>
       {dataArray.map((items,id) => (
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
        dom={items.dom}
        />
        ))}
          <p className='text-teal-100 text-[16px] text-center font-bebos'>PS: For more info my portfolio contains no domains or live server on my projects above. I don't have my own domain or else i don't deploy my small projects into a free web hosting, and only few projects I published inside my portfolio because i'm still working on any others that contains frameworks also and about the others that i've already finished is i will published them too soon in my portfolio with a live server, thanks.</p>
      </div>
    </div>
    </div>
  )
}

export default Projects
