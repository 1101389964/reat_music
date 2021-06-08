import React from "react";
import { Redirect } from "react-router";

import Discover from "../pages/discover";
import Recommend from "../pages/discover/childPages/recommend";
import TopList from "../pages/discover/childPages/toplist";
import PlayList from "../pages/discover/childPages/playlist";
import DJradio from "../pages/discover/childPages/djradio";
import Singer from "../pages/discover/childPages/singer";
import Album from "../pages/discover/childPages/album";

import Friend from "../pages/friend";
import Mine from "../pages/mine";

import PlaySong from "@/pages/palyer";

const routes = [
  {
    exact: true,
    path: "/",
    render: () => <Redirect to="/discover" />,
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
    path: "/friend",
    component: Friend,
  },
  {
    path: "/mine",
    component: Mine,
  },
];

export default routes;
