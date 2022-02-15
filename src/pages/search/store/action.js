import * as actionTypes from "./contanst";
import * as questTypes from "../types.js";
import { searchSong } from "@/services/serach.js";

function songs(res) {
  return {
    type: actionTypes.GET_SONGS,
    songs: res.result,
  };
}
function albums(res) {
  return {
    type: actionTypes.GET_ALBUMS,
    albums: res.result,
  };
}
function artists(res) {
  return {
    type: actionTypes.GET_ARTISTS,
    artists: res.result,
  };
}
function playlists(res) {
  return {
    type: actionTypes.GET_PALYLISTS,
    playlists: res.result,
  };
}
function djRadios(res) {
  return {
    type: actionTypes.GET_DJRADIOS,
    djRadios: res.result,
  };
}
function songWoeds(res) {
  return {
    type: actionTypes.GET_SONGWOEDS,
    songWoeds: res.result,
  };
}
function userprofiles(res) {
  return {
    type: actionTypes.GET_USERPROFILES,
    userprofiles: res.result,
  };
}
function videos(res) {
  return {
    type: actionTypes.GET_VIDEOS,
    videos: res.result,
  };
}

export function getSearchMessage(keywords, limit, offset, type) {
  return async (dispatch) => {
    if (keywords === "") return;
    const res = await searchSong(keywords, limit, offset, type);
    switch (type) {
      case questTypes.songs:
        dispatch(songs(res));
        break;
      case questTypes.albums:
        dispatch(albums(res));
        break;
      case questTypes.artists:
        dispatch(artists(res));
        break;
      case questTypes.playlists:
        dispatch(playlists(res));
        break;
      case questTypes.djRadios:
        dispatch(djRadios(res));
        break;
      case questTypes.songWoeds:
        dispatch(songWoeds(res));
        break;
      case questTypes.userprofiles:
        dispatch(userprofiles(res));
        break;
      case questTypes.videos:
        dispatch(videos(res));
        break;
      default:
        break;
    }
  };
}
