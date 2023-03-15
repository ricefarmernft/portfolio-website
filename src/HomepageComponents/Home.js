export default function Home() {
  return (
    <>
      <div className="container home">
        <div className="home-img">
          <img
            className="home-img-item"
            src="https://res.cloudinary.com/dctoezvq5/image/upload/v1668189625/portfolio/IMG_7717_t2nnb7.jpg"
            alt="Ceejay Xiong"
          ></img>
        </div>
        <div className="home-text">
          <span className="home-text-hello">Hello!</span>
          <p>
            I'm <span className="home-text-name">Ceejay</span>, a Software
            Engineer based in Chicago.
          </p>
        </div>
      </div>
    </>
  );
}
