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
          <a href="https://discord.com/invite/jj9HrGH2a6" target={"blank"}>
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a
            href="https://twitter.com/CoolApeClub?s=20&t=9MU2mKp9BBR1-W0jokeOvQ"
            target={"blank"}
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.instagram.com/thecoolapeclub/?igshid=YmMyMTA2M2Y%3D"
            target={"blank"}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
