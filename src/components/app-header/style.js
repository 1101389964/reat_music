import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;

  //头部导航左侧内容
  .content {
    display: flex; //flex布局
    justify-content: space-between; //设置主轴的的排列方式为先两边贴边再平分剩余空间
    height: 70px;
    /* background-color: ; */
  }

  //头部导航右侧类容
  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  color: #fff;

  .logo {
    display: inline-block;
    width: 176px;
    height: 69px;
    background-image: url(${require("@/assets/img/topbar.png").default});
  }

  .link {
    display: flex;
    flex-direction: row;
    width: 508px;
    height: 70px;
    line-height: 70px;
    font-size: 14px;

    .select-item {
      position: relative;
      width: 100%;
      line-height: 70px;
      text-align: center;
      text-decoration: none;
      font-weight: 500;

      :hover {
        background: #000;
        color: #fff;
      }

      //最后一个显示hot精灵图
      :last-child {
        position: relative;
        ::after {
          position: absolute;
          content: "";
          width: 28px;
          height: 19px;
          background-image: url(${require("@/assets/img/topbar.png").default});
          background-position: -190px 0;
          top: 20px;
          right: -22px;
        }
      }
    }

    //被点击状态会显示黑色
    .active {
      color: #fff;
      background: #000;
    }

    //当处于被点击状态时会显示下面的三角形
    .active::after {
      content: "";
      position: absolute;
      display: inline-block;
      width: 12px;
      height: 7px;
      top: 65px;
      left: 50%;
      transform: translate(-50%, 0);
      background-image: url(${require("@/assets/img/topbar.png").default});
      background-position: -226px 0;
    }
  }
`;

export const HeaderRright = styled.div`
  display: flex;
  width: 340px;
  align-items: center;
  font-size: 12px;
  color: #fff;
  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;

    input {
      //::placeholder选择器用于选取带有占位符文本的表单元素，并设置占位符文本的样式
      ::placeholder {
        font-size: 12px;
      }
    }
  }

  .center {
    margin: 0 16px;
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border-radius: 16px;
    border: 1px solid #666;
    background: #242424;
    color: #ccc;

    :hover {
      border-color: #fff;
      color: #fff;
    }
  }
  .headImg {
    position: relative;
    height: 30px;
    width: 30px;
    img {
      border-radius: 15px;
    }
  }
  .resgister {
    display: inline-block;
    height: 30px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
  }
`;
