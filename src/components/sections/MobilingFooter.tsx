import { Button } from "antd";
import arrow from "../../assets/img/arrow.svg";
import facebook from "../../assets/img/facebook.svg";
import footer_icon from "../../assets/img/footer_icon.svg";
import instagram from "../../assets/img/instagram.svg";
import language from "../../assets/img/language.svg";
import linkedin from "../../assets/img/linkedin.svg";
import twitter from "../../assets/img/twitter.svg";
import { CustomDivider } from "../dividers/CustomDivider";
import { LinkHeader } from "../headers/LinkHeader";
import { SocialIcon } from "../icons/SocialIcon";
import { FooterLink } from "../links/FooterLink";
import { SubDividerText } from "./SubDividerText";
import "./sections_styles.scss";

export const MobilingFooter = () => {
  let socialIcons = [twitter, facebook, linkedin, instagram];
  let firstGroupLinks = [
    "Find new car",
    "Current vehicle offers",
    "Price lists & brochures",
  ];
  let secondGroupLinks = [
    "Book a test drive",
    "Find a dealer near you",
    "Find used vehicles",
  ];
  let thirdGroupLinks = [
    "Current service offers",
    "Online service campaign VIN-checker",
    "5 Year staf service",
    "24h roadside assitance",
    "New and events",
    "Press relase",
  ];

  return (
    <div className="mobiling-footer-container">
      <div className="mobiling-footer-top-columns">
        <div className="mobiling-footer-column1">
          <div className="mobiling-footer-column1-header">
            <img className="footer_icon" src={footer_icon} alt="" />
            <div className="mobiling-footer-column1-header-text">
              <span className="mobiling">Mobiling</span>
              <span className="auto">Automobile</span>
            </div>
          </div>
          <div className="mobiling-footer-column1-footer">
            <p>
              As an upscale and exclusive chauffeur and limousine service near
              Indonesia, we have been ensuring for more than 15 years that you
              get to your destination on time and safely.
            </p>
          </div>
          <div className="mobiling-footer-column1-social-icons">
            {socialIcons?.map((icon: string, index: number) => {
              return (
                <SocialIcon
                  key={index}
                  iconPath={icon}
                  {...{ facebook, instagram, linkedin, twitter }}
                />
              );
            })}
          </div>
        </div>
        <div className="mobiling-footer-column2">
          <div className="col2-header">
            <LinkHeader label="Buy Vehicle" />
          </div>
          <div className="col2-links-group">
            {firstGroupLinks?.map((link: string, index: number) => {
              return <FooterLink key={index} link={link} />;
            })}
          </div>
        </div>
        <div className="mobiling-footer-column3">
          <div className="col3-header">
            <LinkHeader label="Purchase advice" />
          </div>

          <div className="col3-links-group">
            {secondGroupLinks?.map((link: string, index: number) => {
              return <FooterLink key={index} link={link} />;
            })}
          </div>
        </div>
        <div className="mobiling-footer-column4">
          <div className="col4-header">
            <LinkHeader label="Customer Service" />
          </div>
          <div className="col4-links-group">
            {thirdGroupLinks?.map((link: string, index: number) => {
              return <FooterLink key={index} link={link} />;
            })}
          </div>
        </div>
      </div>
      <div className="mobiling-footer-divider">
        <CustomDivider />
      </div>

      <div className="mobiling-footer-sub__divider-content">
        <div className="sub__divider-content-group1">
          <div className="sub__divider-content-group1-left">
            <SubDividerText text="Copyright 2023 Mobiling Co." />
          </div>
          <div className="sub__divider-content-group1-right">
            <SubDividerText text="Terms of Service" />
            <SubDividerText text="Privacy Policy" />
            <SubDividerText text="Cookies" />
          </div>
        </div>

        <div className="sub__divider-content-group2">
          <Button className="language-btn">
            <img className="language" src={language} alt="" />
          </Button>
          <span>{`English`}</span>
          <img className="arrow" src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
};
