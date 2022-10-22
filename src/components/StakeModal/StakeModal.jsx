import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./StakeModal.css";

const StakeModal = ({ closeModal }) => {
  const [value, setValue] = useState(0);
  return (
    <>
      <div onClick={() => closeModal(false)} className="overlay-stake"></div>
      <div className="stake-modal">
        <FontAwesomeIcon onClick={() => closeModal(false)} icon={faXmark} />
        <div className="top-modal">
          <img src="/assets/nft.png" alt="" />
          <div className="right-modal">
            <h2>NFT</h2>
            <h1>Cool Ape #3730</h1>
            <div className="nft-desc-div">
              <div className="desc-row">
                <div>
                  <h3>BACKGROUND</h3>
                  <p>Yellow</p>
                </div>
                8%
              </div>
              <div className="desc-row">
                <div>
                  <h3>Body</h3>
                  <p>Brown</p>
                </div>
                8%
              </div>
              <div className="desc-row">
                <div>
                  <h3>BodyWear</h3>
                  <p>White Tank</p>
                </div>
                8%
              </div>
              <div className="desc-row">
                <div>
                  <h3>Head</h3>
                  <p>ETH</p>
                </div>
                8%
              </div>
              <div className="desc-row">
                <div>
                  <h3>HeadWear</h3>
                  <p>Horns</p>
                </div>
                8%
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-modal">
          <h2>Claim Available Bananas</h2>
          <button className="buy-now">285 🍌</button>
        </div>
      </div>
    </>
  );
};

export default StakeModal;
