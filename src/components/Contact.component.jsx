import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./contact.css";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

var Contact = () => {
  const contactData = [
    {
      icon: faEnvelope,
      text: "email@domain.com",
    },
    {
      icon: faPhone,
      text: "+977-123456",
    },
    {
      icon: faLocationDot,
      text: "Mahendranagar",
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
      <>
        <div id="contact">
        <h1 className="contact-heading">Contact Us</h1>
        <div className="contact-info">
          {contactData.map((contact, index) => (
            <div className="card1" key={index}>
              <div className="card1-a">
                <FontAwesomeIcon className="card1-icon" icon={contact.icon} />
              </div>
              <p className="p">{contact.text}</p>
            </div>
          ))}
        </div>
          </div>
      </>
    );
  } else {
    return (
      <>
        <div id="contact">
        <h1 className="contact-heading">Contact Us</h1>
        <div className="contact-info">
          {contactData.map((contact, index) => (
            <button
              className="card1"
              key={index}
              onClick={() => handleCardClick(index)}
            >
              <div
                className={`card1-a${
                  activeCardIndex === index ? ".click" : ""
                }`}
              >
                <FontAwesomeIcon
                  className={`card1-icon${
                    activeCardIndex === index ? ".click" : ""
                  }`}
                  icon={contact.icon}
                />
              </div>
              <p className={`p${activeCardIndex === index ? ".click" : ""}`}>
                {contact.text}
              </p>
            </button>
          ))}
        </div>
          </div>
      </>
    );
  }
};

export default Contact;
