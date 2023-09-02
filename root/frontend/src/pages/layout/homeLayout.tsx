import React, { useState, useEffect } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import type { MenuProps } from "antd";
import { CustomInput } from "../../components/autocomplete/CustomInput";
import axios from "axios";
import NavBar from "../../components/navbar/NavBar";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

const { Header, Content, Sider } = Layout;

interface MyData {
  created_at: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
}

export interface IhomeLayoutProps {}

export default function HomeLayout(props: IhomeLayoutProps) {
  const [username, setUsername] = useState("");
  const [password, setInputPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [modelData, setModelData] = useState<MyData[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/model-data/").then((res) => {
      setModelData(res.data);
    });
  }, []);

  const handleUsername = (value: string) => {
    setUsername(value);
  };

  const handlePassword = (value: string) => {
    setInputPassword(value);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleLogin = async (e: any) => {
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
      .post("http://localhost:8000/login/", formData, { headers })
      .then((response) => {
        console.log("response", response.data);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div>
      <Layout style={{ width: "100vw", height: "100vh" }}>
        <Layout>
          <NavBar isLoggedIn={isLoggedIn} />
          <Layout style={{ padding: "0 24px 24px" }}>
            {isLoggedIn ? (
              <Alert severity="info">User is logged in!</Alert>
            ) : null}
            <p style={{ color: "black" }}>
              First Element ID: {modelData[0]?.created_at}
            </p>
            <p style={{ color: "black" }}>
              First Element ID: {modelData[0]?.first_name}
            </p>
            <p style={{ color: "black" }}>
              First Element ID: {modelData[0]?.last_name}
            </p>
            <p style={{ color: "black" }}>
              First Element ID: {modelData[0]?.phone}
            </p>
            First Element ID: {modelData[0]?.email}
            <p style={{ color: "black" }}></p>
            {/* <ul>
              <li>
                {modelData.map((item, index) => {
                  <div>
                    {item.created_at}
                  </div>
                })}
              </li>
            </ul> */}
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
                value={username}
                onChange={handleUsername}
                placeholder="Enter Username"
              />
              <CustomInput
                value={password}
                onChange={handlePassword}
                placeholder="Enter Password"
              />
              <button onClick={handleLogin}>Login</button>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}
