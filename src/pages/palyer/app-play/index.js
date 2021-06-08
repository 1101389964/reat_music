import React, { memo, useEffect, useRef, useState, useCallback } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import {
  getCurrentSongAction,
  changeCurrentSongIndexAction,
  changeCurrentSongAction,
  changeLyricsAction,
  changeLyricsIndexAction,
} from "../store/actionCreators";
import { getLyric } from "@/services/playSong.js";
import { getSizeImage, formatDate, getPlayUrl } from "@/utils/format-utils.js";
import { parseLyric } from "@/utils/lrc-parse.js";

import { Slider } from "antd";
import { AppWrapper, Control, PlayInfo, Operator, LyricWrapper } from "./style";
import { NavLink } from "react-router-dom";

export default memo(function AppPlay() {
  const [playSequence, setPlaySequence] = useState(0); //切换当前播放的顺序// 0 顺序播放 1 随机播放 2 单曲循环

  const [time, setTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [setChange, setSetChange] = useState(true);
  const [showTime, setshowTime] = useState(0);
  const [pause, setPause] = useState(true);

  const {
    currentSong,
    playList,
    currentSongIndex,
    currentLyrics,
    currentLyricsIndex,
  } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
      playList: state.getIn(["player", "playList"]),
      currentSongIndex: state.getIn(["player", "currentSongIndex"]),
      currentLyrics: state.getIn(["player", "currentLyrics"]),
      currentLyricsIndex: state.getIn(["player", "currentLyricsIndex"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentSongAction(1846489646));
  }, [dispatch]);

  //当组件生产会执行以下步骤：1.获取歌曲 2.播放歌曲
  useEffect(() => {
    audioRef.current.src = getPlayUrl(currentSong.id); //先获取到歌曲的链接
    setTimeout(() => {
      setProgress(0); //修改进度条为空
      //播放当前歌曲，当进入网页的时候播放歌曲会报错，需要补货promrise错误信息
      audioRef.current
        .play()
        .then((res) => {
          setPause(false); //当播放成功修改为开始键
        })
        .catch((err) => {
          setPause(true); //当播放失败修改为暂停键
        });
    }, 10);
  }, [currentSong]);

  //console.log(currentSong);

  const ImgUrl =
    (currentSong.al && currentSong.al.picUrl) ||
    "https://p2.music.126.net/JOJvZc_7SqQjKf8TktQ_bw==/29686813951246.jpg";
  const songName = currentSong.name || " ";
  const singer = (currentSong.ar && currentSong.ar[0].name) || " ";
  const totalTime = currentSong.dt || 0; //歌曲的总时间：ms级
  const duration = formatDate(totalTime, "mm:ss"); //把歌曲的总时间转化为分钟：秒的形式

  const audioRef = useRef();

  /* 点击播放按钮执行该函数，播放歌曲 */
  function palySong() {
    if (pause) {
      audioRef.current.play(); //播放歌曲
      setPause(false);
    } else {
      audioRef.current.pause();
      setPause(true);
    }
  }

  /* 
  当歌曲放时可以监听歌曲播放进度的函数 
  1,更改滑动条进度
  2.动态显示对应歌词
  */
  function onTimeUpdate(event) {
    //console.log(event.target.currentTime);
    const currentTime = event.target.currentTime;
    setTime(currentTime);

    //ant-design中显示歌曲进度的比例:当前时间除以总时间为比例，然后乘以Slider组件中的max就可以显示进度了
    if (setChange) {
      setshowTime(formatDate(time * 1000, "mm:ss")); //当前时间转化为分钟：秒形式
      setProgress(((time * 1000) / totalTime) * 10000); //当changDuration改变时setChange为false，歌曲播放不会更新进度条，否则两者会冲突
    }

    //动态显示歌词
    for (let i = 0; i < currentLyrics.length; i++) {
      let currentIndex = 0;
      if (
        currentLyrics[i].time >= currentTime * 1000 &&
        currentLyrics[i].content !== ""
      ) {
        // console.log(currentLyrics[i].content);
        if (currentIndex !== i) {
          currentIndex = i;
          setTimeout(() => {
            dispatch(changeLyricsIndexAction(currentIndex));
          }, 3500);
        }
        break;
      }
    }
  }

  /* 切换播放顺序 */
  const changeSequence = () => {
    setPlaySequence((playSequence + 1) % 3);
  };

  //获取歌词
  function Lyric(curSong) {
    getLyric(curSong.id).then((res) => {
      //更新歌词
      let lyric = res.lrc.lyric;
      lyric = parseLyric(lyric);
      dispatch(changeLyricsAction(lyric));
    });
  }

  //切换为上一首歌
  const checkPrevMusic = () => {
    //当为随机播放，随机播放一个与当前不一样的歌曲
    if (playSequence === 1) {
      let roundIndex = Math.floor(Math.random() * playList.length);
      while (roundIndex === currentSongIndex) {
        roundIndex = Math.floor(Math.random() * playList.length);
      }
      const currentSong = playList[roundIndex];
      dispatch(changeCurrentSongIndexAction(roundIndex)); //更新当前歌曲的index
      dispatch(changeCurrentSongAction(currentSong)); //更新当前歌曲
      Lyric(currentSong);
    } else {
      const prevIndex = currentSongIndex
        ? currentSongIndex - 1
        : playList.length - 1;
      const currentSong = playList[prevIndex];

      dispatch(changeCurrentSongIndexAction(prevIndex)); //更新当前歌曲的index
      dispatch(changeCurrentSongAction(currentSong)); //更新当前歌曲
      Lyric(currentSong);
    }
  };

  //切换为下一首歌
  const checkNextMusic = () => {
    //当为随机播放，随机播放一个与当前不一样的歌曲
    if (playSequence === 1) {
      let roundIndex = Math.floor(Math.random() * playList.length);
      while (roundIndex === currentSongIndex) {
        roundIndex = Math.floor(Math.random() * playList.length);
      }
      const currentSong = playList[roundIndex];

      dispatch(changeCurrentSongIndexAction(roundIndex)); //更新当前歌曲的index
      dispatch(changeCurrentSongAction(currentSong)); //更新当前歌曲
      Lyric(currentSong);
    }
    //当为顺序播放或单曲循环，顺序播放与当前播放列表歌曲
    else {
      const nextIndex =
        currentSongIndex === playList.length - 1 ? 0 : currentSongIndex + 1;
      const currentSong = playList[nextIndex];

      dispatch(changeCurrentSongIndexAction(nextIndex)); //更新当前歌曲的index
      dispatch(changeCurrentSongAction(currentSong)); //更新当前歌曲
      Lyric(currentSong);
    }
  };

  //歌曲播放完成
  function handleEndMusic() {
    if (playSequence === 2) {
      audioRef.current.currentTime = 0;
      audioRef.current.play(); //播放歌曲
    } else checkNextMusic();
  }

  //当改变进度条执行的函数
  const changDuration = useCallback(
    (value) => {
      setSetChange(false);
      const changeTime = (value / 10000) * totalTime;
      setshowTime(formatDate(changeTime, "mm:ss"));
      setProgress((changeTime / totalTime) * 10000);
    },
    [totalTime]
  );

  //改变进度条之后执行的函数
  const changeDurationAfter = useCallback(
    (value) => {
      audioRef.current.currentTime = ((value / 10000) * totalTime) / 1000;
      setTime(audioRef.current.currentTime);
      setSetChange(true); //更改进度条之后再更新value
      if (pause) {
        audioRef.current.play();
        setPause(false);
      }
    },
    [totalTime, pause]
  );

  return (
    <AppWrapper>
      <div className="content wrap-v2">
        <Control isPlaying={!pause}>
          <button className="btn prev" onClick={checkPrevMusic}></button>
          <button
            className="btn play"
            onClick={() => {
              palySong();
            }}
          ></button>
          <button className="btn next" onClick={checkNextMusic}></button>
        </Control>
        <PlayInfo>
          <NavLink to="/discover/play" className="image">
            <img src={getSizeImage(ImgUrl, 34)} alt="" />
          </NavLink>
          <div className="info">
            <div className="song">
              <span className="song-name">{songName}</span>
              <span className="singer-name">{singer}</span>
            </div>
            <div className="progress">
              <Slider
                max={10000}
                value={progress}
                onChange={changDuration}
                onAfterChange={changeDurationAfter}
              />
              <div className="time">
                <span className="now-time">{showTime || "00:00"}</span>
                <span className="divider">/</span>
                <span className="total-time">{duration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={playSequence}>
          <div className="left">
            <button className="btn favor"></button>
            <button className="btn share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn volume"></button>
            <button className="btn loop" onClick={changeSequence}></button>
            <button className="btn playlist">{playList.length}</button>
          </div>
        </Operator>
      </div>
      {/*
       onTimeUpdate可以监听歌曲播放的更新，一旦播放进度被更新，里面的函数就会被执行 
       onEnded:当歌曲播放完毕执行该函数
      */}
      <audio
        ref={audioRef}
        onTimeUpdate={onTimeUpdate}
        onEnded={handleEndMusic}
      />
      {/* 显示歌词 */}
      <LyricWrapper>
        <span>
          词：
          {currentLyrics[currentLyricsIndex] &&
            currentLyrics[currentLyricsIndex].content}
        </span>
      </LyricWrapper>
    </AppWrapper>
  );
});
