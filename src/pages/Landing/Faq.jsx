import "./styles/Faq.css";
import FaqTab from "../../components/FaqTab/FaqTab";

const Faq = () => {
  const FAQS = [
    {
      question: "What's An NFT?",
      answer:
        "An NFT stands for “Non-fungible token” and is a fancy way of saying it’s a unique, one of a kind digital item that users can buy, own, and trade. Many NFTs main function are to be digital art and look cool, some offer additional utility like exclusive access to games and airdrops or participation in an event, think of it like a rare piece of art that can also act as a “members” card.",
    },
    {
      question: "What Is MetaMask?",
      answer:
        "Metamask is a crypto wallet that can store your Ethereum and other tokens, and is needed to purchase and mint a Cool Ape. Having a wallet gives you an Ethereum address (i.e. 0xABCD….1234), this is where your NFT will be stored. Learn more about Metamask and how easy it is to use over here! https://metamask.io",
    },
    {
      question: "Where Does My NFT Go After I Purchase A- Cool Ape?",
      answer:
        "Your unique Cool Ape Club NFT will appear in the Ethereum address or wallet that you used to purchase the Cool Ape. You can view your Cool Ape on any NFT platform, notably, OpenSea",
    },
    {
      question: "How Can I Join?",
      answer:
        "Pop into our Discord server, say hi to the community and share your ideas! Purchase a Cool Ape Club NFT to gain access to our Market & Ecosystem.",
    },
    {
      question: "Rarity?",
      answer:
        "All Cool Apes are rare, however each ape has its own rarity/ traits listed! We use Rarity Tools, a third party application to break down all properties and ranking for your viewing!",
    },
    {
      question: "What Can I Do With My Cool Ape?",
      answer:
        "You are free to do whatever you please with them under a non-exclusive license!",
    },
  ];
  return (
    <div className="faq">
      <h1 className="titan">FAQs</h1>
      <div className="faqs">
        {FAQS.map((elem, idx) => {
          return <FaqTab {...elem} key={idx + "faq-tab"} />;
        })}
      </div>
      <div className="banana-wrapper">
        <img src="/assets/banana.png" alt="" className="banana" />
      </div>
    </div>
  );
};

export default Faq;
