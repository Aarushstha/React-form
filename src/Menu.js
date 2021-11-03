import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import Logo from "./Image/logo.svg";

class Nav extends React.Component {
  render() {
    return (
      <div className="Navbar" style={{ backgroundColor: "#20232a" }}>
        <Menu
          class="d-flex py-3"
          style={{
            fontWeight: "bolder",
            fontSize: "18px",
            marginBottom: "0",
          }}
        >
          <Link to="/">
            <img src={Logo} alt="" height="30px" />
          </Link>
          <Link to="/aboutus">
            <Menu.Item>About Us</Menu.Item>
          </Link>
          <Link to="/employee">
            <Menu.Item>Employee</Menu.Item>
          </Link>
          <Link to="/data">
            <Menu.Item>Data</Menu.Item>
          </Link>
          <Link to="/photos">
            <Menu.Item>Photos</Menu.Item>
          </Link>
        </Menu>
      </div>
    );
  }
}

export default Nav;
