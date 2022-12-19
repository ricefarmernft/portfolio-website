import { Link } from "react-scroll";

export default function AboutMe() {
  return (
    <>
      <div className="container-title" id="about-me">
        <h1>About Me</h1>
      </div>
      <div className="container about-me">
        <div className="about-me-text">
          <p>
            I remember being the first one at my elementary school to get a flip
            phone when I was 8 years old. As I showed it off to my friends, more
            and more of them got flip phones and suddenly we were all texting
            and gaming together. That's when I first understood the power of Network
            Effects. Since then, I have always been on the cutting edge of
            technology.
          </p>
          <p>
            When I was laid off in August 2022, I seized the moment, opting to
            rely on my savings to dive headfirst into Front-End Development.
          </p>
        </div>
        <div className="about-me-text1">
          <p>
            The ability to create something from an idea in my head was never
            possible for me until I learned Javascript. Coding has given me an
            entirely new perspective on problem solving and has unlocked an
            extra creative gear. I am grateful to have taken this opportunity to
            learn this amazing skill.
          </p>
          <p>
            Feel free to check out my{" "}
            <Link
              className="about-me-link"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
            >
              portfolio
            </Link>{" "}
            and{" "}
            <Link
              className="about-me-link"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
            >
              contact
            </Link>{" "}
            me for your web development needs.
          </p>
        </div>
      </div>
    </>
  );
}
