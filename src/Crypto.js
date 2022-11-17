export default function Crypto() {
  return (
    <>
      <div className="container-title" id="crypto">
        <h1>Crypto</h1>
      </div>
      <div className="container crypto">
        <div className="crypto-text">
          <p>
            Ceejay is an avid crypto and Web 3 supporter and is heavily involved
            in the industry. He has experience with DeFi protocols, smart
            contracts, and NFTs. On{" "}
            <a
              className="crypto-link"
              href="https://twitter.com/RiceFarmerNFT"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            , he is a content creator and has amassed over 20k+ followers. He is
            also apart of numerous NFT communities and enjoys marketing and
            community building.
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
