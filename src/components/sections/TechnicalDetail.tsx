import "./sections_styles.scss";

export const TechnicalDetail = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  return (
    <>
      <div className="tech-detail-container">
        <span className="label">{label}</span>
        <span className="value">{value}</span>
      </div>
    </>
  );
};
