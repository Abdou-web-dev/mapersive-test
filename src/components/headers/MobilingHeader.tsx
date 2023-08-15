import "./headers_styles.scss";

export const MobilingHeader = ({ headerLabel }: { headerLabel: string }) => {
  return (
    <>
      <h2 className="mobiling-header">{headerLabel}</h2>
    </>
  );
};
