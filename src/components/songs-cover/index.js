import React, { memo } from "react";

import { Wrapper } from "./style";

export default memo(function songsCover(props) {
  const { item } = props;

  function ListenCount(num) {
    if (num < 10000) {
      return num;
    }
    return Math.round(num / 10000) + "万";
  }

  return (
    <Wrapper>
      <a href="#/discover/recommend">
        <img src={item.picUrl} alt={item.name}></img>
        <div className="ImgCover"></div>
        <span>{item.name}</span>
      </a>
      <div className="ListenAmount">
        <span className="logo"></span>
        <span className="number">{ListenCount(item.playCount)}</span>
        <a className="startListen" href="#/discover/recommend">
          {" "}
        </a>
      </div>
    </Wrapper>
  );
});
