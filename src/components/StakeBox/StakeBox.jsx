const StakeBox = ({ img, bg, openModal }) => {
  return (
    <div style={{ backgroundColor: bg }} className="stake-box">
      <div className="top-stake-box">
        <h2>Monkey Ape Club</h2>
        <button className="enter" onClick={() => openModal(true)}>
          Staking
        </button>
      </div>
      <img src={img} alt="" />
    </div>
  );
};

export default StakeBox;
