import { Box } from "@mui/material";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { CustomInput } from "../components/autocomplete/CustomInput";
import axios from "axios";
import { useState } from "react";
import { Cookie } from "@mui/icons-material";

const { Header, Content, Sider } = Layout;

export interface IhomeLayoutProps {}

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (value: string) => {
    setUsername(value);
  };

  const handlePassword = (value: string) => {
    setPassword(value);
  };

  const handleRegister = async (e: any) => {
    e.preventDefault();

    const csrftoken = getCookie("csrftoken");

    function getCookie(name: string) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts?.pop()?.split(";").shift();
    }

    const formData = {
      username: username,
      password: password,
    };

    const headers = {
      "Content-Type": "application/json",
      "X-CSRFToken": csrftoken,
    };

    await axios
      .post("http://localhost:8000/register/", formData, { headers })
      .then((response) => {
        console.log("response register", response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
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
              <CustomInput
                value={username}
                onChange={handleUsername}
                placeholder="Create Username"
              />
              <CustomInput
                value={password}
                onChange={handlePassword}
                placeholder="Create Password"
              />
              <button onClick={handleRegister}>Register</button>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}
