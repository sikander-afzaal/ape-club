import {
  faDiscord,
  faInstagram,
  faMedium,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [header, setHeader] = useState(false);
  return (
    <div className="container">
      {header && (
        <div onClick={() => setHeader(false)} className="overlay"></div>
      )}
      <header>
        <Link to={"/"} className="logo titan">
          COOL APE CLUB
        </Link>
        <nav className={`${header ? "open-header" : ""}`}>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() => setHeader(false)}
            className="header-toggle"
          />
          <Link onClick={() => setHeader(false)} to="/staking">
            Staking
          </Link>
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
            <FontAwesomeIcon icon={faMedium} />
            <a
              href="https://www.instagram.com/thecoolapeclub/?igshid=YmMyMTA2M2Y%3D"
              target={"blank"}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <button className="connect">Connect Wallet</button>
        </nav>
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setHeader(true)}
          className="header-toggle"
        />
      </header>
    </div>
  );
};

export default Header;
