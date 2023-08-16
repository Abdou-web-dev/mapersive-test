import sub_divider from "../../assets/img/sub_divider.svg";
import { useMediaQuery } from "../../hooks/UseMediaQuery";
import { TechnicalDetail } from "./TechnicalDetail";
import "./sections_styles.scss";

export const MobilingCarInfos = () => {
  const is_width_less_720 = useMediaQuery("(max-width: 720px)");

  return (
    <>
      <div className="mobiling-car-infos-container">
        <div className="h3-wrapper">
          <h3>BMW Series 3 BLUE</h3>
        </div>
        <div className="mobiling-car-infos-tech-details-group">
          <TechnicalDetail label="Base Price" value="$ 41.87k" />
          <TechnicalDetail label="Power" value="365 HP" />
          <TechnicalDetail label="Engine" value="362 V6" />
        </div>
        {/* <TechnicalDetail label="Base Price" value="$ 41.87k" /> */}
        {!is_width_less_720 && (
          <div className="mobiling-car-infos-sub-divider">
            <img src={sub_divider} alt="" />
          </div>
        )}
      </div>
    </>
  );
};
