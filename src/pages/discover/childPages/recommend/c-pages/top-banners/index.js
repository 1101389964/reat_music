import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getTopBannerAction } from "../../store/actionCreators";

import { WrapBanner, IMGbanners, ButtonNext, DownLoad } from "./style.js";
import { Carousel } from "antd";

export default memo(function TopBanner() {
  const [page, setPage] = useState(0);
  const { topBanners } = useSelector(
    (state) => ({
      //topBanners: state.get("recommend").get("topBanners"), //从state中获取topBanners,由于数据的浅拷贝是用immutable管理的所以需要通过get方法取出，否则为undefined
      //连续get两次可以用getIn替代
      topBanners: state.getIn(["recommend", "topBanners"]), //getIn是可迭代的，意味着先取第一层recommend，再取topBanner
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  const bannerRef = useRef();

  //发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  const chekBanners = useCallback((from, to) => {
    setPage(to);
  }, []); //父组件向子组件传递函数时需要通过useCallback来调用

  const ImgURL = topBanners[page] && topBanners[page].imageUrl; //传递给外层盒子的ImgURL,来加载高斯模糊
  /* topBanners是axios获取的，第一次加载函数组件时没有获取到topBanners，
  那么使用topBanners[page].imageUrl会报错，所以当topBanners[page]为undefined时，直接把该值赋值给page */

  return (
    <WrapBanner ImgLink={ImgURL}>
      <div className="mainBox">
        <div className="centerBox wrap-v2">
          <IMGbanners>
            <div className="bannerIMG">
              <Carousel autoplay ref={bannerRef} beforeChange={chekBanners}>
                {topBanners.map((item) => {
                  return (
                    <div key={item.imageUrl}>
                      <a className="bannerPoint" href={item.url} target="blank">
                        <img
                          src={item.imageUrl}
                          alt={item.typeTitle}
                          width="730"
                          height="285"
                        />
                      </a>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </IMGbanners>

          <DownLoad>
            <div className="download">
              <a
                href="https://music.163.com/#/download"
                className="downloadLink"
                target="blank"
              >
                {" "}
              </a>
            </div>
          </DownLoad>

          <ButtonNext>
            <span
              className="left_button"
              onClick={() => {
                bannerRef.current.prev();
              }}
            ></span>
            <span
              className="right_button"
              onClick={() => {
                bannerRef.current.next();
              }}
            ></span>
          </ButtonNext>
        </div>
      </div>
    </WrapBanner>
  );
});

/* function Recommend(props) {
  const { getBanners, topBanners } = props;

  useEffect(() => {
    getBanners();
  }, [getBanners]);
  return <div>Recommend:{topBanners.length}</div>;
}

const mapStaetToProps = (state) => ({
  topBanners: state.recommend.topBanners,
});

const mapDispathToProps = (dispatch) => ({
  getBanners: () => {
    dispatch(getTopBannerAction());
  },
});

export default connect(mapStaetToProps, mapDispathToProps)(memo(Recommend)); */
