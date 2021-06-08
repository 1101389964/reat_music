import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getHotRcmAction } from "../../store/actionCreators";

import { HotRecommendWrapper } from "./style";
import Header from "@/components/discover-rcm-header/index.js";
import SongCover from "@/components/songs-cover/index.js";

const headerProps = {
  title: "热门推荐",
  tab: ["华语", "流行", "摇滚", "民谣", "电子"],
  more: "更多",
};

export default memo(function HotRecommend() {
  const { hotRecommend } = useSelector(
    (state) => ({
      hotRecommend: state.getIn(["recommend", "hotRecommend"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotRcmAction());
  }, [dispatch]);

  return (
    <div>
      <Header headerProps={headerProps}></Header>
      <HotRecommendWrapper>
        {hotRecommend.map((item) => (
          <SongCover item={item} key={item.id} />
        ))}
      </HotRecommendWrapper>
    </div>
  );
});
