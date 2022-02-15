import request from "./request";

export function searchSong(keywords, limit, offset, type) {
  console.log("已执行");
  return request({
    method: "get",
    url: "/search",
    params: {
      keywords,
      limit,
      offset,
      type,
    },
  });
}
