import React from "react";
import { useReducer, useEffect,useState } from "react";
import { Tabs,Button,Modal } from "antd";
import UserView from "./UserView/UserView";
import UserBlockView from "./UserView/UserBlockView";
import PageHeader from "../PageHeader/PageHeader";
import FormAddUser from "../Form/FormAddUser";
import appContext from "../../../store/adminstore";
// import PageHeader from "../../component/PageHeader/PageHeader";

// import  reducer, {userState} from '../../reducer/UserReducer'
// import UserContext from "../../context/UserContext"
// import { instance } from "../../ultils/ultils";
const { TabPane } = Tabs;
const tableinfos = [
  {
    title: "Tất cả người dùng",
    value: "all",
  },
  {
    title: "Seller",
    value: "seller",
  },
];
export default function UserTable() {
 

  // const [store, dispatch] = useReducer(reducer, userState);
  // useEffect(() => {
  //   async function fetchData() {
  //     // You can await here
  //     const product_res = await instance.get("/users");
     
  //     const productsRes = product_res.data;
   
      
  //     dispatch({
  //       type: "init",
  //       payload: {
  //         items: productsRes,
  //         query: "",
  //       },
  //     });
  //   }
  //   fetchData();
  // }, []);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <PageHeader title={"Quản lý người dùng"}></PageHeader>
      <Button type="primary" onClick={showModal} style={{textAlign:"right"}}>
        Thêm 1 khách hàng mới
      </Button>
      <Modal title="Thêm mới 1 khách hàng" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <FormAddUser></FormAddUser>
      </Modal>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Người dùng" key="1">
          <UserView />
        </TabPane>
        <TabPane tab="Người dùng bị khóa" key="2">
          <UserBlockView />
        </TabPane>
      </Tabs>
    </>
  );
}
