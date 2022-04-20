import React from "react";
import { Typography } from 'antd';

const { Title } = Typography;
export default function PageHeader({title}){
    return(
        <Title level={3} type="secondary" style={{textAlign:"none",marginTop:"20px",marginBottom:"20px"}}>{title}</Title>
    );
}