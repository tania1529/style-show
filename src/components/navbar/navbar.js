// src/components/Navbar.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../icons/logo.png";
import "./navbar.scss";
import { Row, Col, Menu, Image, theme } from "antd";

const items = [
  {
    label: "Home",
    key: "home",
    target: "/",
  },
  {
    label: "About",
    key: "about",
    target: "/about",
  },
  {
    label: "Services",
    key: "services",
    target: "/services",
  },
  {
    label: "Gallery",
    key: "gallery",
    target: "/gallery",
  },
  {
    label: "Booking",
    key: "booking",
    target: "/booking",
  },
  {
    label: "Contact Us",
    key: "contact",
    target: "/contact",
  },
  // {
  //   label: 'Join our team',
  //   key: 'career',
  //   target: '/career',

  // },
];

const Navbar = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();

  const [current, setCurrent] = useState("mail");

  const onClick = (key) => {
    setCurrent(key);

    const { target } = items.find((item) => item.key === key) || {};
    if (target) {
      navigate(target);
    }
  };
  return (
    <Row
      className="ui-navbar"
      style={{ backgroundColor: colorBgContainer }}
      justify={"space-around"}
    >
      <Col xl={4} xs={6} offset={2}>
        <Image
          className="pointer m-3"
          preview={false}
          src={logo}
          alt="Logo"
          onClick={() => {
            onClick("home");
          }}

          // height={30}
          // width={150}

        />
      </Col>
      <Col xl={11} xs={4}>
        <Menu
          onClick={(e) => onClick(e.key)}
          defaultActiveFirst={"home"}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </Col>
    </Row>
  );
};

export default Navbar;
