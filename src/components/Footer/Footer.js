import React from "react";
import { socialLinks } from "../../data";
import { Container } from "@/styles/globalStyle";
import Links from "../Links/Links";
import { FooterContainer } from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <p>Designed and Developed by Sanchit Bhadgal</p>
        <Links data={socialLinks} />
      </Container>
    </FooterContainer>
  );
};

export default Footer;
