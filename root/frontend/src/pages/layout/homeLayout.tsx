import React, { useState } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import type { MenuProps } from "antd";
import { CustomInput } from "../../components/autocomplete/AutoComplete";

const { Header, Content, Sider } = Layout;

export interface IhomeLayoutProps {}

export default function HomeLayout(props: IhomeLayoutProps) {
  const [inputUsername, setUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handleUsername = (value: string) => {
    setUsername(value);
  };

  const handlePassword = (value: string) => {
    setInputPassword(value);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div>
      <Layout style={{ width: "100vw", height: "100vh" }}>
        <Layout>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CustomInput
                value={inputUsername}
                onChange={handleUsername}
                placeholder="Enter Username"
              />
              <CustomInput
                value={inputPassword}
                onChange={handlePassword}
                placeholder="Enter Password"
              />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}
