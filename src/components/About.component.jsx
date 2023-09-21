import "./about.css";
import { aboutus } from "../images/index";

var About = () => {
  return (
    <>
      <div className="About" id="about">
        <div className="about-heading">
          <h1>About Us</h1>
          <p>
            Indulge in a world of exquisite fashion and embrace your unique
            style at Perfect Ladies Shop. Discover the latest trends, timeless
            classics, and accessories that elevate your look to new heights.
          </p>
        </div>
        <div className="container">
          <div className="about">
            <div className="about-image">
              <img src={aboutus} alt="" />
            </div>
            <div className="about-content">
              <h2>Where fashion meets perfection</h2>
              <p>
                Welcome to Perfect Ladies Shop, where quality meets
                affordability. We're dedicated to providing women with a wide
                range of stylish and fashionable clothing options. Our goal is
                to help you reach your best state by offering carefully curated
                pieces that make you feel confident and beautiful. Discover
                fashion that fits your unique style today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
