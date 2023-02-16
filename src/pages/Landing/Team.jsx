import "./styles/Team.css";
import TeamBox from "../../components/TeamBox/TeamBox";

const Team = () => {
  const TEAM__DATA = [
    {
      img: "team1.jpg",
      name: "Chase (Cwix)",
      designation: "Co-Owner/ Project Lead/ Artist",
      twitter: "https://twitter.com/cwixgame?s=21&t=9Ang7i64Ok8S_Mn-NXbjSQ",
      desc: " Hey Frens, my name is Chase I’m an Artist  and Project Lead for CAC who has a focus and love for philanthropy. I love art and people, I’m happy to help in any way! ",
    },
    {
      img: "team2.jpg",
      name: "Garrett (Hobo) ",
      designation: "Co-owner/ Community Manger/ Speaker",
      twitter: "https://twitter.com/silent_hobo?s=21&t=9Ang7i64Ok8S_Mn-NXbjSQ",
      desc: "How y’all doing CAC! My name is Garrett Harrison aka Silent hobo. I speak on twitter spaces, help manage the twitter, and discord",
    },
    {
      img: "team3.jpg",
      name: "Cam ( Schopix )",
      designation: "Creative Manger/ Animator/ Social Media Manger",
      twitter:
        "https://twitter.com/schopixstudios?s=21&t=9Ang7i64Ok8S_Mn-NXbjSQ",
      desc: "Hey frens!! I'm Cam Schopen, but you can call me by my film and animation studio name Schopix! I create the lore, animations and video content as well as manage the short form video social media!",
    },
    {
      img: "team4.jpg",
      name: "Jarno (Ter) ",
      designation: "Co-Owner/ Moderator/ Marketing  ",
      twitter: "https://twitter.com/xterrrrr?s=21&t=9Ang7i64Ok8S_Mn-NXbjSQ",
      desc: "Sup apes, I’m Jarno aka Ter. Just a dutchie doing his thing, gym fanatic and thinks it’s cool to care. ",
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
