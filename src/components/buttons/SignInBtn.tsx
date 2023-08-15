import { Button } from "antd";
import { Link } from "react-router-dom";
import "./btn_styles.scss";

export const SignInBtn = () => {
  return (
    <>
      <Button className="sign-in-btn-container">
        <Link to={`sign-in`}>
          <span>Sign in</span>
        </Link>
      </Button>
    </>
  );
};
