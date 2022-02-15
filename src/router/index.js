import React from "react";
import { Redirect } from "react-router";

import Discover from "../pages/discover";
import Recommend from "../pages/discover/childPages/recommend";
import TopList from "../pages/discover/childPages/toplist";
import PlayList from "../pages/discover/childPages/playlist";
import DJradio from "../pages/discover/childPages/djradio";
import Singer from "../pages/discover/childPages/singer";
import Album from "../pages/discover/childPages/album";

import Search from "../pages/search";
import Songs from "../pages/search/childPages/songs";
import Albums from "../pages/search/childPages/albums";
import Artists from "../pages/search/childPages/artists";
import DjRadios from "../pages/search/childPages/djRadios";
import Playlists from "../pages/search/childPages/playlists";
import Songwords from "../pages/search/childPages/songwords";
import Userprofiles from "../pages/search/childPages/userprofiles";
import Videos from "../pages/search/childPages/videos";

import Friend from "../pages/friend";
import Mine from "../pages/mine";

import PlaySong from "@/pages/palyer";

const routes = [
  {
    exact: true,
    path: "/",
    render: () => <Redirect to="/discover" />, //重定向,当匹配到"/"时直接定向到/discover
  },
  {
    exact: false,
    path: "/discover",
    component: Discover,
    routes: [
      {
        exact: true,
        path: "/discover",
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        path: "/discover/recommend",
        component: Recommend,
      },
      {
        path: "/discover/toplist",
        component: TopList,
      },
      {
        path: "/discover/playlist",
        component: PlayList,
      },
      {
        path: "/discover/djradio",
        component: DJradio,
      },
      {
        path: "/discover/singer",
        component: Singer,
      },
      {
        path: "/discover/album",
        component: Album,
      },
      {
        path: "/discover/play",
        component: PlaySong,
      },
    ],
  },
  {
    exact: false,
    path: "/search",
    component: Search,
    routes: [
      {
        exact: true,
        path: "/search",
        render: () => <Redirect to="/search/songs" />,
      },
      {
        path: "/search/songs",
        component: Songs,
      },
      {
        path: "/search/albums",
        component: Albums,
      },
      {
        path: "/search/artists",
        component: Artists,
      },
      {
        path: "/search/playlists",
        component: Playlists,
      },
      {
        path: "/search/userprofiles",
        component: Userprofiles,
      },
      {
        path: "/search/songWoeds",
        component: Songwords,
      },
      {
        path: "/search/djRadios",
        component: DjRadios,
      },
      {
        path: "/search/videos",
        component: Videos,
      },
    ],
  },
  {
    path: "/mine",
    component: Mine,
  },
  {
    path: "/friend",
    component: Friend,
  },
];

export default routes;
