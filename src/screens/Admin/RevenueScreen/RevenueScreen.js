import React from "react";
import { Layout, Menu, Breadcrumb, Row, Col } from "antd";
import "antd/dist/antd.min.css";
import {
  DesktopOutlined,
  ShoppingCartOutlined,
  UserAddOutlined,
  MoneyCollectOutlined,
  UserOutlined,
} from "@ant-design/icons";
import AcceptTable from "../../../components/Admin/Table/AcceptTable";
import ReportsTable from "../../../components/Admin/Table/ReportTable";
import StickerWidget from "../../../components/Admin/Widget/Sticker/StickerWidget";
import IsoWidgetsWrapper from "../../../components/Admin/Widget/WidgetWrapper";
import SaleWidget from "../../../components/Admin/Widget/Sale/SaleWidget";
import IsoWidgetBox from "../../../components/Admin/Widget/WidgetBox";
import GoogleChart from "react-google-charts";
import * as googleChartConfigs from "./config";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const rowStyle = {
  width: "100%",
  display: "flex",
  flexFlow: "row wrap",
};
const colStyle = {
  marginBottom: "16px",
  padding: "20px",
};
const gutter = 16;

export default function RevenueScreen() {
  return (
    <>
      <Row gutter={0} style={rowStyle} justify="start">
        <Col col={colStyle} lg={6} md={12} sm={12} xs={24} style={colStyle}>
          <StickerWidget
            number={"2829"}
            text={"USER"}
            icon={<UserOutlined style={{ fontSize: "32px" }} />}
            fontColor={"#afde5c"}
            bgColor={"#afde5c"}
          />
        </Col>
        <Col col={colStyle} lg={6} md={12} sm={12} xs={24} style={colStyle}>
          <StickerWidget
            number={"1"}
            text={"EARNING"}
            icon={<MoneyCollectOutlined style={{ fontSize: "32px" }} />}
            fontColor={"#5ccdde"}
            bgColor={"#5ccdde"}
          />
        </Col>
        <Col col={colStyle} lg={6} md={12} sm={12} xs={24} style={colStyle}>
          <StickerWidget
            number={"1"}
            text={"SALES"}
            icon={<ShoppingCartOutlined style={{ fontSize: "32px" }} />}
            fontColor={"#de815c"}
            bgColor={"#de815c"}
          />
        </Col>
        <Col col={colStyle} lg={6} md={12} sm={12} xs={24} style={colStyle}>
          <StickerWidget
            number={"1"}
            text={"NEW USERS"}
            icon={<UserAddOutlined style={{ fontSize: "32px" }} />}
            fontColor={"#deb25c"}
            bgColor={"#deb25c"}
          />
        </Col>
      </Row>
      
      <Row gutter={0} style={rowStyle} justify="start">
      <Col md={12} sm={24} xs={24} style={colStyle}>
      <IsoWidgetsWrapper>
              <IsoWidgetBox height={470} style={{ overflow: 'hidden' }}>
                <GoogleChart {...googleChartConfigs.Histogram} />
              </IsoWidgetBox>
            </IsoWidgetsWrapper>
      </Col>
      <Col md={12} sm={24} xs={24} style={colStyle}>
        <IsoWidgetsWrapper>
          <IsoWidgetBox height={450} style={{ overflow: "hidden" }}>
            {/* Google Bar Chart */}
            <GoogleChart {...googleChartConfigs.ComboChart} />
          </IsoWidgetBox>
        </IsoWidgetsWrapper>
      </Col>
      
      </Row>
    </>
  );
}
