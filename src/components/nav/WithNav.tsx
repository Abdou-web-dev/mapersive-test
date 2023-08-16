// WithNav (Stand-alone Functional Component)
import { Outlet } from "react-router";
import { useMediaQuery } from "../../hooks/UseMediaQuery";
import { DesktopNavBar } from "../menus/AppBar";
import { MobileNavbar } from "../menus/MobileNavbar";
import "./nav_styles.scss";

export default () => {
  const isMobileScreen = useMediaQuery("(max-width: 800px)");

  return (
    <div className="withnav-container">
      <>
        {isMobileScreen ? (
          <div className="withnav-mobile-nav">
            <MobileNavbar />
          </div>
        ) : (
          <DesktopNavBar />
        )}
      </>
      <Outlet />
    </div>
  );
};
