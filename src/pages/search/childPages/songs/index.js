import React, { memo, useState } from "react";
import { useDispatch } from "react-redux";
// import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  PlayCircleOutlined,
  PlusOutlined,
  FileAddOutlined,
  DownloadOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";

import { Main } from "./style";
import { useGetSearchData } from "../common.js";
import { getCurrentSongAction } from "@/pages/palyer/store/actionCreators.js";

import ChangePage from "@/components/page-cmp/index.js";

import { formatMinuteSecond } from "@/utils/format-utils.js";

export default memo(function () {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const result = useGetSearchData(currentPage - 1, 1, "songs");

  /* 点击播放 */
  function palySong(id) {
    console.log("id", id);
    dispatch(getCurrentSongAction(id));
  }

  /* 页码变化执行该函数 */
  const onChange = (current) => {
    setCurrentPage(current);
  };

  const showState = (item) => {
    return (
      <tr key={item.id}>
        <td
          className="play"
          onClick={() => {
            palySong(item.id);
          }}
        >
          <PlayCircleOutlined className="logo" />
        </td>
        <td className="songName">
          <span className="name">{item.name}</span>
          {item.transNames ? <span>{" - (" + item.transNames + ")"}</span> : ""}
        </td>
        <td className="btns">
          <PlusOutlined />
          <FileAddOutlined />
          <DownloadOutlined />
          <ShareAltOutlined />
        </td>
        <td className="artists">
          {item.artists.map((item, index) => {
            if (index === 0) {
              return item.name;
            } else {
              return "," + item.name;
            }
          })}
        </td>
        <td className="album">{"《" + item.album.name + "》"}</td>
        <td className="time">{formatMinuteSecond(item.duration)}</td>
      </tr>
    );
  };
  return (
    <>
      <Main>
        <tbody>
          {typeof result.songs === "object" ? (
            result.songs.map(showState)
          ) : (
            <tr>
              <td></td>
            </tr>
          )}
        </tbody>
      </Main>
      <ChangePage totalNums={result.songCount} onChange={onChange} />
    </>
  );
});
