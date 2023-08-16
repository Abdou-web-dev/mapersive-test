import { Button } from "antd";
import { Link } from "react-router-dom";
import sign from "../../assets/img/sign.svg";
import { useMediaQuery } from "../../hooks/UseMediaQuery";
import "./btn_styles.scss";

export const SignInBtn = () => {
  const is_width_less_1000 = useMediaQuery("(max-width: 1000px)");

  return (
    <>
      <Button
        className={`sign-in-btn-container
      ${is_width_less_1000 ? `sign-in-small` : ``}
      `}
      >
        <Link to={`sign-in`}>
          {is_width_less_1000 ? (
            <>
              <img src={sign} alt="" width={`40px`} />
            </>
          ) : (
            <span>Sign in</span>
          )}
        </Link>
      </Button>
    </>
  );
};
