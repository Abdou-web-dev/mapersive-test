import { Button, Image } from "antd";
import car from "../../assets/img/car.svg";
import chevron_left from "../../assets/img/chevron_left.svg";
import chevron_right from "../../assets/img/chevron_right.svg";
import star_icon from "../../assets/img/star_icon.svg";
import "./sections_styles.scss";

export const MobilingCarImage = () => {
  return (
    <div className="car-image-container">
      <div className="car-image-bg"></div>

      <div className="car-image-overlay">
        <img src={star_icon} alt="" className="star_icon" />
        <Image className="car-image" preview={false} src={car} />
      </div>

      <div className="chevron-btns">
        <Button>
          <img className="chevron_left" src={chevron_left} alt="" />
        </Button>
        <Button>
          <img className="chevron_right" src={chevron_right} alt="" />
        </Button>
      </div>
    </div>
  );
};
