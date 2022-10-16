import "./Footer.css";
import {
  faDiscord,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div
      className="container"
      style={{
        backgroundColor: "rgb(73, 95, 168)",
        position: "relative",
        zIndex: "5",
      }}
    >
      <footer>
        <h1 className="titan">© 2021 CoolApeClub</h1>
        <div className="social-div">
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
