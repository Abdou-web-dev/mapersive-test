import { TechnicalDetail } from "./TechnicalDetail";
import "./sections_styles.scss";

export const MobilingCarInfos = () => {
  return (
    <>
      <div className="mobiling-car-infos-container">
        <h3>BMW Series 3 BLUE</h3>
        <div className="mobiling-car-infos-tech-details-group">
          <TechnicalDetail label="Base Price" value="$ 41.87k" />
          <TechnicalDetail label="Power" value="365 HP" />
          <TechnicalDetail label="Engine" value="362 V6" />
        </div>
        {/* <TechnicalDetail label="Base Price" value="$ 41.87k" /> */}
      </div>
    </>
  );
};
