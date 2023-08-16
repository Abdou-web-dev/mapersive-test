import { Image } from "antd";
import car from "../../assets/img/car.svg";
import star_icon from "../../assets/img/star_icon.svg";
import { useMediaQuery } from "../../hooks/UseMediaQuery";
import { CarouselBtns } from "../buttons/CarouselBtns";
import "./sections_styles.scss";

export const MobilingCarImage = () => {
  const is_width_between_640_1024 = useMediaQuery(
    "(min-width: 640px) and (max-width:1024px)"
  );
  const is_width_less_640 = useMediaQuery("(max-width: 640px)");

  return (
    <div className="car-image-container">
      <div className={is_width_less_640 ? "" : "car-image-bg"}></div>

      <div
        className={
          is_width_less_640 ? "car-overlay__less-640" : "car-image-overlay"
        }
      >
        <>
          {!is_width_less_640 && (
            <img src={star_icon} alt="" className="star_icon" />
          )}
        </>
        <>
          {is_width_less_640 ? (
            <Image
              width={`60%`}
              height={`100%`}
              className="car-image car-image__less-640"
              preview={false}
              src={car}
            />
          ) : !is_width_between_640_1024 ? (
            <Image className="car-image" preview={false} src={car} />
          ) : (
            <>
              <div className="chevron-btns__and-car-img">
                <Image className="car-image" preview={false} src={car} />
                <CarouselBtns />
              </div>
            </>
          )}
        </>
      </div>

      <>{!is_width_between_640_1024 && <CarouselBtns />}</>
    </div>
  );
};
