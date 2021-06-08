import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk"; //redux-thunk中间键

// 该操作可以在调试里面看到redux状态
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
