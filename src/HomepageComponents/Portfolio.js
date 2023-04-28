import { Link } from "react-router-dom";

export default function Portfolio(props) {
  const { title, description, image, alt, href, id, link } = props.data;

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="portfolio" id={link}>
        <h3>{title}</h3>
        <div className="container portfolio-item">
          <div className="portfolio-item-text">
            <p>{description}</p>
          </div>
          <div className="portfolio-img">
            <a href={href} target="_blank" rel="noreferrer">
              <img className="portfolio-img-item" src={image} alt={alt}></img>
            </a>
          </div>
        </div>
        <div className="portfolio-link">
          <Link className="link" onClick={handleClick} to={`/${link}`}>
            View Project
          </Link>
        </div>
      </div>
    </>
  );
}
