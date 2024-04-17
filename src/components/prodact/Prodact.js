import React, { memo } from "react";
import "../../sass/prodact/__prodact.scss";
import cardImg1 from "../../assets/images/cardimg1.png";
import cardImg2 from "../../assets/images/cardimg2.png";
import cardImg3 from "../../assets/images/cardimg3.png";
import cardImg4 from "../../assets/images/cardimg4.png";
import cardImg5 from "../../assets/images/cardimg5.png";
import cardImg6 from "../../assets/images/cardimg6.png";
const links = [
  "For you",
  "Mobile & Computing",
  "Tv & Audio",
  "Home Appliances",
  "Samsung live",
  "For Businnsess",
];
const cards = [
  {
    id: 1,
    img: cardImg1,
    desc: " Bespoke 6 cu. ft. Smart Slide-In Gas Range with Smart OvenCamera & Illuminated Precision Knobs",
    price: "Save $ 600",
    from: "From 1499",
  },
  {
    id: 2,
    img: cardImg2,
    desc: "Galaxy Buds 2 Pro",
    price: "Save up to $ 40",
    from: " From $189.99 before eligible trade-in.",
  },
  {
    id: 3,
    img: cardImg3,
    desc: "Q-series 11.1.4 ch. Wireless Dolby ATMOS Soundbar",
    price: "Save $ 500",
    from: " From $1399.99",
  },
  {
    id: 4,
    img: cardImg4,
    desc: "23 cu. ft. Bespoke 4-Door Flex Refrigerator with AI Family Hub",
    price: "Save $ 1200",
    from: " From $3899",
  },
  {
    id: 5,
    img: cardImg5,
    desc: "Galaxy S24 Ultra, 1TB (Unlocked)",
    price: "Save up to $ 150",
    from: "From $1509.99 before eligible trade-in.",
  },
  {
    id: 6,
    img: cardImg6,
    desc: "Bespoke 5.3 cu. ft. All-in-One AI Laundry Combo Ultra Capacity Washer and Ventless Heat Pump Dryer",
    price: "Save $ 1100",
    from: "From $2199 ",
  },
];

const Prodact = () => {
  let link = links?.map((el, inx) => (
    <React.Fragment key={inx}>
      <p>{el}</p>
    </React.Fragment>
  ));
  let data = cards?.map((e) => (
    <div className="prodact__card" key={e.id}>
      <div className="card_img">
        <span>New</span>
        <img src={e.img} alt="" />
      </div>
      <div className="card_info">
        <h3>{e.desc}</h3>
        <h4>{e.price}</h4>
        <p>{e.from}</p>
        <button>Pre-order now</button>
      </div>
    </div>
  ));
  return (
    <div className="prodact__section">
      <div className="container">
        <div className="prodact__title">
          <h1>Shop all latest offers and innovations</h1>
          <div className="prodact__title-links">{link}</div>
        </div>
        <div className="prodact__cards">
          <>{data}</>
        </div>
      </div>
    </div>
  );
};

export default memo(Prodact);
