import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { socialAccounts } from "../../constants/urls";
import { Link } from "../../styles/GlobalComponents";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Contact Number</LinkTitle>
          <LinkItem href="tel:+923047955183">+92 304 7955183</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="hassanakram.n@gmail.com">
            hassanakram.n@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            &copy; {new Date().getFullYear()} All rights reserved by{" "}
            <Link
              target="_blank"
              href={socialAccounts.linkedin}
              style={{ fontWeight: "800" }}
            >
              Muhammad Hassan
            </Link>
            .
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons target="_blank" href={socialAccounts.github}>
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons target="_blank" href={socialAccounts.linkedin}>
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons target="_blank" href={socialAccounts.instagram}>
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
