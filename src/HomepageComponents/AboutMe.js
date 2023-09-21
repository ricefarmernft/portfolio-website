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
            I'm not just another coder, I bring websites to life with Next.js,
            React, and Tailwind CSS. But that's not all. I've also taken the
            rollercoaster ride of entrepreneurship, navigating the high-octane
            startup world to breathe life into brilliant ideas. What really
            lights my fire, though? It's Web 3 and AI. I'm on a mission to shape
            the future by developing cutting-edge blockchain and machine
            learning applications.
          </p>
        </div>
        <div className="about-me-text1">
          <p>
            When I'm not programming, I enjoy watching movies, playing{" "}
            <a
              className="crypto-link"
              href="https://www.youtube.com/channel/UCc7HfjGvO7KtBotlmcVoLIA"
              target="_blank"
              rel="noreferrer"
            >
              volleyball
            </a>{" "}
            at the beach, and sharing my thoughts and creations on{" "}
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
