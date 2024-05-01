import React from "react";
import { Container } from "@/styles/globalStyle";
import Links from "../Links/Links";
import { FooterContainer } from "./Footer.styles";

const Footer = ({ links }) => {
  return (
    <FooterContainer>
      <Container>
        <p>Designed and Developed by Sanchit Bhadgal</p>
        <Links links={links} />
      </Container>
    </FooterContainer>
  );
};

export default Footer;
