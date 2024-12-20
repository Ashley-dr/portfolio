/* eslint-disable no-unused-vars */
import { useState } from "react";

import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import About from "./components/About";
import Projects from "./components/Projects";

import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="">
        <Sidenav />
        <Main />
        <About />

        <Projects />

        <Contact />
      </div>
    </>
  );
}

export default App;
