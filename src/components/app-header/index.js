import React, { memo, useState, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router";
//导入ant-design中的组件
import { Input } from "antd";
//导入图标
import { SearchOutlined } from "@ant-design/icons";

import { headerLinks } from "@/common/local-data.js";
//封装格式化图片大小的函数
import { getSizeImage } from "@/utils/format-utils.js";
import { changeGetAccountAction } from "@/components/resgister-cmp/store/actionCreators.js";
import { HeaderWrapper, HeaderRright, HeaderLeft } from "./style";
import Resigster from "@/components/resgister-cmp/index.js"; //登录组件
import Control from "@/components/loginControl"; //登录组件

export default memo(function AppHeader(props) {
  //业务代码
  //当鼠标移动到功能列表上切换状态
  const [showUserList, setshowUserList] = useState(false);
  //搜索框内容
  const [searchValue, setSearchValue] = useState("");
  const [jumpSearch, setJumpSearch] = useState(false);

  const { message } = useSelector(
    (state) => ({
      message: state.getIn(["account", "accountMessage"]),
    }),
    shallowEqual
  );

  useEffect(() => {
    setJumpSearch(false);
  }, [jumpSearch]);

  //筛选头部是路由标签还是跳转页面
  const showSelectItem = (item, index) => {
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
  };

  //当点击登录切换登录面板显示或隐藏
  const showResgister = () => {
    props.setLoginState();
  };

  //触摸头像显示用户功能界面
  function showSet() {
    setTimeout(() => {
      setshowUserList(true);
    }, 10);
  }

  //鼠标离隐藏用户功能界面
  function conceal() {
    setTimeout(() => {
      setshowUserList(false);
    }, 10);
  }
  //按下回车键搜索
  function enterSerach(event) {
    props.setSearchValue(event.target.value);
    setSearchValue("");
    setJumpSearch(true);
  }
  //搜索框发送变化
  function changeValue(event) {
    setSearchValue(event.target.value);
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
              value={searchValue}
              onChange={(e) => {
                changeValue(e);
              }}
              onPressEnter={(e) => {
                enterSerach(e);
              }}
            />
            {jumpSearch ? <Redirect to="/search" /> : ""}
            <button className="center">创作者中心</button>

            {/* 登录上切换为头像，否则显示登录 */}
            {message.code === 200 ? (
              <div
                className="headImg"
                onMouseOver={showSet}
                onMouseOut={conceal}
              >
                <img
                  src={getSizeImage(message.profile.avatarUrl, 30)}
                  alt="头像"
                />
                {showUserList ? (
                  <Control
                    clearReducer={changeGetAccountAction}
                    onMouseOver={showSet}
                    onMouseOut={conceal}
                  />
                ) : (
                  " "
                )}
              </div>
            ) : (
              <span className="resgister" onClick={showResgister}>
                登录
              </span>
            )}
          </HeaderRright>
        </div>
        {/*  */}
        <div className="divider"></div>
      </HeaderWrapper>
      {/* 登录组件 */}
      {props.loginState === true ? (
        <Resigster fun={showResgister}></Resigster>
      ) : (
        " "
      )}
    </div>
  );
});
