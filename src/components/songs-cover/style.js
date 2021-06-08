import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  padding: 0 16px;
  margin-bottom: 30px;
  width: 25%;

  a {
    display: block;
    width: 100%;
    height: 100%;
    img {
      width: 140px;
      height: 140px;
    }

    .ImgCover {
      position: absolute;
      width: 140px;
      height: 140px;
      top: 0;
      background: url(${require("@/assets/img/coverall.png").default});
    }

    span {
      display: block;
      margin-top: 10px;
      width: 140px;
      font-size: 14px;
      font-family: Arial, Helvetica, sans-serif;
    }
  }

  .ListenAmount {
    position: absolute;
    width: 140px;
    height: 27px;
    top: 113px;
    background: url(${require("@/assets/img/coverall.png").default});
    background-position: 0 -537px;

    .logo {
      display: inline-block;
      transform: translateY(10%);
      margin-left: 10px;
      width: 14px;
      height: 11px;
      background: url(${require("@/assets/img/iconall.png").default});
      background-position: 0 -24px;
    }
    .number {
      display: inline-block;
      margin-left: 5px;
      height: 27px;
      line-height: 27px;
      color: #ccc;
    }
    .startListen {
      margin: 5px 5px 0 0;
      float: right;
      height: 17px;
      width: 16px;
      background: url(${require("@/assets/img/iconall.png").default});
    }
  }
`;
