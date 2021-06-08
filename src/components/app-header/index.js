import React, { memo } from "react";

import { headerLinks } from "@/common/local-data.js";

import { NavLink } from "react-router-dom";
import { HeaderWrapper, HeaderRright, HeaderLeft } from "./style";
//导入ant-design中的组件
import { Input } from "antd";
//导入图标
import { SearchOutlined } from "@ant-design/icons";

export default memo(function AppHeader() {
  //业务代码

  //筛选头部是路由标签还是跳转页面
  function showSelectItem(item, index) {
    if (index < 3) {
      return (
        <NavLink to={item.link} key={item.link} className="select-item">
          {item.title}
        </NavLink>
      );
    } else {
      return (
        <a
          href={item.link}
          key={item.link}
          className="select-item"
          target="blank"
        >
          {item.title}
        </a>
      );
    }
  }

  //jsx代码
  return (
    <div>
      <HeaderWrapper>
        <div className="content wrap-v1">
          <HeaderLeft>
            <a href="#/" className="logo">
              {" "}
            </a>
            <div className="link">
              {headerLinks.map((item, index) => {
                return showSelectItem(item, index);
              })}
            </div>
          </HeaderLeft>

          <HeaderRright>
            <Input
              className="search"
              placeholder="音乐/视频/电台/用户"
              prefix={<SearchOutlined />}
            />
            <button className="center">创作者中心</button>
            <a href="#/">登录</a>
          </HeaderRright>
        </div>

        <div className="divider"></div>
      </HeaderWrapper>
    </div>
  );
});
