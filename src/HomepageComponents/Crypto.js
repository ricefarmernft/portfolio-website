export default function Crypto() {
  return (
    <>
      <div className="container-title" id="crypto">
        <h1>Crypto</h1>
      </div>
      <div className="container crypto">
        <div className="crypto-text">
          <p>
            I am extremely passionate about crypto and everything related to web
            3. Since I discovered Bitcoin in 2016, I have been fascinated with
            blockchain technology and impressed with the growth of the industry.
            I have experience working with blockchain data, smart contracts, and
            NFTs. On{" "}
            <a
              className="crypto-link"
              href="https://twitter.com/RiceFarmerNFT"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            , I am a content creator and have amassed over 24k+ followers.
          </p>
        </div>
        <div className="crypto-img">
          <img
            className="crypto-img-item"
            alt="NFT Collection"
            src="https://res.cloudinary.com/dctoezvq5/image/upload/v1668276832/portfolio/portfolio-image_b2lvt3.png"
          ></img>
          <br />
          <a
            className="link"
            href="https://opensea.io/RiceFarmerVault"
            target="_blank"
            rel="noreferrer"
          >
            NFT Collection
          </a>
        </div>
      </div>
    </>
  );
}
