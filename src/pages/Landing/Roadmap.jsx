import "./styles/Roadmap.css";

const Roadmap = () => {
  return (
    <div className="roadmap">
      <h1 className="titan">Roadmap</h1>
      <div className="roadmap-grid">
        <img src="/assets/monkey-space.png" alt="" className="space-monkey" />
        <div className="star-wrapper">
          <img src="/assets/star.png" alt="" />
        </div>
        <div className="road-item">
          <h2 className="titan">Phase One: The Ressurection</h2>
          <ul>
            <li>
              A detailed roadmap for the future of the Cool Ape Club will be
              released
            </li>
            <li>
              A new team with experienced and passionate members will be formed
              to help the success of the project to the fullest extent
            </li>
            <li>
              Community outreach events will be planned and carried out (Twitter
              contests, Discord Contests, etc.).
            </li>
            <li>
              Update Twitter, Discord, and our website to ensure a new rebranded
              look.
            </li>
            <li>
              An Official Alpha Group will be created to provide our members
              with the highest chance of successful trades within the NFT and
              Crypto marketplaces.
            </li>
          </ul>
        </div>
        <div className="road-item">
          <h2 className="titan">Phase Two: Ape’s Together – Ape’s Strong</h2>
          <ul className="right">
            <li>
              Collaborations and partnerships will be established to provide our
              members with various opportunities such as upcoming whitelist
              spots, giveaways, and more
            </li>
            <li>
              A community wallet will be created. This wallet will be devoted to
              giving the community a lifeline of Eth and NFTs to give back to
              the community via marketing, promotion, giveaways, and more.
            </li>
            <li>A fundraising plan will be announced.</li>
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
          <h2 className="titan">Phase Three: The Future</h2>
          <ul>
            <li>
              A more detailed plan regarding the status of The Capeverse and
              further project utilities will be laid out and announced.
            </li>
            <li>
              An updated roadmap detailing the future of the Cool Ape Club's
              plan to success will be announced.
            </li>
          </ul>
        </div>
      </div>
      <div className="road-item center-item">
        <h2>Ongoing</h2>
        <p>Phase One: The Resurrection</p>
        <p> Collaborations with various projects in the NFT Space</p>
      </div>
    </div>
  );
};

export default Roadmap;
