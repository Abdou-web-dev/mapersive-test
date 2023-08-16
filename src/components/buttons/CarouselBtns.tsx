import { Button } from "antd";
import chevron_left from "../../assets/img/chevron_left.svg";
import chevron_right from "../../assets/img/chevron_right.svg";
import { useMediaQuery } from "../../hooks/UseMediaQuery";

export const CarouselBtns = () => {
  const is_width_between_640_1024 = useMediaQuery(
    "(min-width: 640px) and (max-width:1024px)"
  );
  return (
    <div
      className={
        is_width_between_640_1024
          ? "chevron-btns chevron-btns-small"
          : "chevron-btns"
      }
    >
      <Button>
        <img className="chev chevron_left" src={chevron_left} alt="" />
      </Button>
      <Button>
        <img className="chev chevron_right" src={chevron_right} alt="" />
      </Button>
    </div>
  );
};
