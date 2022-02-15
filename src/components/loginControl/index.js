import React, { memo } from "react";
import { useDispatch } from "react-redux";
//导入图标
import {
  UserOutlined,
  FolderOpenOutlined,
  ApartmentOutlined,
  SketchOutlined,
  SettingOutlined,
  SafetyCertificateOutlined,
  ImportOutlined,
} from "@ant-design/icons";

import { ControlStyle } from "./style";
import { LogOut } from "@/services/resgister.js"; //服务

const Control = memo(function (props) {
  const clearReducer = props.clearReducer;
  const dispatch = useDispatch();

  function exit() {
    LogOut(); //退出登录接口
    dispatch(clearReducer({})); //清空reducer中的数据
  }

  return (
    <ControlStyle>
      <ul>
        <li>
          <UserOutlined className="icon" />
          <div>我的主页</div>
        </li>
        <li>
          <FolderOpenOutlined className="icon" />
          <div>我的消息</div>
        </li>
        <li>
          <ApartmentOutlined className="icon" />
          <div>我的等级</div>
        </li>
        <li className="border">
          <SketchOutlined className="icon" />
          <div>VIP会员</div>
        </li>
        <li className="border">
          <SettingOutlined className="icon" />
          <div>个人设置</div>
        </li>
        <li>
          <SafetyCertificateOutlined className="icon" />
          <div>实名认证</div>
        </li>
        <li>
          <ImportOutlined className="icon" />
          <div onClick={exit}>退出</div>
        </li>
      </ul>
    </ControlStyle>
  );
});

export default Control;
