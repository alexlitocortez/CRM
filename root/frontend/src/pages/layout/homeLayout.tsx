import { useState, useEffect } from "react";
import { Layout } from "antd";
import { CustomInput } from "../../components/autocomplete/CustomInput";
import axios from "axios";
import NavBar from "../../components/navbar/NavBar";
import Alert from "@mui/material/Alert";
import { Form } from "antd";

const { Content } = Layout;

export interface MyData {
  created_at: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
}

export default function HomeLayout() {
  const [username, setUsername] = useState("");
  const [password, setInputPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [modelData, setModelData] = useState<MyData[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8000/model-data/").then((res) => {
      setModelData(res.data);
    });
  }, []);

  console.log("modelData", modelData);

  const handleUsername = (value: string) => {
    setUsername(value);
  };

  const handlePassword = (value: string) => {
    setInputPassword(value);
  };

  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();

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
    <Layout style={{ width: "100vw", height: "100vh" }}>
      <Layout>
        <NavBar isLoggedIn={isLoggedIn} />
        <Layout style={{ padding: "0 24px 24px", backgroundColor: "black" }}>
          {isLoggedIn ? (
            <Alert severity="info">User is logged in!</Alert>
          ) : null}
          <Content
            style={{
              padding: 30,
              margin: "auto",
              minHeight: 280,
              background: "black",
            }}
          >
            <Form style={{ display: "flex", flexDirection: "column" }}>
              <Form.Item
                label="Username"
                name="username"
                style={{ color: "white" }}
                rules={[
                  {
                    required: true, // This makes the input required
                    message: "Please input your username!",
                  },
                ]}
              >
                <CustomInput
                  value={username}
                  onChange={handleUsername}
                  placeholder="Enter Username"
                />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true, // This makes the input required
                    message: "Please input your password!",
                  },
                ]}
              >
                <CustomInput
                  value={password}
                  onChange={handlePassword}
                  placeholder="Enter Password"
                />
              </Form.Item>
              <button
                onClick={handleLogin}
                style={{
                  backgroundColor: "white",
                  color: "black",
                  borderColor: "white",
                }}
              >
                Login
              </button>
            </Form>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
