import { Box } from "@mui/material";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { CustomInput } from "../components/autocomplete/CustomInput";
import axios from "axios";
import { useState } from "react";
import { Cookie } from "@mui/icons-material";
// import type { MenuProps } from "antd";
// import { Menu } from "antd";

const { Header, Content, Sider } = Layout;

type StateIdentifier = "state1" | "state2" | "state3";

export default function Register() {
  const [username, setUsername] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUsername = (value: string) => {
    setUsername(value);
  };

  const handleFirstName = (value: string) => {
    setFirstName(value);
  };

  const handleLastName = (value: string) => {
    setLastName(value);
  };

  const handleEmailAddress = (value: string) => {
    setEmailAddress(value);
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
      firstName: firstName,
      lastName: lastName,
      emailAddress: emailAddress,
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
      <h1>Register</h1>
      <Layout
        style={{ width: "100vw", height: "100vh", backgroundColor: "black" }}
      >
        <Layout>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              style={{
                padding: 24,
                margin: "auto",
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
                value={firstName}
                onChange={handleFirstName}
                placeholder="First Name"
              />
              <CustomInput
                value={lastName}
                onChange={handleLastName}
                placeholder="Last Name"
              />
              <CustomInput
                value={password}
                onChange={handleEmailAddress}
                placeholder="Email Address"
              />
              <CustomInput
                value={password}
                onChange={handlePassword}
                placeholder="Password"
              />
              <button onClick={handleRegister}>Register</button>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}
