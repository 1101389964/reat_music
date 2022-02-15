/* 导入模块分三层：
  第一层是第三方库；
  第二层是功能性，比如axios，actionCreators； 
  第三层是自己定义的组件
*/
import React, { memo, createContext, useState } from "react";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";

import route from "./router";
import store from "@/store"; //导入redux中的store

import AppHeader from "@/components/app-header";
import AppFooter from "./components/app-footer";
import AppPlay from "@/pages/palyer/app-play/index.js";
import { HashRouter } from "react-router-dom";

export const ThemeContext = createContext();

//快捷创建memo函数组件rmc
export default memo(function App() {
  const [searchValue, setSearchValue] = useState(""); //搜索框的内容
  const [login, setLogin] = useState(false); //控制登录组件的显示与关闭

  const setSearchValueFun = (value) => {
    setSearchValue(value);
  };

  const setLoginFun = () => {
    setLogin(!login);
  };
  return (
    /* 
      注意：使用renderRoutes外层需要包裹一个Router 
      Provider共享数据
    */
    <ThemeContext.Provider value={[setLoginFun, searchValue]}>
      <Provider store={store}>
        <HashRouter>
          <AppHeader
            setSearchValue={setSearchValueFun}
            loginState={login}
            setLoginState={setLoginFun}
          />
          {renderRoutes(route)}
          <AppFooter />
          <AppPlay />
        </HashRouter>
      </Provider>
    </ThemeContext.Provider>
  );
});
