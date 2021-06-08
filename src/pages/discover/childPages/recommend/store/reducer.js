//yarn add immutable
import { Map } from "immutable"; //导入immutable中的map优化性能

import * as actionTypes from "./constants";

const defaultState = Map({
  topBanners: [],
  hotRecommend: [],
  newRcm: [],
  personalRcm: [],
  topUpList: {},
  topNewList: {},
  topOriginList: {},
  settleSings: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set("topBanners", action.topBanners);
    case actionTypes.HOT_RECOMMEND:
      return state.set("hotRecommend", action.hotRecommend);
    case actionTypes.NEW_RECOMMEND:
      return state.set("newRcm", action.newRecommend);
    case actionTypes.PERSONAL_RECOMMEND:
      return state.set("personalRcm", action.personalRcm);
    case actionTypes.CHANGE_UP_LIST:
      return state.set("topUpList", action.topUpList);
    case actionTypes.CHANGE_NEW_LIST:
      return state.set("topNewList", action.topNewList);
    case actionTypes.CHANGE_ORIGIN_LIST:
      return state.set("topOriginList", action.topOriginList);
    case actionTypes.CHANGE_SETTLE_SONGER:
      return state.set("settleSings", action.settleSings);
    default:
      return state;
  }
}

export default reducer;
