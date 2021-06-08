import React, { memo } from "react";

import { HeaderWrapper } from "./style";

function showSort(item, index) {
  if (index !== 4) {
    return (
      <div key={item}>
        <a className="sort" href="dsa">
          {item}
        </a>
        <span>|</span>
      </div>
    );
  } else {
    return (
      <div key={item} href="dsa">
        <a className="sort" href="dsa">
          {item}
        </a>
      </div>
    );
  }
}

const Header = memo(function (props) {
  const { title, tab, more } = props.headerProps;

  return (
    <HeaderWrapper>
      <div className="title">
        <div className="logo"></div>
        <a href="#/discover/playlist">{title}</a>
      </div>
      <div className="tab">
        {tab.map((item, index) => showSort(item, index))}
      </div>
      {more && (
        <div className="more">
          <a href="#/discover/playlist">{more}</a>
          <span></span>
        </div>
      )}
    </HeaderWrapper>
  );
});

export default Header;
