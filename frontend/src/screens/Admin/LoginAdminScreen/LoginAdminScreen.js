import React , {useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Layout,
  Menu,
  Breadcrumb,
  Row,
  Col,
  Form,
  Input,
  Button,
  Checkbox,
} from "antd";
import { Image,Title } from "../admin.style";
import { notification } from 'antd';
import { instance } from "../../../ultils/ultils";
import "antd/dist/antd.min.css";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFinish = async (e) => {
    const body = {
      email:e.email,
      password:e.password
    }

    await instance.post("/users/signin",body)
    .then(res => {
      if(res.status === 200){
         if(res.data.isSuperAdmin == true) {
          localStorage.accessToken = res.data.token;
          const retUrl = location.state?.from?.pathname || "/dashboard/users";
          navigate(retUrl);
         }
      }
      else{
        notification.open({
          message: 'Notification',
          description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
          onClick: () => {
            console.log('Notification Clicked!');
          },
        });
      }
    }).catch(e=>{
      notification.open({
        message: 'Notification',
        description:
          e.message,
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
    })

    
  };
  const onFinishFailed = () => {
    console.log("Failed:");
  };
  return (
    <Layout>

      <Row>
        <Col span={16}>
          <Image src="https://img.freepik.com/free-photo/admin-login-sign-made-wood-table_292052-431.jpg?size=626&ext=jpg&ga=GA1.1.772362833.1646932962" />
        </Col>
        <Col span={8}>
          <Title style={{textAlign:"center",marginTop:"40%"}}>Trang quản lý của Admin</Title>
          <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          
            autoComplete="off"
            style={{marginTop:"50px"}}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input your username!" },
               
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            

            <Form.Item wrapperCol={{ offset: 12, span: 12 }}>
              <Button type="primary" htmlType="submit">
                Log In
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
}