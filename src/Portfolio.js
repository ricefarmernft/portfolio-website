export default function Portfolio(props) {
  const { title, description, image, alt, href } = props.data;

  return (
    <>
      <div className="portfolio" id="portfolio">
        <div className="container portfolio-item">
          <div className={props.textClass}>
            <p><strong>{title}</strong></p>
            <p>{description}</p>
            <br />
            <a className="link" href={href} target="_blank" rel="noreferrer">View Project</a>
          </div>
          <div className={props.imageClass}>
            <img
              className="portfolio-img-item"
              src={image}
              alt={alt}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
