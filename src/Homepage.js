import React from "react";
import Navbar from "./Navbar.js";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import { data } from "./data.js";
import Crypto from "./Crypto";
import Skills from "./Skills";
import Contact from "./Contact";
import DarkMode from "./DarkMode.js";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <AboutMe />
      <div className="container-title">
        <h1>Portfolio</h1>
      </div>
      {data.map((project) => {
        return <Portfolio key={project.id} data={project} />;
      })}
      <Crypto />
      <Skills />
      <Contact />
    </>
  );
};

export default Homepage;
