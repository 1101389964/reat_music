import { useContext, useMemo, memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Pagination } from "antd";

import { ThemeContext } from "@/App.js";

import { getSearchMessage } from "../store/action";

/* 搜索结果 */
export function useGetSearchData(pagenum, type, typeNmae) {
  const dispatch = useDispatch();
  const searchValue = useContext(ThemeContext)[1];

  useMemo(
    function () {
      dispatch(getSearchMessage(searchValue, 30, pagenum, type));
      console.log("pagenum:", pagenum);
    },
    [dispatch, searchValue, pagenum, type]
  );

  const { message } = useSelector(
    (state) => ({
      message: state.getIn(["search", typeNmae]),
    }),
    shallowEqual
  );

  return message;
}

/* 页码 */

export const ChangePage = memo((props) => {
  const { totalNums, onChange } = props;
  return (
    <Pagination
      showSizeChanger={false}
      pageSize={30}
      onChange={onChange}
      defaultCurrent={1}
      total={totalNums}
    />
  );
});
