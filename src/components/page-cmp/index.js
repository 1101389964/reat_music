import React, { memo } from "react";
import { Pagination } from "antd";

import { MainBox } from "./style";

export default memo((props) => {
  const { totalNums, onChange } = props;
  return (
    <MainBox>
      <Pagination
        className="page"
        showSizeChanger={false}
        pageSize={30}
        onChange={onChange}
        defaultCurrent={1}
        total={totalNums}
      />
    </MainBox>
  );
});
