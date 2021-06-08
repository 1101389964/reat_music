import * as actionType from "./constants";
import { getSong, getLyric } from "@/services/playSong.js";
import { parseLyric } from "@/utils/lrc-parse.js";

export const changeCurrentSongAction = (song) => ({
  type: actionType.CHANGE_CURRENT_SONG,
  currentSong: song,
});

export const changeCurrentSongIndexAction = (index) => ({
  type: actionType.CHANGE_CURRENT_SONG_INDEX,
  index,
});

const changePlayList = (playList) => ({
  type: actionType.CHANGE_PLAY_LIST,
  playList,
});

export const changeLyricsAction = (lyrics) => ({
  type: actionType.CHANGE_LYRICS,
  lyrics,
});

export const changeLyricsIndexAction = (index) => ({
  type: actionType.CHANGE_LYRICS_INDEX,
  index,
});

export const getCurrentSongAction = (ids) => {
  return (dispatch, getState) => {
    // 判断歌曲是否在播放列表
    const playList = getState().getIn(["player", "playList"]);
    const songIndex = playList.findIndex((song) => song.id === ids);

    //在播放列表
    if (songIndex !== -1) {
      getSong(ids).then((res) => {
        //1.添加当前歌曲
        dispatch(changeCurrentSongAction(res.songs[0]));
        //2.添加当前歌曲索引
        dispatch(changeCurrentSongIndexAction(songIndex));
        //3.获取到歌词
        getLyric(res.songs[0].id).then((res) => {
          let lyric = res.lrc.lyric;
          lyric = parseLyric(lyric);
          console.log(lyric);
          dispatch(changeLyricsAction(lyric));
        });
      });
    }

    //不在播放列表
    else {
      getSong(ids).then((res) => {
        //1.添加当前歌曲
        dispatch(changeCurrentSongAction(res.songs[0]));
        //2.添加当前索引
        const index = playList.length;
        dispatch(changeCurrentSongIndexAction(index));
        //3.添加到播放列表
        const song = res.songs && res.songs[0];
        const newPlayList = [...playList];
        newPlayList.push(song);
        dispatch(changePlayList(newPlayList));
        //3.获取到歌词
        getLyric(res.songs[0].id).then((res) => {
          let lyric = res.lrc.lyric;
          lyric = parseLyric(lyric);
          dispatch(changeLyricsAction(lyric));
        });
      });
    }
  };
};
