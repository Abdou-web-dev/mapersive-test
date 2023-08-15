import { Link } from "react-router-dom";

export const SubDividerText = ({ text }: { text: string }) => {
  return (
    <>
      <Link
        to={text?.slice(0, 5)}
        className="subdivider-link-container"
        target="_blank"
      >
        <span className="sub-divider-text">{text}</span>
      </Link>
    </>
  );
};
