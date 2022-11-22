export default function Portfolio(props) {
  const { title, description, image, alt, href } = props.data;

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
        <a className="link" href={href} target="_blank" rel="noreferrer">
              View Project
            </a>
        </div>
      </div>
    </>
  );
}
