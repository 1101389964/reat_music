import React, { memo } from "react";

import { footerLinks, footerImageLink } from "@/common/local-data.js";

import { FooterLink } from "./style.js";
export default memo(function AppFooter() {
  function showSelectItem(item) {
    return (
      <div key={item.title}>
        <a href={item.link} target="blank">
          {item.title}
        </a>
        <span>|</span>
      </div>
    );
  }

  const showImgeLink = (item) => {
    return (
      <li key={item.title} className="img">
        <a href={item.link}> </a>
        <span>{item.title}</span>
      </li>
    );
  };

  return (
    <FooterLink>
      <div className="wrap-v2 footer">
        <div className="copy">
          <span className="link">
            {footerLinks.map((item) => showSelectItem(item))}
          </span>
          <span className="root">
            <span className="copyright">网易公司版权所有©1997-2021</span>
            <span>杭州乐读科技有限公司运营：</span>
            <a
              href="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8282703158/452a/ca0c/3a10/caad83bc8ffaa850a9dc1613d74824fc.png"
              target="blank"
            >
              浙网文[2021] 1186-054号
            </a>
          </span>
          <span className="whistle-blowing">
            <span className="complain">
              违法和不良信息举报电话：0571-89853516
            </span>
            <span>举报邮箱：</span>
            <a href="mailto:ncm5990@163.com">ncm5990@163.com</a>
          </span>
          <span className="right">
            <a
              href="https://beian.miit.gov.cn/#/Integrated/index"
              target="blank"
            >
              粤B2-20090191-18&nbsp;&nbsp;工业和信息化部备案管理系统网站
            </a>
            <span className="logo"></span>
            <span>浙公网安备 33010902002564号</span>
          </span>
        </div>
        <div className="imgLink">
          {footerImageLink.map((item) => showImgeLink(item))}
        </div>
      </div>
    </FooterLink>
  );
});
