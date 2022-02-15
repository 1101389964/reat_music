import request from "./request.js";

export function ScannerAccount(email, password) {
  return request({
    url: "/login",
    params: {
      email,
      password,
    },
  });
}

export function LogOut() {
  // console.log("11");
  return request({
    url: "/logout",
  });
}

export function UserDetail(uid) {
  return request.get(`/user/detail?uid=${uid}`);
}
