import React, { memo, useContext } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { NavLink } from "react-router-dom";

//封装格式化图片大小的函数
import { getSizeImage } from "@/utils/format-utils.js";
import { UserLoginWrapper, PersonMessage } from "./style";
import { ThemeContext } from "@/App.js";

export default memo(function HYUserLogin() {
  const [setValue] = useContext(ThemeContext);

  const { userDeatil } = useSelector(
    (state) => ({
      userDeatil: state.getIn(["account", "userDetail"]),
    }),
    shallowEqual
  );

  // console.log("userDetail:", userDeatil);

  return userDeatil.code === 200 ? (
    <PersonMessage>
      <div className="header">
        <NavLink exact to="/discover/recommend">
          <img
            src={getSizeImage(userDeatil.profile.avatarUrl, 80)}
            alt="头像"
          />
        </NavLink>
        <div className="name">
          <NavLink exact to="/discover/recommend" activeClassName="name-active">
            {userDeatil.profile.nickname}
          </NavLink>
          <span className="vipIcon"></span>
          <div className="rank">
            <NavLink
              exact
              to="/discover/recommend"
              activeClassName="rank-active"
            >
              {userDeatil.level}
              <div className="icon-right"></div>
            </NavLink>
          </div>
          <div className="signIn">签到</div>
        </div>
      </div>
      <div className="footer">
        <ul>
          <li>
            <NavLink exact to="/discover/recommend" activeClassName="message">
              <div>{userDeatil.profile.eventCount}</div>
              <span>动态</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/discover/recommend" activeClassName="message">
              <div>{userDeatil.profile.follows}</div>
              <span>关注</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/discover/recommend" activeClassName="message">
              <div>{userDeatil.profile.followeds}</div>
              <span>粉丝</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </PersonMessage>
  ) : (
    <UserLoginWrapper>
      <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <button onClick={setValue}>用户登录</button>
    </UserLoginWrapper>
  );
});
