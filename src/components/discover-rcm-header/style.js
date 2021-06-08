import styled from "styled-components";

export const HeaderWrapper = styled.div`
  padding-right: 10px;
  height: 35px;
  width: 690px;
  border-bottom: 2px rgb(193, 13, 12) solid;
  .title {
    float: left;
    width: 130px;
    height: 28px;
    .logo {
      float: left;
      width: 30px;
      height: 28px;
      background-image: url(${require("@/assets/img/index.png").default});
      background-position: -227px -156px;
    }
    a {
      float: left;
      height: 28px;
      line-height: 28px;
      font-size: 20px;
      font-weight: 400;
      text-decoration: none;
    }
  }
  .tab {
    display: flex;
    float: left;
    padding-left: 20px;
    padding-top: 5px;
    width: 260px;
    height: 23px;
    div {
      width: 100%;
      color: #666;
      .sort {
        padding-right: 10px;
      }
    }
  }
  .more {
    float: right;
    padding-top: 8px;
    height: 22px;
    line-height: 13px;

    span {
      display: inline-block;
      width: 12px;
      height: 12px;
      background-image: url(${require("@/assets/img/index.png").default});
      background-position: 0 -239px;
    }
  }
`;
