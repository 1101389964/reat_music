import * as actionTypes from "./contanst";
import { Map } from "immutable"; //导入immutable中的map优化性能

const searchMessage = Map({
  songs: [],
  albums: [],
  artists: [],
  playlists: [],
  userprofiles: [],
  songWords: [],
  djRadios: [],
  videos: [],
});

export function reducer(state = searchMessage, actions) {
  switch (actions.type) {
    case actionTypes.GET_SONGS:
      return state.set("songs", actions.songs);
    case actionTypes.GET_ALBUMS:
      return state.set("albums", actions.songs);
    case actionTypes.GET_ARTISTS:
      return state.set("artists", actions.songs);
    case actionTypes.GET_PALYLISTS:
      return state.set("playlists", actions.songs);
    case actionTypes.GET_USERPROFILES:
      return state.set("userprofiles", actions.songs);
    case actionTypes.GET_SONGWOEDS:
      return state.set("songWords", actions.songs);
    case actionTypes.GET_DJRADIOS:
      return state.set("djRadios", actions.songs);
    case actionTypes.GET_VIDEOS:
      return state.set("videos", actions.songs);
    default:
      return state;
  }
}
