import React, { memo, useEffect, useRef } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getNewRcmAction, getListRcmAction } from "../../store/actionCreators";

import { Carousel } from "antd";
import { NewRecommendWrapper } from "./style";
import AlbumCover from "@/components/album-cover";

import Header from "@/components/discover-rcm-header/index.js";

const headerProps = {
  title: "新碟上架",
  more: "更多",
  tab: [],
};

export default memo(function App() {
  const { newRcm } = useSelector(
    (state) => ({
      newRcm: state.getIn(["recommend", "newRcm"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  const carouselRef = useRef();
  useEffect(() => {
    dispatch(getNewRcmAction());
    dispatch(getListRcmAction(0));
  }, [dispatch]);

  return (
    <NewRecommendWrapper>
      <Header headerProps={headerProps}></Header>
      <div className="content">
        <div
          className="arrow arrow-left"
          onClick={(e) => carouselRef.current.prev()}
        ></div>
        <div className="album">
          {/* 
            跑马灯分一共分两页，每页渲染五个数据
          */}
          <Carousel ref={carouselRef} dots={false}>
            {[0, 1].map((item) => {
              return (
                <div key={item} className="page">
                  {newRcm.slice(item * 5, (item + 1) * 5).map((item) => {
                    return <AlbumCover key={item.id} info={item} />;
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <div
          className="arrow arrow-right"
          onClick={(e) => carouselRef.current.next()}
        ></div>
      </div>
    </NewRecommendWrapper>
  );
});
