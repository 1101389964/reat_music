import styled from "styled-components";

export const EnterBox = styled.div`
  position: fixed;
  top: 150px;
  z-index: 99;
  width: 528px;
  height: 300px;
  margin-left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  .Title {
    padding-left: 18px;
    height: 38px;
    line-height: 38px;
    background-color: rgb(45, 45, 45);
    color: #fff;
    font-size: 14px;
    font-family: 700;
    .off {
      float: right;
      width: 38px;
      text-align: center;
      cursor: pointer;
    }
  }
  .Input {
    .main {
      margin: 0 154px;
      padding: 30px 0 43px;
      span {
        position: relative;
        margin-bottom: 10px;
        display: inline-block;
        width: 220px;
        height: 32px;
        border: 1px solid #1212;
        input {
          background-color: #fff;
          height: 30px;
          width: 218px;
        }
        .remind {
          position: absolute;
          display: ${(props) => props.show};
          top: 0;
          left: 225px;
          width: 100px;
          height: 32px;
          line-height: 32px;
          color: red;
        }
      }
      span:nth-child(3) {
        margin-top: 15px;
        border: 0px;
        line-height: 32px;
        input {
          margin-right: 5px;
          transform: translateY(20%);
          background-color: #fff;
          height: 13px;
          width: 13px;
        }
        a {
          float: right;
        }
      }
      button {
        display: inline-block;
        width: 220px;
        height: 31px;
        line-height: 31px;
        border-radius: 5px;
        background-color: rgb(220, 75, 55);
        color: #fff;
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
      }
      button:hover {
        background-color: #c20c0c;
      }
    }
  }
`;
