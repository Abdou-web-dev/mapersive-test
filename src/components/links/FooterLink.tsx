import { Link } from "react-router-dom";

export const FooterLink = ({ link }: { link: string }) => {
  let label = link;
  return (
    <>
      <Link
        style={{
          maxWidth:
            link === "Online service campaign VIN-checker" ? "210px" : "",
        }}
        className="footer-link-container"
        to={link?.slice(0, 5)}
        target="_blank"
      >
        <span>{label}</span>
      </Link>
    </>
  );
};
