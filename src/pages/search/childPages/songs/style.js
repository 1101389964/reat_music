import styled from "styled-components";

export const Main = styled.table`
  margin-top: 20px;
  width: 100%;
  tbody {
    display: flex;
    flex-direction: column;
    tr {
      display: flex;
      padding: 10px 10px 8px 18px;
      height: 40px;
      border: 1px solid transparent;
      font-size: 12px;
      font-weight: 400;
      .play {
        width: 17px;
        height: 17px;
        color: rgb(230, 0, 38);
        font-size: 15px;
        cursor: pointer;
        .logo {
          display: block;
          transform: translateY(10%);
        }
      }
      .songName {
        flex: 4;
        padding-left: 10px;
        color: rgb(174, 174, 174);
        white-space: nowarp;
        overflow: hidden;
        text-overflow: ellipsis;
        .name {
          color: #333;
        }
      }
      .btns {
        display: flex;
        padding: 0 10px;
        visibility: hidden;
        flex: 1;
        span {
          flex: 1;
          font-size: 15px;
        }
      }
      .artists {
        flex: 1.5;
        white-space: nowarp;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .album {
        flex: 2;
        white-space: nowarp;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .time {
        width: 50px;
      }
    }
    tr:hover {
      border: 1px solid rgb(225, 225, 225);
      background-color: rgb(242, 242, 242);
    }
    tr:hover .btns {
      visibility: visible;
    }
  }
`;
