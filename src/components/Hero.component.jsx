import "./hero.css";
import Hero1 from "../images/hero-img.jpg";

function Hero() {
  return (
    <>
      <div className="hero-container">
        <img src={Hero1} width="100%" alt="" />
        <div className="hero-text">
          <h1>Perfect Ladies Shop - Where fashion meets perfection</h1>
          <p>
            Indulge in a world of exquisite fashion and embrace your unique
            style at Perfect Ladies Shop. Discover the latest trends, timeless
            classics, and accessories that elevate your look to new heights.
          </p>
          <button>Buy Now</button>
        </div>
      </div>
    </>
  );
}

export default Hero;
