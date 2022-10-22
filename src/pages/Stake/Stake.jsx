import { useState } from "react";
import StakeBox from "../../components/StakeBox/StakeBox";
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
          <StakeBox
            bg={"rgb(73, 95, 168)"}
            img="/assets/nft.png"
            openModal={setOpenStakeModal}
          />
          <StakeBox
            bg={"rgb(73, 95, 168)"}
            img="/assets/nft.png"
            openModal={setOpenStakeModal}
          />
          <StakeBox
            bg={"rgb(73, 95, 168)"}
            img="/assets/nft.png"
            openModal={setOpenStakeModal}
          />
        </div>
      </div>
    </div>
  );
};

export default Stake;
