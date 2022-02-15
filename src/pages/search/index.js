import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { SearchOutlined } from "@ant-design/icons";

import { TypeCheck, SearchBox, Main } from "./style";

import { types } from "./types.js";

export default memo(function (props) {
  const showSelectItem = (item) => {
    return (
      <NavLink className="select-item" to={item.link} key={item.link}>
        {item.name}
      </NavLink>
    );
  };

  return (
    <Main className="wrap-v2">
      {/* 搜索框 */}
      <SearchBox>
        <input />
        <div>
          <SearchOutlined className="searchButton" height="40" width="50" />
        </div>
      </SearchBox>
      {/* 搜索分类 */}
      <TypeCheck>{types.map(showSelectItem)}</TypeCheck>
      {/* 搜索内容 */}
      {renderRoutes(props.route.routes)}
    </Main>
  );
});
