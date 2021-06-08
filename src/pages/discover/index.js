import React, { memo } from "react";

import { discoverLinks } from "@/common/local-data.js";

import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { SubNav } from "./style";

export default memo(function Discover(props) {
  function showItem(item) {
    return (
      <NavLink to={item.link} key={item.link} className="box">
        <span>{item.title}</span>
      </NavLink>
    );
  }

  return (
    <div>
      <SubNav>
        <div className="nav">
          <div className="wrap-v1">
            <div className="wap">
              {discoverLinks.map((item) => showItem(item))}
            </div>
          </div>
        </div>
      </SubNav>
      <div>{renderRoutes(props.route.routes)}</div>
    </div>
  );
});
