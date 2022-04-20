import React, { useEffect, useReducer } from "react";
import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { Layout } from "antd";
import Sidebar from "../../components/Admin/Sidebar/Sidebar";
import AcceptTable from "../../components/Admin/Table/AcceptTable";
import UserTable from "../../components/Admin/Table/UserTable";
import reducer, { initialState } from "../../reducers/Admin/userReducers";
import usersStore from "../../store/adminstore";
import ReportScreen from "./ReportScreen/ReportScreen";
import RevenueScreen from "./RevenueScreen/RevenueScreen";
import { instance } from "../../ultils/ultils";
const { Header, Footer, Sider, Content } = Layout;
export default function Admin() {
  const navigate = useNavigate();
  const [store, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    async function fetchData() {

      // You can await here
      const res = await instance.get("/users");
      
      const productsRes = res.data.users;
      console.log(res.data);
      dispatch({
        type: "init_users",
        payload: {
          items: productsRes,
        },
      });
    }
    fetchData();
  }, []);
  return (
    <usersStore.Provider value={{ store, dispatch }}>
      <Layout className="" style={{ height: "100vh" }}>
        <Sider>
          <div
            className="logo"
            style={{
              height: "32px",
              margin: "16px",
              background: "rgba(255, 255, 255, 0.3)",
            }}
          ></div>

           <Sidebar/>
        </Sider>
        <Layout>
          <Header
            style={{ color: "white", textAlign: "right" }}
            onClick={() => {
              delete localStorage.admin_accessToken;
              delete localStorage.admin_name;
              delete localStorage.admin_isLoggin;
              delete localStorage.admin_username;

              navigate("/");
            }}
          >
            Logout
          </Header>
          <Content className="content">
            <Routes>
              <Route path="/accepts" element={<AcceptTable />} />
              <Route path="/users" element={<UserTable/>} />
              <Route path="/reports" element={<ReportScreen/>} />
              <Route exact path="/revenue" element={<RevenueScreen/>} />
            </Routes>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </usersStore.Provider>
  );
}
