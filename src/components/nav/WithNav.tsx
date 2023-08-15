// WithNav.js (Stand-alone Functional Component)
import { Outlet } from "react-router";
import { useMediaQuery } from "../../hooks/UseMediaQuery";
import { MainNavBar } from "../menus/AppBar";
import { MobileNavbar } from "../menus/MobileNavbar";
import "./nav_styles.scss";

export default () => {
  const isMobileScreen = useMediaQuery("(max-width: 800px)");

  return (
    <div className="withnav-container" style={{ background: "" }}>
      <>{isMobileScreen ? <MobileNavbar /> : <MainNavBar />}</>
      <Outlet />
    </div>
  );
};
