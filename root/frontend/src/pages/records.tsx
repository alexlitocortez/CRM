import { Breadcrumb, Layout, Menu, theme } from "antd";

const { Header, Content, Sider } = Layout;

export default function Records() {
  return (
    <Layout
      style={{ width: "100vw", height: "100vh", backgroundColor: "black" }}
    >
      <div style={{ borderBottom: "1px solid grey" }}>
        <h1>Records</h1>
      </div>
      <Content></Content>
    </Layout>
  );
}
