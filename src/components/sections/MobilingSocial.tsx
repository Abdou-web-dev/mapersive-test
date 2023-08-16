import { Button } from "antd";
import white_chevron from "../../assets/img/white_chevron.svg";
import { useMediaQuery } from "../../hooks/UseMediaQuery";
import { MobilingHeader } from "../headers/MobilingHeader";
import "./sections_styles.scss";

export const MobilingSocial = () => {
  const is_width_less_390 = useMediaQuery("(max-width: 390px)");

  return (
    <>
      <div className="mobiling-social-container">
        <div className="mobiling-social-header">
          <MobilingHeader headerLabel="Mobiling Social" />
        </div>
        <div className="mobiling-social-inner">
          <div className="mobiling-social-inner-infos">
            <div className="mobiling-social-inner-text-infos">
              <h3>Information on data processing</h3>
              <p>
                On our website we provide content from Storystream. To view this
                content, you must agree to the data processing by Storystream.
              </p>
            </div>
            <div className="mobiling-social-inner-buttons-infos">
              <Button
                icon={
                  <>
                    <img src={white_chevron} alt="" />
                  </>
                }
                className="agree"
              >
                <span>Agree</span>
              </Button>
              <Button
                icon={
                  <>
                    <img src={white_chevron} alt="" />
                  </>
                }
                className="data-priv"
              >
                <span>
                  {is_width_less_390 ? `Info` : `Information on data privacy`}
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
