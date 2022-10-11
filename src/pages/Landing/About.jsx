import "./styles/About.css";

const About = () => {
  return (
    <div className="about">
      <img src="/assets/wave.svg" alt="" />
      <div className="container">
        <div className="about-box">
          <h2>
            As the world drew out of darkness and the sun began to rise,
            mystical yellow objects began to appear in trees throughout the
            Capeverse (Cool-Ape Metaverse). These strange objects caught the
            attention of the Cool Apes who made it their objective to claim
            every single one of them. Join the Cool Apes as we journey through
            the Capeverse! 5.5K NFTs, 0ETH, December 28th.
          </h2>
        </div>
      </div>
      <div className="about-row">
        <div className="left-about-row">
          <h3 className="titan">The Cool Ape Club</h3>
          <p>
            Cool Ape Club is a collection of 5555 apes that have been scattered
            across the Metaverse in search of the mystical $BANANAZ. Only you
            can bring them together and help them obtain every single one of
            them. Holders of Cool Apes will also gain access to Jungle Game in
            2022; a full feature play-to-earn adventure (P2E) ecosystem with
            over 500 unique scenarios, interactive minigames and both stealing
            and breeding mechanisms.
          </p>
          <button className="connect">Join Discord</button>
        </div>
        <img className="monkey-about" src="/assets/about-img1.png" alt="" />
      </div>
      <div className="about-row">
        <img src="/assets/about-img2.png" alt="" />
        <div className="left-about-row">
          <h3 className="titan">Organic Non GMO Bananaz</h3>
          <p>
            $BANANAZ are the governance token of the far away Capeverse, as well
            as Jungle Game. Cool Ape holders passively earn $BANANAZ for just
            owning a Cool Ape, which can be used for various Capeverse ventures
            (eg Land claiming in any 7 regions). In addition to this, $BANANAZ
            are required to participate in Jungle Game and can also be used
            within the Token Shop and at the Mysterious Wizards Tower.
          </p>
          <button className="connect">Staking</button>
        </div>
      </div>
    </div>
  );
};

export default About;
