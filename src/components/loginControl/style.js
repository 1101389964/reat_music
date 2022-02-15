import styled from "styled-components";

export const ControlStyle = styled.div`
  position: absolute;
  padding-top: 10px;
  z-index: 99;
  right: -48px;
  top: 28px;
  height: 210px;
  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 130px;
    height: 200px;
    background-color: rgb(43, 43, 43);
    :after {
      content: " ";
      position: absolute;
      z-index: 0;
      top: 4px;
      left: 61px;
      height: 12px;
      width: 12px;
      background-color: rgb(43, 43, 43);
      transform: rotate(45deg);
    }
    li {
      display: flex;
      z-index: 99;
      flex-direction: row;
      align-items: center;
      padding: 0 25px;
      height: 100%;
      color: #fff;
      cursor: pointer;
      :hover {
        background-color: rgb(53, 53, 53);
      }
      div {
        flex: 1;
        text-align: center;
      }
    }
  }
`;
