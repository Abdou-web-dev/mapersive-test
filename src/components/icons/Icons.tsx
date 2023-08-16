import app_icon from "../../assets/img/app_icon.svg";
import arrow_down from "../../assets/img/arrow_down.svg";
import closeIcon from "../../assets/img/closeX.svg";

export const ArrowIcon = () => {
  return (
    <>
      <img src={arrow_down} alt="" />
    </>
  );
};

export const AppIcon = () => {
  return (
    <>
      <img src={app_icon} alt="" />
    </>
  );
};
export const CloseX = () => {
  return (
    <img src={closeIcon} alt="" style={{ width: "30px", height: "30px" }} />
  );
};
