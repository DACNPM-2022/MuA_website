import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
    FileOutlined,
    UserOutlined,
  } from "@ant-design/icons";

const { SubMenu } = Menu;
export default function Sidebar() {
  return (
  
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          
          <SubMenu key="sub1" icon={<UserOutlined />} title="Quản lý khách hàng">
            <Menu.Item key="1"><Link to="users"></Link>Quản lý khách mua</Menu.Item>
            
            <Menu.Item key="2"><Link to="accepts"></Link>Quản lý khách bán</Menu.Item>
           
          </SubMenu>
          <Menu.Item key="4" icon={<FileOutlined />}>
          <Link to="reports"></Link>
            Báo cáo lỗi
          </Menu.Item>
          <Menu.Item key="9" icon={<FileOutlined />}>
          <Link to="revenue"></Link>
            Doanh thu
          </Menu.Item>
          
        </Menu>
  
  );
}