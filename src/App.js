import "./App.css";
import Navbar from "./Navbar.js";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import { data } from "./data.js";
import Crypto from "./Crypto";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutMe />
      <div className="container-title">
        <h1>Portfolio</h1>
      </div>
      {data.map((project) => {
        return (
          <Portfolio
            textClass={
              project.id % 2 === 0
                ? "portfolio-item-text1"
                : "portfolio-item-text"
            }
            imageClass={
              project.id % 2 === 0 ? "portfolio-img1" : "portfolio-img"
            }
            key={project.id}
            data={project}
          />
        );
      })}
      <Crypto />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
