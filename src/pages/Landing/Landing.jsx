import "./styles/Landing.css";
import Hero from "./Hero";
import About from "./About";
import Verse from "./Verse";
import Roadmap from "./Roadmap";
import Team from "./Team";
import Faq from "./Faq";

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
        <div className="roadmap">
          <Roadmap />
          <Team />
        </div>
      </div>
      <div className="main-container">
        <Faq />
      </div>
    </div>
  );
};

export default Landing;
