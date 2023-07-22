import React, { useState, useEffect } from "react";
import {
  image1front,
  image1back,
  image2back,
  image2front,
  image3back,
  image3front,
  image4back,
  image4front,
  image5back,
  image5front,
} from "../images/index";
import "./drops.css";

const Drops = () => {
  const cardsData = [
    {
      price: "RS 1500",
      description: "Puff Sleeved Printed Dress",
      frontUrl: image1front,
      backUrl: image1back,
    },
    {
      price: "RS 2800",
      description: "Shirt Collar Button Up Dress",
      frontUrl: image2front,
      backUrl: image2back,
    },
    {
      price: "RS 2750",
      description: "Red Solid Bodycon Dress",
      frontUrl: image3front,
      backUrl: image3back,
    },
    {
      price: "RS 1200",
      description: "Embroidered Regular Top",
      frontUrl: image4front,
      backUrl: image4back,
    },
    {
      price: "RS 2500",
      description: "Blue Denim Jacket",
      frontUrl: image5front,
      backUrl: image5back,
    },
  ];

  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const [isHoverable, setIsHoverable] = useState(true); // Default to true (assume hoverable)

  useEffect(() => {
    const checkHoverSupport = () => {
      const mediaQuery = window.matchMedia("(hover: hover)");
      setIsHoverable(mediaQuery.matches);
    };

    checkHoverSupport();

    window.addEventListener("resize", checkHoverSupport);

    return () => {
      window.removeEventListener("resize", checkHoverSupport);
    };
  }, []);

  const handleCardClick = (index) => {
    setActiveCardIndex(index === activeCardIndex ? null : index);
  };

  if (isHoverable) {
    return (
      <div className="drops-container">
        <h1 className="drops-heading">Latest Drops</h1>
        <div className="cards-container">
          {cardsData.map((card, index) => (
            <div className="card" key={index}>
              <div
                className="card-front"
                style={{ backgroundImage: `url(${card.frontUrl})` }}
              ></div>
              <div
                className="card-back"
                style={{ backgroundImage: `url(${card.backUrl})` }}
              >
                <div className="inner">
                  <h3>{card.price}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="drops-container">
        <h1 className="drops-heading">Latest Drops</h1>
        <div className="cards-container">
          {cardsData.map((card, index) => (
            <button
              className="card"
              key={index}
              onClick={() => handleCardClick(index)}
            >
              <div
                className={`card-front ${
                  activeCardIndex === index ? "flip" : ""
                }`}
                style={{ backgroundImage: `url(${card.frontUrl})` }}
              ></div>
              <div
                className={`card-back ${
                  activeCardIndex === index ? "flip" : ""
                }`}
                style={{ backgroundImage: `url(${card.backUrl})` }}
              >
                <div className="inner">
                  <h3>{card.price}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }
};

export default Drops;
