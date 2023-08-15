import "./sections_styles.scss";

export const MobilingInfo = ({
  icon,
  text,
}: {
  icon: string;
  text: string;
}) => {
  return (
    <>
      <div className="mobiling-info-container">
        <img src={icon} alt="" />
        <span>{text}</span>
      </div>
    </>
  );
};
