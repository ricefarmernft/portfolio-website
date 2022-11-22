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
            Ceejay Xiong studied Accounting at The Ohio State University. After
            working as a financial analyst for a national bank and a crypto
            startup, Ceejay became interested in Web Development. He is
            currently pursuing front-end programming full-time.
          </p>
        </div>
        <div className="about-me-text1">
          <p>
            Ceejay is deeply interested in Web 3 and crypto. Outside of work, he
            enjoys reading, watching movies, and staying active.
          </p>
          <p>
            Check out his{" "}
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
            or{" "}
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
            him for your web development needs.
          </p>
        </div>
      </div>
    </>
  );
}
