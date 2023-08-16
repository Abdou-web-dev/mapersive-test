import type { MenuProps } from "antd";
import { Menu } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./menu_styles.scss";

export const MobileAppBar = ({
  setOpenDrawer,
  openDrawer,
}: {
  setOpenDrawer?: React.Dispatch<React.SetStateAction<boolean>> | any;
  openDrawer?: boolean;
}) => {
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  let navigate = useNavigate();

  // submenu keys of first level
  const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
  const items: MenuProps["items"] = [
    {
      label: "Home",
      key: "home",
      icon: null,
    },
    {
      label: "Service",
      key: "service_sub_1",
      // icon: <ArrowIcon />,
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
      // icon: <ArrowIcon />,
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
    // setCurrent(e.key);
    switch (e.key) {
      case "home":
        navigate("/");
        setOpenDrawer(false);
        break;
      case "services:1":
        navigate("/service-subpage-1");
        setOpenDrawer(false);
        break;
      case "services:2":
        // navigate("/service-subpage-2");
        break;
      case "product:1":
        navigate("/product-subpage-1");
        setOpenDrawer(false);
        break;
      case "product:2":
        // navigate("/product-subpage-2");
        break;
      case "testimonial":
        navigate("testimonial");
        setOpenDrawer(false);
        break;
      default:
        break;
    }
  };

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <>
      <div className="mobile-appbar-container">
        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          style={{ width: 256 }}
          items={items}
          onClick={handleMenuClick}
        />
      </div>
    </>
  );
};
