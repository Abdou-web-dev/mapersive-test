import { Link } from "react-router-dom";

export const FooterLink = ({ link }: { link: string }) => {
  let label = link;
  return (
    <>
      <Link
        className="footer-link-container"
        to={link?.slice(0, 5)}
        target="_blank"
      >
        <span>{label}</span>
      </Link>
    </>
  );
};
