import "./styles/Landing.css";
import Hero from "./Hero";
import About from "./About";
import Verse from "./Verse";
import Roadmap from "./Roadmap";

const Landing = () => {
  return (
    <div className="container landing">
      <Hero />
      <About />
      <div className="relative">
        <Verse />
        <div className="gif">
          <h1 className="titan">Play the jungle game</h1>
          <button className="connect">Coming Soon</button>
        </div>
        <Roadmap />
      </div>
    </div>
  );
};

export default Landing;
