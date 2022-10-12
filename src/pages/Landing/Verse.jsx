import "./styles/Verse.css";

const Verse = () => {
  return (
    <div className="verse">
      <img src="/assets/wave2.svg" className="wave2" alt="" />
      <div className="verse-box">
        <div className="left-verse">
          <h1 className="titan">The Capeverse</h1>
          <p>
            Owning a Cool Ape grants you access to the Capeverse. The Capeverse
            is a vast world separated by 8 regions: The Jungle (residence of the
            Cool Apes), Sandy Landing (Mummy Apes), Banana Paradise (Tropical
            Apes), Icy Hills (Yeti Apes), Strangetown (Alien Apes), The
            Wasteland (Cyborg Apes), Mysterious Meadows (Vampire Apes) and
            Hellish Hollows (Devil Apes). $BANANAZ will be required to claim
            land in any Capeverse region (excluding The Jungle), as well as
            participate in all future Capeverse endeavours (Must also own a
            Capeverse Ape).
          </p>
          <button className="connect">Mint Now</button>
        </div>
      </div>
    </div>
  );
};

export default Verse;
