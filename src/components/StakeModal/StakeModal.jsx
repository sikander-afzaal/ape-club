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
            <h2>Raffle Coin</h2>
            <h1>10,000 $DINO Coins</h1>
            <div className="modal-row">
              <div className="modal-col">
                <h3>Ticket Price</h3>
                <p>100</p>
              </div>
              <div className="modal-col">
                <h3>Ends in</h3>
                <p>2 hours</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-modal">
          <div className="calc">
            <button
              onClick={() => {
                setValue((prev) => {
                  if (prev > 0) {
                    return (prev -= 1);
                  } else {
                    return prev;
                  }
                });
              }}
            >
              -
            </button>
            <p className="titan">{value}</p>
            <button
              onClick={() => {
                setValue((prev) => {
                  if (prev < 10) {
                    return (prev += 1);
                  } else {
                    return prev;
                  }
                });
              }}
            >
              +
            </button>
          </div>
          <button className="buy-now">Buy Now</button>
        </div>
      </div>
    </>
  );
};

export default StakeModal;
