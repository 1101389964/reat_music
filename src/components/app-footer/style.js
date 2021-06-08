import styled from "styled-components";

export const FooterLink = styled.div`
  height: 170px;
  .footer {
    display: flex;
    .copy {
      display: flex;
      flex-direction: column;
      margin-top: 15px;
      width: 520px;
      height: 100px;

      .link {
        height: 100%;

        div {
          display: inline-block;
          a {
            width: 100%;
            color: rgb(153, 153, 153);
          }
          span {
            margin: 0 8px 0 10px;
            color: rgb(153, 153, 153);
          }
        }
      }

      .root {
        height: 100%;
        .copyright {
          margin-right: 14px;
        }
      }

      .whistle-blowing {
        height: 100%;
        .complain {
          margin-right: 14px;
        }
      }

      .right {
        height: 100%;
        .logo {
          display: inline-block;
          margin: 0 2px;
          padding-top: 2px;
          width: 14px;
          height: 14px;
          background: url(${require("@/assets/img/police.png").default})
            no-repeat;
          background-position: center;
          background-size: 100%;
        }
      }
    }

    .imgLink {
      display: flex;
      margin-top: 33px;
      width: 420px;
      height: 70px;

      .img {
        margin-left: 20px;
        width: 60px;
        height: 70px;

        span {
          display: inline-block;
          width: 100%;
          text-align: center;
          color: #999;
        }
        a {
          display: inline-block;
          margin-left: 4px;
          width: 50px;
          height: 45px;
          background: url(${require("@/assets/img/foot_enter_new.png").default})
            no-repeat;
          background-size: 110px 552px;
          background-position: -63px -457px;
        }

        :nth-child(2) {
          a {
            background-position: -63px -101px;
          }
        }
        :nth-child(3) {
          a {
            background-position: 0 0;
          }
        }
        :nth-child(4) {
          a {
            background-position: -63px -50px;
          }
        }
        :nth-child(5) {
          a {
            background-position: 0 -101px;
          }
        }
      }

      .img:first-child {
        margin-left: 0;
        width: 72px;
        span {
          width: 80px;
          height: 25px;
        }
        a {
          margin-left: 15px;
        }
      }
    }
  }
`;
