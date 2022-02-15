import styled from "styled-components";

export const UserLoginWrapper = styled.div`
  height: 126px;
  background: url(${require("@/assets/img/index.png").default});
  background-position: 0 0;
  padding: 16px 22px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    line-height: 25px;
  }

  button {
    margin-top: 10px;
    display: inline-block;
    width: 100px;
    height: 31px;
    line-height: 31px;
    text-align: center;
    color: #fff;
    text-decoration: none;
    background: url(${require("@/assets/img/index.png").default});
    background-position: 0 -195px;
    text-shadow: 0 1px 0 #8a060b;

    :hover {
      background-position: -110px -195px;
    }
  }
`;

export const PersonMessage = styled.div`
  padding-top: 20px;
  height: 185px;
  border-bottom: 1px solid rgb(190, 190, 190);
  background: rgb(245, 245, 245);
  .active {
    float: left;
    display: inline-block;
    margin-left: 20px;
    padding: 2px;
    border: 1px solid #dadada;
  }
  .name {
    display: inline-block;
    width: 115px;
    margin-left: 18px;
    .name-active {
      font-size: 14px;
      font-weight: 700;
      color: rgb(51, 51, 51);
      cursor: pointer;
    }
    .vipIcon {
      display: inline-block;
      margin-left: 5px;
      /* margin-top: 5px; 会影响父元素高度*/
      transform: translate(0, 15%);
      width: 43px;
      height: 16px;
      background-image: url("https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4357872333/eb74/6e09/3b0f/fd6e21661e1d32e1c52658173ffd42b6.png");
      background-position-x: 50%;
      background-position-y: 50%;
      background-size: 100% 15px;
    }
    .rank {
      margin-top: 5px;
      width: 115px;
      height: 17px;
      .rank-active {
        display: inline-block;
        padding-left: 25px;
        width: 40px;
        height: 17px;
        font-size: 12px;
        font-weight: 700;
        color: rgb(153, 153, 153);
        text-decoration: none;
        background: url("https://s2.music.126.net/style/web2/img/icon2.png?21e5a3d372078c9a321b77bd97e5462d")
          no-repeat 0 9999px;
        background-position: -130px -64px;
        .icon-right {
          display: block;
          float: right;
          overflow: hidden;
          vertical-align: middle;
          width: 8px;
          height: 17px;
          background: url("https://s2.music.126.net/style/web2/img/icon2.png?21e5a3d372078c9a321b77bd97e5462d")
            no-repeat 0 9999px;
          background-position: -192px -64px;
          cursor: pointer;
        }
      }
    }
    .signIn {
      margin-top: 15px;
      width: 95px;
      height: 30px;
      border: 0.5px solid #21321;
      border-radius: 5%;
      box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.3);
      background: rgb(50, 130, 206);
      font-size: 12px;
      color: #fff;
      line-height: 30px;
      text-align: center;
    }
    .signIn:hover {
      background: rgb(86, 154, 224);
      cursor: pointer;
    }
  }
  .footer {
    margin-top: 22px;
    ul {
      display: flex;
      width: 100%;
      li {
        flex: 1;
        height: 40px;
        .message {
          text-decoration: none;

          div {
            height: 23px;
            line-height: 23px;
            text-align: center;
            font-size: 20px;
            font-weight: normal;
          }
          span {
            display: block;
            width: 100%;
            text-align: center;
          }
        }
      }
    }
  }
`;
