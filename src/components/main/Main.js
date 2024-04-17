import React from "react";
import Banner from "../banner/Banner";
import bannerimg1 from "../../assets/images/bannerimg1.avif";
import bannerimg2 from "../../assets/images/bannerimg2.avif";
import bannerimg3 from "../../assets/images/bannerimg3.avif";
import bannerimg4 from "../../assets/images/bannerimg4.avif";

const info = [
  {
    id: 1,
    title: "Mobile & Computing",
    tabs: [
      "Galaxy S24 Ultra",
      "Galaxy S24+",
      "Galaxy Book4 Ultra",
      "Galaxy Tab S9 Servies",
      "Galaxy Watch6 Servies",
    ],
    bgImage: bannerimg1,
    activeTitle: "Galaxy S24 Ultra",
    activeDescription:
      "Get up to $750 trade-in credit and $75 instant Samsung Credit with participating carriers. Try it for 30 days or get a full refund.",
  },
  {
    id: 2,
    title: "TV & Audio",
    tabs: ["The Frame", "The Freestyle 2nd Gen", "Music Frame"],
    bgImage: bannerimg2,
    activeTitle: "Buy. Bezel.Beauty",
    activeDescription: "Buy the Frame, get a Customizable Bezel on us.",
  },
  {
    id: 3,
    title: "Home Appliances",
    tabs: ["Bespoke AI", "Bespoke Refrigerator", "Bespoke Laundry"],
    bgImage: bannerimg3,
    activeTitle: "New Bespoke Al Appliances",
    activeDescription:
      "Pre-order and save up to $1,200 on our latest technology.",
  },
  {
    id: 4,
    title: "Sustainability",
    tabs: ["Certified Re-Newed", " How to recycle"],
    bgImage: bannerimg4,
    activeTitle: "New Phone , less waste",
    activeDescription:
      "Get a refurbished Certified Re-Newed smartphone with the features you love.",
  },
];

const Main = () => {
  return (
    <div className="container">
      {info.map((item) => (
        <div key={item.id}>
          <Banner item={item} />
        </div>
      ))}
    </div>
  );
};

export default Main;
