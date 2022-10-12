import "./styles/Landing.css";
import Hero from "./Hero";
import About from "./About";
import Verse from "./Verse";

const Landing = () => {
  return (
    <div className="container landing">
      <Hero />
      <About />
      <Verse />
    </div>
  );
};

export default Landing;
