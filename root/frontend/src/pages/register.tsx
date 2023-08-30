import { Box } from "@mui/material";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { CustomInput } from "../components/autocomplete/CustomInput";

const { Header, Content, Sider } = Layout;

export interface IhomeLayoutProps {}

console.log("on register page");

export default function Register() {
  return (
    <div>
      <Layout
        style={{ width: "100vw", height: "100vh", backgroundColor: "black" }}
      >
        <Layout>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                // background: colorBgContainer,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box>
                <CustomInput
                  //   value={username}
                  //   onChange={handleUsername}
                  placeholder="Enter Username"
                />
                <CustomInput
                  //   value={password}
                  //   onChange={handlePassword}
                  placeholder="Enter Password"
                />
              </Box>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}
