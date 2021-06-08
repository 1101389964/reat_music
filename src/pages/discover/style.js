import styled from "styled-components";

export const SubNav = styled.div`
  .nav {
    height: 35px;
    background-color: #c20c0c;

    .wap {
      display: flex;
      padding-left: 185px;
      padding-right: 356px;
      width: 100%;
      height: 30px;
      .box {
        width: 100%;
        height: 100%;
        span {
          display: inline-block;
          padding: 0 10px;
          margin: 3px 10px;
          border-radius: 13px;
          height: 24px;
          line-height: 24px;
          text-align: center;
          color: #fff;
        }
        :hover span {
          background-color: #9b0909;
        }
      }
      .active {
        span {
          background-color: #9b0909;
        }
      }
    }
  }
`;
