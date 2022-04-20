import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import "antd/dist/antd.min.css";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import AcceptTable from "../../../components/Admin/Table/AcceptTable";
import ReportsTable from "../../../components/Admin/Table/ReportTable";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
export default function ReportScreen() {
  
  return (
    <>
      <ReportsTable></ReportsTable>
    </>
  );
}
