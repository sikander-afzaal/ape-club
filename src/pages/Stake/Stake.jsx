import { useState } from "react";
import StakeModal from "../../components/StakeModal/StakeModal";
import "./Stake.css";

const Stake = () => {
  const [openStakeModal, setOpenStakeModal] = useState(false);
  return (
    <div className="container">
      {openStakeModal && <StakeModal closeModal={setOpenStakeModal} />}
      <div className="stake">
        <h1 className="titan">Stake</h1>
        <div className="stake-row">
          {/* stake item start --------------- */}
          <div className="stake-box">
            <div className="top-stake-box">
              <h2>Monkey Ape Club</h2>
              <button className="enter" onClick={() => setOpenStakeModal(true)}>
                Staking
              </button>
            </div>
            <img src="/assets/nft.png" alt="" />
          </div>
          {/* stake item end --------------- */}
          {/* stake item start --------------- */}
          <div className="stake-box">
            <div className="top-stake-box">
              <h2>Monkey Ape Club</h2>
              <button className="enter" onClick={() => setOpenStakeModal(true)}>
                Staking
              </button>
            </div>
            <img src="/assets/nft.png" alt="" />
          </div>
          {/* stake item end --------------- */}
          {/* stake item start --------------- */}
          <div className="stake-box">
            <div className="top-stake-box">
              <h2>Monkey Ape Club</h2>
              <button className="enter" onClick={() => setOpenStakeModal(true)}>
                Staking
              </button>
            </div>
            <img src="/assets/nft.png" alt="" />
          </div>
          {/* stake item end --------------- */}
        </div>
      </div>
    </div>
  );
};

export default Stake;
