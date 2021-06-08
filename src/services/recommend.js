import request from "./request";

export function getTopBanners() {
  return request({
    url: "/banner",
  });
}

export function getHotRecommed(props) {
  return request({
    url: `/personalized${props}`,
  });
}

export function getNewRcm(limit) {
  return request({
    url: `/top/album`,
    //等价于上面传递的参数，但是这个传递的参数为limit，则params里面的也必须为limit，否则传参无效
    params: {
      limit,
    },
  });
}

export function getPersonalRcm(limit) {
  return request({
    url: `/personalized`,
    params: {
      limit,
    },
  });
}

export function getListRcm(idx) {
  return request({
    url: `/top/list`,
    params: {
      idx,
    },
  });
}

export function getArtistList(limit, cat) {
  return request({
    url: "/artist/list",
    params: {
      cat,
      limit,
    },
  });
}
