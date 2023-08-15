import { Menu as DesktopMenu, MenuProps } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignInBtn } from "../buttons/SignInBtn";
import { ArrowIcon } from "../icons/Icons";
import { AppLogo } from "../logos/AppLogo";
import "./menu_styles.scss";

export const MainNavBar = ({}: {}) => {
  const [current, setCurrent] = useState<string>("");

  let navigate = useNavigate();
  // const [borderBottom, setborderBottom] = useState("");
  const items: MenuProps["items"] = [
    {
      label: "Home",
      key: "home",
      icon: null,
      // style: { background: "", borderBottom: borderBottom },
      // className: "",
      // onMouseEnter: () => {},
    },
    {
      label: "Service",
      key: "service_sub_1",
      icon: <ArrowIcon />,
      children: [
        {
          type: "group",
          label: "",
          children: [
            {
              label: "Services 1",
              key: "services:1",
            },
            {
              label: "Services 2",
              key: "services:2",
            },
          ],
        },
      ],
    },
    {
      label: "Product",
      key: "product_sub_1",
      icon: <ArrowIcon />,
      children: [
        {
          type: "group",
          label: "",
          children: [
            {
              label: "Product 1",
              key: "product:1",
            },
            {
              label: "Product 2",
              key: "product:2",
            },
          ],
        },
      ],
    },
    {
      label: "Testimonial",
      key: "testimonial",
      icon: null,
    },
  ];

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e.key);
    setCurrent(e.key);
    switch (e.key) {
      case "home":
        navigate("/");
        break;
      case "services:1":
        navigate("/service-subpage-1");
        break;
      case "services:2":
        // navigate("/service-subpage-2");
        break;
      case "product:1":
        navigate("/product-subpage-1");
        break;
      case "product:2":
        // navigate("/product-subpage-2");
        break;
      case "testimonial":
        navigate("testimonial");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="appbar-container">
        <div className="appbar-app-logo">
          <AppLogo></AppLogo>
        </div>
        <div className="appbar-desktop-menu">
          <DesktopMenu
            className="app-navbar"
            onClick={handleMenuClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
            // defaultOpenKeys={["home"]}
          />
        </div>
        <div className="appbar-signin-btn">
          <SignInBtn></SignInBtn>
        </div>
      </div>
    </>
  );
};
