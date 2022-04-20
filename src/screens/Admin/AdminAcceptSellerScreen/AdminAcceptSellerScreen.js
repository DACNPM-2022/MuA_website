import React from "react";
import { Layout, Breadcrumb } from "antd";
import "antd/dist/antd.min.css";
import AcceptTable from "../../../components/Admin/Table/AcceptTable";

const { Header, Content, Footer, Sider } = Layout;
export default function AdminPage() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible>
        <div className="logo" />
        
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 24px" }}>
            <Breadcrumb.Item style={{fontSize:"24px",fontWeight:"bold"}}>Duyệt thông tin khách hàng</Breadcrumb.Item>
           
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            
            <AcceptTable></AcceptTable>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}