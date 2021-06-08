//每一个模块对应不同的reducer，该文件是用来合成这些不同的reducer
import { combineReducers } from "redux-immutable";
//用来合成reducer的函数,来自于redux-immutable，类似于immutable中的map，获取数据也得用get方法

import recommendReducer from "@/pages/discover/childPages/recommend/store";
import playerReducer from "@/pages/palyer/store/index.js";

//该文件是合成各个redcer的文件
const combineReducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer,
});

export default combineReducer;
