import styled from "styled-components";

export const Main = styled.div`
  padding: 40px;
`;

export const SearchBox = styled.div`
  display: flex;
  margin: 0 240px;
  height: 40px;
  width: 420px;
  border: 1px solid rgb(194, 194, 194);
  border-radius: 5px;
  overflow: hidden;
  input {
    flex: 1;
    padding-left: 10px;
    font-size: 20px;
  }
  div:hover {
    background-color: rgb(230, 0, 38);
    color: #fff;
    cursor: pointer;
  }
  .searchButton {
    padding: 0;
    width: 50px;
    height: 40px;
    border-left: 1px solid rgb(194, 194, 194);
    line-height: 48px;
    font-size: 25px;
  }
`;

export const TypeCheck = styled.div`
  display: flex;
  margin-top: 20px;
  width: 900px;
  height: 40px;
  border: 1px solid rgb(194, 194, 194);
  border-top: 0;
  .select-item {
    flex: 1;
    border-top: 2px solid rgb(194, 194, 194);
    line-height: 40px;
    text-align: center;
    text-decoration: none;
    font-size: 15px;
  }
  .select-item:hover {
    border-top: 2px solid rgb(230, 0, 38);
  }
  .active {
    border-top: 2px solid rgb(230, 0, 38);
    background-color: rgb(217, 217, 217);
  }
`;
