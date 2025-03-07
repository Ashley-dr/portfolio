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
      <div className="xs:w-[1380px] sm:w-full h-full   bg-gradient-to-tr from-gray-950 via-gray-900 to-gray-800">
        <Sidenav />

        <Main />
        {/* <About /> */}

        {/* <Projects /> */}

        {/* <Contact /> */}
      </div>
    </>
  );
}

export default App;
