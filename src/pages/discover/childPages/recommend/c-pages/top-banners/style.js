import styled from "styled-components";

export const WrapBanner = styled.div`
  .mainBox {
    height: 285px;
    background: url(${(props) => props.ImgLink + "?imageView&blur=40x20"})
      center/9999px;

    .centerBox {
      position: relative;
      height: 285px;
    }
  }
`;

export const IMGbanners = styled.div`
  .bannerIMG {
    float: left;
    width: 730px;
    height: 285px;
  }
  .bannerPoint {
    height: 285px;
  }
`;

export const DownLoad = styled.div`
  .download {
    position: relative;
    float: right;
    height: 285px;
    width: 250px;
    background-image: url(${require("@/assets/img/download.png").default});
    background-size: 250px 353px;
    background-repeat: no-repeat;

    :hover .downloadLink {
      position: absolute;
      width: 211.2px;
      height: 55.5px;
      top: 185.1px;
      left: 19.1px;
      border: 0px;
      border-radius: 2px;
      background: url(${require("@/assets/img/download.png").default}) 230.3px -185px;
      background-size: 249px 353px;
    }
  }
`;

export const ButtonNext = styled.div`
  .left_button {
    position: absolute;
    top: 50%;
    margin-top: -31px;
    left: -68px;
    width: 37px;
    height: 63px;
    background: url(${require("@/assets/img/banner.png").default}) 0 9999px
      no-repeat;
    background-position: 0px -360px;

    :hover {
      background-position: 0px -430px;
    }
  }

  .right_button {
    position: absolute;
    top: 50%;
    margin-top: -31px;
    right: -68px;
    width: 37px;
    height: 63px;
    background: url(${require("@/assets/img/banner.png").default}) 0 9999px
      no-repeat;
    background-position: 0px -508px;

    :hover {
      background-position: 0px -578px;
    }
  }
`;
