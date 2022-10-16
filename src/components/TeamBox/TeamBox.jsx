import "./TeamBox.css";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TeamBox = ({ img, name, designation, desc, twitter }) => {
  return (
    <div className="team-box">
      <img src={`/assets/${img}`} alt="" />
      <h2>{name}</h2>
      <h3>{designation}</h3>
      <p>{desc}</p>
      <a href={twitter} target={"blank"}>
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </div>
  );
};

export default TeamBox;
