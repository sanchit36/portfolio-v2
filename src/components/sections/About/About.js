import React from "react";
import { Container, Section } from "@/styles/globalStyle";
import { ButtonLink } from "../../Button/Button.styles";
import Heading from "../../Heading/Heading";
import { Content, Flex, ImageContainer } from "./About.styles";

import Links from "../../Links/Links";

const About = ({ about, links }) => {
  return (
    <React.Fragment>
      <Section style={{ paddingTop: 0 }}>
        <Container>
          <Heading>About</Heading>
          <Flex>
            <Content>
              <div dangerouslySetInnerHTML={{ __html: about.content }} />
              {about.resume_url && (
                <ButtonLink
                  target="blank"
                  href={about.resume_url}
                  style={{ marginTop: "3rem" }}
                >
                  Resume
                </ButtonLink>
              )}
              <Links links={links} />
            </Content>
            <ImageContainer>
              <img src={about.image} alt="" />
            </ImageContainer>
          </Flex>
        </Container>
      </Section>
    </React.Fragment>
  );
};

export default About;
