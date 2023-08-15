import { MobilingAbout } from "../components/sections/MobilingAbout";
import { MobilingCarImage } from "../components/sections/MobilingCarImage";
import { MobilingCarInfos } from "../components/sections/MobilingCarInfos";
import { MobilingFooter } from "../components/sections/MobilingFooter";
import { MobilingHeaderInput } from "../components/sections/MobilingHeaderInput";
import { MobilingSocial } from "../components/sections/MobilingSocial";
import "./pages_styles.scss";

function Home() {
  return (
    <div className="home-container">
      <div className="home-search-input-and-car-img">
        <div className="home-header-input-group">
          <MobilingHeaderInput />
          <MobilingCarInfos />
        </div>
        <div className="home-image-wrapper">
          <MobilingCarImage />
        </div>
      </div>
      <div className="home-social">
        <MobilingSocial />
      </div>
      <div className="home-about">
        <MobilingAbout />
      </div>
      <div className="home-footer">
        <MobilingFooter />
      </div>
    </div>
  );
}

export default Home;
