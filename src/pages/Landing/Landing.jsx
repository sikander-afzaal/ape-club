import "./styles/Landing.css";
import Hero from "./Hero";
import About from "./About";

const Landing = () => {
  return (
    <div className="container landing">
      <Hero />
      <About />
    </div>
  );
};

export default Landing;
