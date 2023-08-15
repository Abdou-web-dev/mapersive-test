import { Link } from "react-router-dom";

export const SocialIcon = ({
  iconPath,
  twitter,
  facebook,
  linkedin,
  instagram,
}: {
  iconPath: string;
  twitter: string;
  facebook: string;
  linkedin: string;
  instagram: string;
}) => {
  // let socialIcons = [twitter, facebook, linkedin, instagram];
  // Twitter has officially changed its logo to 'X'

  return (
    <Link
      className="social-link-container"
      target="_blank"
      to={
        iconPath === twitter
          ? `https://www.twitter.com`
          : iconPath === facebook
          ? `https://www.facebook.com`
          : iconPath === linkedin
          ? `https://www.linkedin.com`
          : iconPath === instagram
          ? `https://www.instagram.com`
          : ``
      }
    >
      <img src={iconPath} alt="" />
    </Link>
  );
};
