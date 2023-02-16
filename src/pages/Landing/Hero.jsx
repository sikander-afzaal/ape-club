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
      <a
        href="https://opensea.io/collection/coolapeclubofficial"
        target={"blank"}
        className="buy"
      >
        Buy on OpenSea
      </a>
      <Splide
        options={{
          perPage: 4,
          gap: "2rem",
          width: "100%",
          focus: "center",
          arrows: true,
          pagination: false,
          perMove: 1,
          type: "loop",
          breakpoints: {
            1661: {
              perPage: 3,
            },
            1200: {
              perPage: 2,
            },
            750: {
              perPage: 1,
            },
          },
        }}
      >
        <SplideSlide>
          <img src="/assets/nft1.png" alt="" className="nft" />
        </SplideSlide>
        <SplideSlide>
          <img src="/assets/nft2.png" alt="" className="nft" />
        </SplideSlide>
        <SplideSlide>
          <img src="/assets/nft3.png" alt="" className="nft" />
        </SplideSlide>
        <SplideSlide>
          <img src="/assets/nft4.png" alt="" className="nft" />
        </SplideSlide>
        <SplideSlide>
          <img src="/assets/nft5.png" alt="" className="nft" />
        </SplideSlide>
      </Splide>
      {/* <img src="/assets/wave.svg" alt="" className="wave" /> */}
    </div>
  );
};

export default Hero;
