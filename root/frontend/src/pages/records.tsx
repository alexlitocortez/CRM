import { useState, useEffect } from "react";
import { Layout } from "antd";
import { MyData } from "./layout/homeLayout";
import axios from "axios";
import JobTable from "../components/table/JobTable";

const { Content } = Layout;

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
