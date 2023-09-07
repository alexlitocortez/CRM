import React, { useState, useEffect } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { MyData } from "./layout/homeLayout";
import axios from "axios";
import JobTable from "../components/table/JobTable";

const { Header, Content, Sider } = Layout;

interface Props {
  modelData: string[];
}

export default function Records() {
  const [modelData, setModelData] = useState<MyData[]>([]);

  useEffect(() => {
    axios?.get("http://localhost:8000/model-data/").then((res) => {
      setModelData(res.data);
    });
  }, []);

  console.log("modelData", modelData);

  return (
    <Layout
      style={{ width: "100vw", height: "100vh", backgroundColor: "black" }}
    >
      <div style={{ borderBottom: "1px solid grey" }}>
        <h1>Records</h1>
      </div>
      <Content>
        {/* <p style={{ color: "white" }}>
          First Element ID: {modelData[0]?.created_at}
        </p>
        <p style={{ color: "white" }}>
          First Element ID: {modelData[0]?.first_name}
        </p>
        <p style={{ color: "white" }}>
          First Element ID: {modelData[0]?.last_name}
        </p>
        <p style={{ color: "white" }}>
          First Element ID: {modelData[0]?.phone}
        </p>
        First Element ID: {modelData[0]?.email}
        <br /> */}
        <div
          style={{ margin: "auto", display: "flex", justifyContent: "center" }}
        >
          {" "}
          <JobTable modelData={modelData} />
        </div>
      </Content>
    </Layout>
  );
}
