import React, { memo, useState, useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { EnterBox } from "./style.js";

import { getAccountAction, getUserDetailAxtion } from "./store/actionCreators";

export default memo(function App(props) {
  const dispatch = useDispatch();

  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [showRemind, setShowRemind] = useState("none");

  let close = props.fun; //父组件传递的关闭组件的方法

  const { message } = useSelector(
    (state) => ({
      message: state.getIn(["account", "accountMessage"]),
    }),
    shallowEqual
  );

  /* 
    注意：
    原来登录信息的判断是放在点击登录按钮执行的函数里面的
    但是当点击完成之后message信息还是上一次的信息，所以会出现错误的执行结果
    及时更新了message重新渲染了组件，但是组件不会自己去执行函数，所以还是上一次执行的结果
    放在useEffect中就可以很好的解决这个问题，当message更新，就会执行判断条件
  */
  useEffect(() => {
    //登录失败提示
    if (message.toString() !== "[object Object]") {
      alert("账号不存在");
    } else if (message.code && message.code !== 200) alert("密码错误！");
    //如果登录成功则关闭登录界面
    else if (message.code === 200) {
      dispatch(getUserDetailAxtion(message.account.id));
      close();
    }
    // console.log("message:", message);
  }, [message, close, dispatch]);

  return (
    <EnterBox show={showRemind}>
      <div className="Title">
        <span className="name">邮箱登录</span>
        <span className="off" onClick={offBox}>
          X
        </span>
      </div>
      <div className="Input">
        <div className="main">
          <span>
            <input
              type="text"
              placeholder="请输入账号"
              onChange={changeRemind}
              onBlur={(e) => {
                AccountChange(e);
              }}
            />
            <div className="remind">请输入正确格式</div>
          </span>
          <span>
            <input
              type="password"
              placeholder="请输入密码"
              onBlur={(e) => {
                PasswordChange(e);
              }}
            />
          </span>
          <span>
            <input value="" type="checkbox" />
            自动登录
            <a href="https://id.163.com/mail/retrievepassword#/verifyAccount">
              忘记密码
            </a>
          </span>
          <button onClick={useLogin}>登录</button>
        </div>
      </div>
    </EnterBox>
  );
  //关闭登录框，由父组件传递方法
  function offBox() {
    close();
  }
  //当输入密码时
  function changeRemind() {
    setShowRemind("none");
  }
  //当光标离开账号输入框
  function AccountChange(event) {
    const rge = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (!rge.test(event.target.value)) {
      setShowRemind("inline-block");
    } else {
      setShowRemind("none");
      setAccount(event.target.value);
    }
  }
  //密码的受控组件
  function PasswordChange(event) {
    setPassword(event.target.value);
  }
  function useLogin() {
    console.log("password:", password);
    dispatch(getAccountAction(account, password));
  }
});
