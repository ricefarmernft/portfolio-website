import { Link } from "react-router-dom";

export default function Portfolio(props) {
  const { title, description, image, alt, id } = props.data;

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="portfolio" id="portfolio">
        <h3>{title}</h3>
        <div className="container portfolio-item">
          <div className="portfolio-item-text">
            <p>{description}</p>
          </div>
          <div className="portfolio-img">
            <img className="portfolio-img-item" src={image} alt={alt}></img>
          </div>
        </div>
        <div className="portfolio-link">
          <Link className="link" onClick={handleClick} to={`/project/${id}`}>
            View Project
          </Link>
        </div>
      </div>
    </>
  );
}
