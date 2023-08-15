import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { AppIcon } from "../icons/Icons";
import "./logos_styles.scss";

export const AppLogo = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className="app-logo-container">
        <Button onClick={() => navigate("/")}>
          <div className="app-logo-icon">
            <AppIcon />
          </div>
          <div className="app-logo-text">
            <span className="mobiling">Mobiling</span>
            <span className="auto">Automobile</span>
          </div>
        </Button>
      </div>
    </>
  );
};
