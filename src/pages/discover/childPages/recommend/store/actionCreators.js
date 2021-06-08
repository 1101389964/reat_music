import * as actionTypes from "./constants";

import {
  getTopBanners,
  getHotRecommed,
  getNewRcm,
  getPersonalRcm,
  getListRcm,
  getArtistList,
} from "@/services/recommend.js";

// dispatch(getTopBannerAction());

const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners,
});

const HotRecommendAction = (res) => ({
  type: actionTypes.HOT_RECOMMEND,
  hotRecommend: res.result,
});

const NewRcmAction = (res) => ({
  type: actionTypes.NEW_RECOMMEND,
  newRecommend: res.albums,
});

const PersoalAction = (res) => ({
  type: actionTypes.PERSONAL_RECOMMEND,
  personalRcm: res.result,
});

const changeNewListAction = (res) => ({
  type: actionTypes.CHANGE_NEW_LIST,
  topNewList: res.playlist,
});

const changeOriginListAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_LIST,
  topOriginList: res.playlist,
});

const changeUpListAction = (res) => ({
  type: actionTypes.CHANGE_UP_LIST,
  topUpList: res.playlist,
});

const changeSettleSingsAction = (res) => ({
  type: actionTypes.CHANGE_SETTLE_SONGER,
  settleSings: res.artists,
});

//中间键获取网络请求(顶部轮播图)
export const getTopBannerAction = () => {
  //当指向getTopBannerAction箭头函数时，redux类部会传递过来一个dispatch
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(changeTopBannerAction(res));
    });
  };
};

export const getHotRcmAction = () => {
  return (dispatch) => {
    getHotRecommed("?limit=8").then((res) => {
      dispatch(HotRecommendAction(res));
    });
  };
};

export const getNewRcmAction = () => {
  return (dispatch) => {
    getNewRcm(10).then((res) => {
      dispatch(NewRcmAction(res));
    });
  };
};

export const getPersonalRcmAction = () => {
  return (dispatch) => {
    getPersonalRcm(4).then((res) => {
      dispatch(PersoalAction(res));
    });
  };
};

export const getListRcmAction = (idx) => {
  return (dispatch) => {
    getListRcm(idx).then((res) => {
      switch (idx) {
        case 0:
          dispatch(changeNewListAction(res));
          break;
        case 2:
          dispatch(changeOriginListAction(res));
          break;
        case 3:
          dispatch(changeUpListAction(res));
          break;
        default:
          console.log("其他数据处理");
      }
    });
  };
};

export const getSettleSingers = () => {
  return (dispath) => {
    getArtistList(5, 5001).then((res) => {
      dispath(changeSettleSingsAction(res));
    });
  };
};
