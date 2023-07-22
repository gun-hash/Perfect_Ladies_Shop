import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

var Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-content">
          <h3>Perfect Ladies Shop</h3>
          <p>
            Indulge in a world of exquisite fashion and embrace your unique
            style at Perfect Ladies Shop. Discover the latest trends, timeless
            classics, and accessories that elevate your look to new heights.
          </p>
          <ul className="socials">
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faPhone} />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>
            Copyright &copy;2023 PerfectLadiesShop. Designed by{" "}
            <span>
              <a href="https://github.com/gun-hash" target="blank">
                Binit Thakurathi
              </a>
            </span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
