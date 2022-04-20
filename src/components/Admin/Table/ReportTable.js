import React, { useState } from "react";
import { Table, Tag, Space, Drawer, Button } from "antd";
import CustomerDescription from "../CustomerDescription/CustomerDescription";
import PageHeader from "../PageHeader/PageHeader";

export default function ReportsTable() {
  const data = [{
    key: "1",
    name: "John Brown",
    report: "Pham meme kha dc",
    
  },
  {
    key: "2",
    name: "Jim Green",
    report: "Pham meme kha dcadsasdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
  
   
  },
  {
    key: "3",
    name: "Joe Black",
    report: "Pham meme kha dc",
  }];
  const columns = [
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Nội dung",
      dataIndex: "report",
      key: "report",
      width: "40%",
    },

    {
      title: "Hành động",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button
            type="primary"
            shape="round"
            size={"small"}
            onClick={showDrawer}
          >
            Xem chi tiết
          </Button>

          <Button
            type="danger"
            shape="round"
            size={"small"}
            onClick={showDrawer}
          >
            Phản hồi
          </Button>
        </Space>
      ),
    },
  ];
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <PageHeader title="Báo cáo lỗi" />
      <Table columns={columns} dataSource={data} />
      <Drawer
        title="Thông tin người dùng"
        placement="right"
        onClose={onClose}
        visible={visible}
        width={640}
      >
        <CustomerDescription />
      </Drawer>
    </>
  );
}
