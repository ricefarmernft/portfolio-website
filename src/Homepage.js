import React from "react";
import Navbar from "./HomepageComponents/Navbar.js";
import Home from "./HomepageComponents/Home";
import AboutMe from "./HomepageComponents/AboutMe";
import Portfolio from "./HomepageComponents/Portfolio";
import { data } from "./data.js";
import Crypto from "./HomepageComponents/Crypto";
import Skills from "./HomepageComponents/Skills";
import Contact from "./HomepageComponents/Contact";

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
