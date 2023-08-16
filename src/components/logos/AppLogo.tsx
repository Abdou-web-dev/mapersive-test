import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "../../hooks/UseMediaQuery";
import { AppIcon } from "../icons/Icons";
import "./logos_styles.scss";

export const AppLogo = () => {
  const is_width_less_850 = useMediaQuery("(max-width: 850px)");

  let navigate = useNavigate();
  return (
    <>
      <div className="app-logo-container">
        <Button onClick={() => navigate("/")}>
          <div className="app-logo-icon">
            <AppIcon />
          </div>
          {!is_width_less_850 && (
            <div className="app-logo-text">
              <span className="mobiling">Mobiling</span>
              <span className="auto">Automobile</span>
            </div>
          )}
        </Button>
      </div>
    </>
  );
};
