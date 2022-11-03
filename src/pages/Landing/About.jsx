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
            Jungle ( Cool-Ape Metaverse). These strange objects caught the
            attention of the cool apes who made it their objective to claim
            every single one of them. Join the Cool Apes As we journey through
            Web3 and the Jungle!
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
            them. Holders of Cool Apes will gain access to our Banana Market; a
            onsite ecosystem ran by $BANANAZ. Allowing holders to buy items from
            the onsite marketplace or vote on their favorite “Cool To Care”
            charity’s!
          </p>
          <button className="connect">Join Discord</button>
        </div>
        <img className="monkey-about" src="/assets/about-img1.png" alt="" />
      </div>
      <div className="about-row">
        <img src="/assets/about-img2.png" alt="" />
        <div className="left-about-row">
          <h3 className="titan">Organic Non GMO $Bananaz</h3>
          <p>
            $BANANAZ are the governance token of the far away Jungle, as well as
            a voting tool! Cool Ape holders passively earn $BANANAZ for just
            owning a Cool Ape, which can be used for various Jungle ventures (eg
            Token Market, Entering Raffles, Voting on “Cool To Care” donations.)
            In addition to this, $BANANAZ are required to participate in the
            Jungle Experience and can also be used within the Mysterious Wizards
            Tower in the future!
          </p>
          <button className="connect">Staking</button>
        </div>
      </div>
    </div>
  );
};

export default About;
