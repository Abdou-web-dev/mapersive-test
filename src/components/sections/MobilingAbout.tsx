import all_days from "../../assets/img/all_days.svg";
import book from "../../assets/img/book.svg";
import business from "../../assets/img/business.svg";
import locations from "../../assets/img/locations.svg";
import { MobilingHeader } from "../headers/MobilingHeader";
import { MobilingInfo } from "./MobilingInfo";
import "./sections_styles.scss";

export const MobilingAbout = () => {
  return (
    <>
      <div className="mobiling-about-container">
        <div className="mobiling-about-left-content">
          <div className="left-content-header">
            <MobilingHeader headerLabel="About Us" />
          </div>
          <div className="left-content-small-paragraph-wrapper">
            <p>Find out briefly but informatively</p>
          </div>
          <div className="left-content-big-paragraph-wrapper">
            <p>
              As an upscale and exclusive chauffeur and limousine service near
              Indonesia, we have been ensuring for more than 15 years that you
              get to your destination on time and safely. We sell in around
              Indonesia , as well as beyond to destinations throughout World.
              From the Indonesia to shuttle service, you can look forward to a
              professional team and comfort of our car service.
            </p>
          </div>
        </div>
        <div className="mobiling-about-right-content">
          <div className="mobiling-about-right-content-inner">
            <MobilingInfo text="From business to Luxuryclass" icon={business} />
            <MobilingInfo text="125 Location in Indonesia" icon={locations} />
            <MobilingInfo text="Convenient Online Book" icon={book} />
            <MobilingInfo text="24/7 Exclusive On the road" icon={all_days} />
          </div>
        </div>
      </div>
    </>
  );
};
