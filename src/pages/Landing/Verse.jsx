import "./styles/Verse.css";

const Verse = () => {
  return (
    <div className="verse">
      <img src="/assets/wave2.svg" className="wave2" alt="" />
      <div className="verse-box">
        <div className="left-verse">
          <h1 className="titan">COOL TO CARE</h1>
          <p>
            We are working to establish a cause called "Cool to Care," which
            will be Cool Ape Club's collective efforts to give back to real life
            causes that need financial attention such as breast cancer, clean
            water for underdeveloped nations, and highlighting lesser known
            causes our holders will vote on that aren't focused on by the media.
            We will be bringing awareness to these causes as well as donating a
            pledged portion of CAC profits to them!
          </p>
          <button className="connect">Coming Soon</button>
        </div>
      </div>
    </div>
  );
};

export default Verse;
