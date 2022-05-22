import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLink,
  FooterLinkTitle,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIconLink,
  SocialIcons
} from "./FooterElements";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/">How it Works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/">Contact</FooterLink>
              <FooterLink to="/">Support</FooterLink>
              <FooterLink to="/">Destinations</FooterLink>
              <FooterLink to="/">Sponsorship</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/">Submit Video</FooterLink>
              <FooterLink to="/">Ambassador</FooterLink>
              <FooterLink to="/">Agency</FooterLink>
              <FooterLink to="/">Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Business</FooterLinkTitle>
              <FooterLink to="/">Investments</FooterLink>
              <FooterLink to="/">Savings</FooterLink>
              <FooterLink to="/">Intelligence</FooterLink>
              <FooterLink to="/">Competitiveness</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to='/'>dolla</SocialLogo>
                <WebsiteRights>dolla © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href='//facebook.com' target='_blank' aria-label="facebook"><FaFacebook /></SocialIconLink>
                    <SocialIconLink href='//instagram.com' target='_blank' aria-label="instagram"><FaInstagram /></SocialIconLink>
                    <SocialIconLink href='//youtube.com' target='_blank' aria-label="youtube"><FaYoutube /></SocialIconLink>
                    <SocialIconLink href='//twitter.com' target='_blank' aria-label="twitter"><FaTwitter /></SocialIconLink>
                    <SocialIconLink href='//linkedin.com' target='_blank' aria-label="linkedin"><FaLinkedin /></SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
