/* 导入模块分三层：
  第一层是第三方库；
  第二层是功能性，比如axios，actionCreators； 
  第三层是自己定义的组件
*/
import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";

import route from "./router";
import store from "@/store"; //导入redux中的store

import AppHeader from "@/components/app-header";
import AppFooter from "./components/app-footer";
import AppPlay from "@/pages/palyer/app-play/index.js";
import { HashRouter } from "react-router-dom";

//快捷创建memo函数组件rmc
export default memo(function App() {
  return (
    /* 
      注意：使用renderRoutes外层需要包裹一个Router 
      Provider共享数据
    */
    <Provider store={store}>
      <HashRouter>
        <AppHeader />
        {renderRoutes(route)}
        <AppFooter />
        <AppPlay />
      </HashRouter>
    </Provider>
  );
});
