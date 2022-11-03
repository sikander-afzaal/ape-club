import "./styles/Roadmap.css";

const Roadmap = () => {
  return (
    <>
      <h1 className="titan">Roadmap</h1>
      <div className="roadmap-grid">
        <img src="/assets/monkey-space.png" alt="" className="space-monkey" />
        <div className="star-wrapper">
          <img src="/assets/star.png" alt="" />
        </div>
        <div className="road-item">
          <h2 className="titan">New Website/ Staking</h2>
          <ul>
            <li>
              We plan to deploy a new front end/ website allowing our holders to
              access their NFT and Bananas!
            </li>
          </ul>
        </div>
        <div className="road-item right">
          <h2 className="titan">Weekly Events!</h2>
          <ul>
            <li>
              The Cool Ape Club will be hosting a variety of events weekly!
              Ranging from Twitter Spaces, Game Knights, Giveaways, Collabs &
              more!
            </li>
          </ul>
        </div>
        <div className="star-wrapper">
          <img src="/assets/star.png" alt="" />
        </div>
        <div className="empty"></div>
        <div className="empty"></div>
        <div className="star-wrapper last-star">
          <img src="/assets/star.png" alt="" />
        </div>
        <div className="road-item">
          <h2 className="titan">Implement Bananas Economy/ Marketplace</h2>
          <ul>
            <li>
              Building out our Bananas contract! Our goal is to have every C.A.C
              holder earn passively for every ape in their wallet. Following a
              successful contract we will release an on-site Marketplace! This
              Market will allow holders to purchase Discounted NFTs, Enter
              Raffles, Vote on Charity all just for being a member!
            </li>
          </ul>
        </div>

        <div className="road-item right">
          <h2 className="titan">Building C.A.C Universe</h2>
          <ul>
            <li>
              Building C.A.C Universe will be done by implementing various C.A.C
              NFTs into our new Ape Shorts/ TikToks! Our plan is to build a cast
              of sorts, allowing for various plots and story telling! We will
              gladly feature holder apes, future collaborators & more!
            </li>
          </ul>
        </div>
        <div className="star-wrapper last-star">
          <img src="/assets/star.png" alt="" />
        </div>
      </div>
      <div className="road-item center-item">
        <h2>Mystical Wizard Event</h2>
        <p>
          There’s a rumor in the Jungle, a Mystical Wizard exists deep within
          the banana trees hidden from all other apes! The legend says he can
          turn bananas gold, or even the trees themselves!
        </p>
      </div>
    </>
  );
};

export default Roadmap;
