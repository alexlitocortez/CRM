import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import PropTypes from "prop-types";
import LogoutIcon from "@mui/icons-material/Logout";
import axios from "axios";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

interface Props {
  isLoggedIn: boolean;
}

const NavBar: React.FC<Props> = ({ isLoggedIn }) => {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:8000/logout/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const items: MenuProps["items"] = [
    {
      key: "mail",
      icon: isLoggedIn ? <LogoutIcon onClick={handleLogout} /> : null,
    },
    {
      key: "register",
      icon:
        isLoggedIn === false ? (
          <Button
            variant="outlined"
            sx={{ padding: "1rem", borderColor: "white" }}
          >
            <Link to="register" style={{ color: "white" }}>
              Register
            </Link>
          </Button>
        ) : null,
    },
    {
      key: "records",
      icon:
        isLoggedIn === false ? (
          <Button
            variant="outlined"
            sx={{ padding: "1rem", borderColor: "white" }}
          >
            <Link to="records" style={{ color: "white" }}>
              Records
            </Link>
          </Button>
        ) : null,
    },
  ];

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      style={{ backgroundColor: "black", padding: "1rem" }}
    />
  );
};

NavBar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default NavBar;
