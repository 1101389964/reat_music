import styled from "styled-components";

export const NewRecommendWrapper = styled.div`
  margin-top: 50px;

  .content {
    height: 186px;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    margin: 20px 0 37px 0;
    display: flex;
    align-items: center;

    .arrow {
      width: 25px;
      height: 17px;
      cursor: pointer;
    }

    .arrow-left {
      background-image: url(${require("@/assets/img/index.png").default});
      background-position: -260px -75px;
    }

    .arrow-right {
      background-image: url(${require("@/assets/img/index.png").default});
      background-position: -300px -75px;
    }

    .album {
      width: 640px;
      height: 150px;

      .ant-carousel .slick-slide {
        height: 150px;
        overflow: hidden;
      }

      .page {
        display: flex !important;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`;
