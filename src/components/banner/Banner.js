import React, { memo } from "react";
import "../../sass/banner/__banner.scss";

const Banner = (props) => {
  let btn = props.item.tabs?.map((el, inx) => (
    <div key={inx}>
      <button>{el}</button>
    </div>
  ));
  return (
    <>
      <div
        className="banner__section"
        style={{
          backgroundImage: `url(${props.item.bgImage})`,
        }}
      >
        <div className="container">
          <div className="banner__wrapper">
            <div className="banner__title">
              <h1>{props.item.title}</h1>
              <div className="banner__title-links">{btn}</div>
            </div>
            <div className="banner__info">
              <h1>{props.item.activeTitle}</h1>
              <p>{props.item.activeDescription}</p>
              <button className="button" onmousedown="party.confetti(this)">
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Banner);
