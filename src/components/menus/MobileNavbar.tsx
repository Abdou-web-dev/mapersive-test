import { Button, Drawer } from "antd";
import { useState } from "react";
import hamburger_menu_icon from "../../assets/img/hamburger_menu_icon.svg";
import { CloseX } from "../icons/Icons";
import { MobileAppBar } from "./MobileAppBar";
import "./menu_styles.scss";

export const MobileNavbar = ({}: {}) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const closeDrawer = () => {
    setOpenDrawer(false);
  };
  return (
    <>
      <Button className="hamburger-btn" onClick={showDrawer}>
        <img src={hamburger_menu_icon} alt="" />
      </Button>

      <>
        <Drawer
          className="main-lateral-drawer"
          maskStyle={{
            background: "white",
          }}
          headerStyle={{ background: "rgba(255, 192, 203, 0.5)" }}
          title={<Button onClick={closeDrawer} icon={<CloseX />}></Button>}
          placement={"left"}
          closable={false}
          onClose={closeDrawer}
          open={openDrawer}
          extra={null}
          destroyOnClose
          // destroyOnClose : Whether to unmount child components on closing drawer or not
          // this prop destroyOnClose is necessary, otherwise the drawer wont close
          // bodyStyle={{
          //   background: "lightgray",
          // }}
        >
          <>
            <MobileAppBar {...{ setOpenDrawer, openDrawer }} />
          </>
        </Drawer>
      </>
    </>
  );
};
