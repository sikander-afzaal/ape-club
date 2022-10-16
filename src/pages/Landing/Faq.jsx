import FaqTab from "../../components/FaqTab/FaqTab";
import "./styles/Faq.css";

const Faq = () => {
  const FAQS = [
    {
      question: "What's An NFT?",
      answer:
        "An NFT stands for “Non-fungible token” and is a fancy way of saying it’s a unique, one of a kind digital item that users can buy, own, and trade. Many NFTs main function are to be digital art and look cool, some offer additional utility like exclusive access to games and airdrops or participation in an event, think of it like a rare piece of art that can also act as a “members” card.",
    },
    {
      question: "What's An NFT?",
      answer:
        "An NFT stands for “Non-fungible token” and is a fancy way of saying it’s a unique, one of a kind digital item that users can buy, own, and trade. Many NFTs main function are to be digital art and look cool, some offer additional utility like exclusive access to games and airdrops or participation in an event, think of it like a rare piece of art that can also act as a “members” card.",
    },
    {
      question: "What's An NFT?",
      answer:
        "An NFT stands for “Non-fungible token” and is a fancy way of saying it’s a unique, one of a kind digital item that users can buy, own, and trade. Many NFTs main function are to be digital art and look cool, some offer additional utility like exclusive access to games and airdrops or participation in an event, think of it like a rare piece of art that can also act as a “members” card.",
    },
    {
      question: "What's An NFT?",
      answer:
        "An NFT stands for “Non-fungible token” and is a fancy way of saying it’s a unique, one of a kind digital item that users can buy, own, and trade. Many NFTs main function are to be digital art and look cool, some offer additional utility like exclusive access to games and airdrops or participation in an event, think of it like a rare piece of art that can also act as a “members” card.",
    },
    {
      question: "What's An NFT?",
      answer:
        "An NFT stands for “Non-fungible token” and is a fancy way of saying it’s a unique, one of a kind digital item that users can buy, own, and trade. Many NFTs main function are to be digital art and look cool, some offer additional utility like exclusive access to games and airdrops or participation in an event, think of it like a rare piece of art that can also act as a “members” card.",
    },
    {
      question: "What's An NFT?",
      answer:
        "An NFT stands for “Non-fungible token” and is a fancy way of saying it’s a unique, one of a kind digital item that users can buy, own, and trade. Many NFTs main function are to be digital art and look cool, some offer additional utility like exclusive access to games and airdrops or participation in an event, think of it like a rare piece of art that can also act as a “members” card.",
    },
    {
      question: "What's An NFT?",
      answer:
        "An NFT stands for “Non-fungible token” and is a fancy way of saying it’s a unique, one of a kind digital item that users can buy, own, and trade. Many NFTs main function are to be digital art and look cool, some offer additional utility like exclusive access to games and airdrops or participation in an event, think of it like a rare piece of art that can also act as a “members” card.",
    },
    {
      question: "What's An NFT?",
      answer:
        "An NFT stands for “Non-fungible token” and is a fancy way of saying it’s a unique, one of a kind digital item that users can buy, own, and trade. Many NFTs main function are to be digital art and look cool, some offer additional utility like exclusive access to games and airdrops or participation in an event, think of it like a rare piece of art that can also act as a “members” card.",
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
    </div>
  );
};

export default Faq;
