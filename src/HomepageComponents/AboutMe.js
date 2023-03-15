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
            As a web developer, I excel in crafting captivating websites using
            React, Javascript, and CSS. In particular, my passion for Web 3
            inspires me to build blockchain and crypto applications. When I'm
            not programming, I enjoy playing poker, immersing myself in the
            imaginative realm of anime, and sharing my thoughts and creations on{" "}
            <a
              className="crypto-link"
              href="https://twitter.com/RiceFarmerNFT"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            .
          </p>
        </div>
        <div className="about-me-text1">
          <p>
            Coding has opened up a whole new world of problem-solving for me,
            unleashing a wave of creativity I never knew I had. I'm eager to
            continue growing and improving as a front-end developer in this
            exciting field.
          </p>
          <p>
            If you're interested in my work, please feel free to check out my{" "}
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
            me for your development needs.
          </p>
        </div>
      </div>
    </>
  );
}
