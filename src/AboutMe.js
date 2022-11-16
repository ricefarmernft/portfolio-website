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
            working as a financial analyst for a top 10 national bank and a
            crypto startup, Ceejay became interested in Web Development. He left
            his job and is currently pursuing programming full-time with an
            emphasis on Javascript and React.
          </p>
        </div>
        <div className="about-me-text1">
          <p>
            Ceejay is deeply interested in Web 3 and crypto. Outside of work, he
            enjoys reading, watching movies, and staying active.
          </p>
          <br/>
          <p>
            Check out his <Link
                className="about-me-link"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-75}
                duration={500}
              >
                portfolio
              </Link> or <Link
                className="about-me-link"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
              >
                contact
              </Link> him for your web development needs.
          </p>
        </div>
      </div>
    </>
  );
}
