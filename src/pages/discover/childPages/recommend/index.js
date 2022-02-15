import React, { memo } from "react";

import { MainContent, RightContent, LeftContent } from "./style";

import TopBanner from "./c-pages/top-banners";
import HotRcm from "./c-pages/hot-recommend";
import NewRcm from "./c-pages/new-recommend";
import ListRcm from "./c-pages/list-recommend";
import UserLogin from "./c-pages/user-login";
import SettleSinger from "./c-pages/settle-singer";
import HotRadio from "./c-pages/hot-radio";

export default memo(function Recommend(props) {
  return (
    <div>
      <TopBanner />
      <MainContent className="wrap-v2">
        <LeftContent>
          <HotRcm />
          <NewRcm />
          <ListRcm />
        </LeftContent>
        <RightContent>
          <UserLogin />
          <SettleSinger />
          <HotRadio />
        </RightContent>
      </MainContent>
    </div>
  );
});
