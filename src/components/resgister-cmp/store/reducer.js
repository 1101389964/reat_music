import { Map } from "immutable"; //导入immutable中的map优化性能

import * as actionType from "./constants";

const defaultState = Map({
  accountMessage: {},
  userDetail: {},
});

export function reducer(state = defaultState, actions) {
  switch (actions.type) {
    case actionType.GET_ACCOUNT:
      return state.set("accountMessage", actions.account);
    case actionType.GET_USERAETAIL:
      return state.set("userDetail", actions.detail);
    default:
      return state;
  }
}
