import "./styles/Team.css";
import TeamBox from "../../components/TeamBox/TeamBox";

const Team = () => {
  const TEAM__DATA = [
    {
      img: "team1.jpeg",
      name: "ALEX (PIG)",
      designation: "Owner",
      twitter: "https://twitter.com/PlGnft",
      desc: "Just a Florida man chasing another high in the Metaverse",
    },
    {
      img: "team1.jpeg",
      name: "ALEX (PIG)",
      designation: "Owner",
      twitter: "https://twitter.com/PlGnft",
      desc: "Just a Florida man chasing another high in the Metaverse",
    },
    {
      img: "team1.jpeg",
      name: "ALEX (PIG)",
      designation: "Owner",
      twitter: "https://twitter.com/PlGnft",
      desc: "Just a Florida man chasing another high in the Metaverse",
    },
    {
      img: "team1.jpeg",
      name: "ALEX (PIG)",
      designation: "Owner",
      twitter: "https://twitter.com/PlGnft",
      desc: "Just a Florida man chasing another high in the Metaverse",
    },
    {
      img: "team1.jpeg",
      name: "ALEX (PIG)",
      designation: "Owner",
      twitter: "https://twitter.com/PlGnft",
      desc: "Just a Florida man chasing another high in the Metaverse",
    },
    {
      img: "team1.jpeg",
      name: "ALEX (PIG)",
      designation: "Owner",
      twitter: "https://twitter.com/PlGnft",
      desc: "Just a Florida man chasing another high in the Metaverse",
    },
    {
      img: "team1.jpeg",
      name: "ALEX (PIG)",
      designation: "Owner",
      twitter: "https://twitter.com/PlGnft",
      desc: "Just a Florida man chasing another high in the Metaverse",
    },
  ];
  return (
    <div className="team">
      <h1 className="titan">Meet The Team</h1>
      <div className="team-row">
        {TEAM__DATA.map((elem, idx) => {
          return <TeamBox {...elem} key={idx + "team"} />;
        })}
      </div>
    </div>
  );
};

export default Team;
