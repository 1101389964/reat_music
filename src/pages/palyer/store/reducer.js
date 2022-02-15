import { Map } from "immutable"; //导入immutable中的map优化性能

import * as actionType from "./constants";

const defaultState = Map({
  currentSong: {}, //当前歌曲
  currentSongIndex: 0, //歌曲索引，列表中第几个
  playList: [], //播放列表
  currentLyrics: [], //歌词
  currentLyricsIndex: 0, //当前歌词的索引
});

export function reducer(state = defaultState, actions) {
  switch (actions.type) {
    case actionType.CHANGE_CURRENT_SONG:
      return state.set("currentSong", actions.currentSong);
    case actionType.CHANGE_PLAY_LIST:
      return state.set("playList", actions.playList);
    case actionType.CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", actions.index);
    case actionType.CHANGE_PLAY_SEQUENCE:
      return state.set("playSequence", actions.sequence);
    case actionType.CHANGE_LYRICS:
      return state.set("currentLyrics", actions.lyrics);
    case actionType.CHANGE_LYRICS_INDEX:
      return state.set("currentLyricsIndex", actions.index);
    default:
      return state;
  }
}
