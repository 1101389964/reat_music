import React, { memo } from "react";
import { useDispatch } from "react-redux";

import { getSizeImage } from "@/utils/format-utils";
import { getCurrentSongAction } from "@/pages/palyer/store/actionCreators.js";

import { TopRankingWrapper } from "./style";

export default memo(function HYTopRanking(props) {
  // props and state
  const { info } = props;
  const { tracks = [] } = info;

  // redux hooks
  const dispatch = useDispatch();

  // other handle
  const playMusic = (item) => {
    dispatch(getCurrentSongAction(item.id));
  };

  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl)} alt="" />
          <a href="/todo" className="image_cover">
            ranking
          </a>
        </div>
        <div className="info">
          <a href="/todo">{info.name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="onlylist">
        {tracks.slice(0, 10).map((item, index) => {
          return (
            <div index={index} key={item.id}>
              <div className="list-item">
                <div className="rank">{index + 1}</div>
                <div className="info">
                  <span className="name text-nowrap">{item.name}</span>
                  <div className="operate">
                    <span
                      className="btn sprite_02 play"
                      onClick={() => {
                        playMusic(item);
                      }}
                    ></span>
                    <span className="btn sprite_icon2 addto"></span>
                    <span className="btn sprite_02 favor"></span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <a href="/todo">查看全部 &gt;</a>
      </div>
    </TopRankingWrapper>
  );
});
