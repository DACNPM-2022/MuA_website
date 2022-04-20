import React, { useState, useContext } from "react";
import { Table, Button, Drawer,Space, Modal ,Descriptions,Badge} from "antd";

import UserContext from "../../../../store/adminstore"
const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

export default function SellerView() {
  const { store } = useContext(UserContext);
  const { items, query } = store;
  const [state, setState] = useState({
    user: {},
    iddelete:null
  });
  const [visible, setVisible] = useState(false);
  const [visibleBlockModal, setVisibleBlockModal] = useState(false);
  const showBlockModal = () => {
    setVisibleBlockModal(true);
  };
  const onCloseBlockModal = () => {
    setVisibleBlockModal(false);
  };
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: "1/1/1999",
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: "1/1/1999",
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: "1/1/1999",
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
  const columns = [
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Ngày sinh",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
    },

    {
      title: "Hành động",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
         <Button type="primary" shape="round" size={"small"} onClick={showDrawer}>
          Xem thông tin
        </Button>
        <Button type="danger" shape="round" size={"small"} onClick={showDrawer}>
          Xác nhận
        </Button>
        <Button type="danger" shape="round" size={"small"} onClick={showDrawer}>
          Không xác nhận
        </Button>
        </Space>
      ),
    },
  ];
  return (
    <>
      <Table columns={columns} dataSource={data} />
      <Drawer
        title="Thông tin khách hàng"
        placement="right"
        onClose={onClose}
        visible={visible}
        size="large"
      >
        <Descriptions  bordered>
          <Descriptions.Item label="Username" span={1}>{state.user.username}</Descriptions.Item>
          <Descriptions.Item label="Email" span={2}>{state.user.email}</Descriptions.Item>
      
          <Descriptions.Item label="Status" span={3}>
            <Badge status="processing" text="Activate" />
          </Descriptions.Item>
          <Descriptions.Item label="Type User">
            {state.isAdmin==true ? "" : "Buyer User"}
          </Descriptions.Item>
        
          <Descriptions.Item label="Config Info">
            Data disk type: MongoDB
            <br />
            Database version: 3.4
            <br />
            Package: dds.mongo.mid
            <br />
            Storage space: 10 GB
            <br />
            Replication factor: 3
            <br />
            Region: East China 1<br />
          </Descriptions.Item>
        </Descriptions>
      </Drawer>
      <Modal
        title="Xác nhận khóa tài khoản người dùng"
        visible={visibleBlockModal}
        onCancel={onCloseBlockModal}
      >
        {"Xác nhận khóa tài khoản này"}
      </Modal>
    </>
  );
}