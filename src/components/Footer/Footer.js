import React from "react";
import { Container } from "@/styles/globalStyle";
import Links from "../Links/Links";
import { FooterContainer } from "./Footer.styles";
import { intro } from "src/data/intro";

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <p>Designed and Developed by {intro.name}</p>
        <Links />
      </Container>
    </FooterContainer>
  );
};

export default Footer;
