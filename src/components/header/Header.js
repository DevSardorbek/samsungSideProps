import React from "react";
import "../../sass/header/__header.scss";
import { IoSearch } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { FiShoppingCart } from "react-icons/fi";

const links = [
  "Shop",
  "AI",
  "Mobile ",
  "TV va Audio",
  "Appliances",
  "Computing",
  "Displays",
  "Accessories",
  "SmartTghings",
];

const Header = () => {
  let data = links?.map((el, inx) => (
    <div key={inx}>
      <p>{el}</p>
    </div>
  ));
  return (
    <div className="header__section">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__logo">
            <h1>SAMSUNG</h1>
          </div>
          <div className="header__links">{data}</div>
          <div className="header__search">
            <IoSearch />
            <FiShoppingCart />
            <RxAvatar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
