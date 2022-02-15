import * as actionType from "./constants";

//axios请求
import { ScannerAccount, UserDetail } from "@/services/resgister.js";

export const changeGetAccountAction = (message) => ({
  type: actionType.GET_ACCOUNT,
  account: message,
});

export const changeUserDeatil = (messgae) => ({
  type: actionType.GET_USERAETAIL,
  detail: messgae,
});

export const getAccountAction = (account, password) => {
  return (dispatch, getState) => {
    ScannerAccount(account, password)
      .then((res) => {
        dispatch(changeGetAccountAction(res));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const getUserDetailAxtion = (id) => {
  return async (dispatch) => {
    const message = await UserDetail(id);
    dispatch(changeUserDeatil(message));
  };
};
