import "./styles/Hero.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Hero = () => {
  return (
    <div className="landing-hero">
      <h1 className="titan">
        WELCOME TO <br /> THE JUNGLE
      </h1>
      <p className="titan">Are you ready to go bananaz?</p>
      <button className="buy">Buy on OS</button>
      <Splide
        options={{
          perPage: 4,
          gap: "2rem",
          width: "100%",
          arrows: true,
          pagination: false,
          perMove: 1,
          type: "loop",
          breakpoints: {
            1383: {
              perPage: 3,
            },
            1069: {
              perPage: 2,
            },
            750: {
              perPage: 1,
            },
          },
        }}
      >
        <SplideSlide>
          <img src="/assets/nft.png" alt="" className="nft" />
        </SplideSlide>
        <SplideSlide>
          <img src="/assets/nft.png" alt="" className="nft" />
        </SplideSlide>
        <SplideSlide>
          <img src="/assets/nft.png" alt="" className="nft" />
        </SplideSlide>
        <SplideSlide>
          <img src="/assets/nft.png" alt="" className="nft" />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Hero;
