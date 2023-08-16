import { Breadcrumb, Layout, Menu, theme } from "antd";
import type { MenuProps } from "antd";
import JobTable from "../../components/table/JobTable";

const { Header, Content, Sider } = Layout;

// const items1: MenuProps["items"] = [
//   "Jobs Today",
//   "Jobs This Week",
//   "Jobs Last 2 Weeks",
// ].map((key) => ({
//   key,
//   label: `${key}`,
// }));

export interface IhomeLayoutProps {}

export default function HomeLayout(props: IhomeLayoutProps) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div>
      <Layout style={{ width: "100vw", height: "100vh" }}>
        {/* <Menu
            // theme="dark"
            style={{ backgroundColor: "#5A5A5A", color: "white" }}
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items1}
          /> */}
        <Layout>
          {/* <Sider width={200} style={{ background: colorBgContainer }}></Sider> */}
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
              }}
            >
              <JobTable />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}
