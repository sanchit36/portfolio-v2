import React from "react";
import { SectionCenter } from "@/styles/globalStyle";
import { ButtonGroup, ButtonLink } from "../../Button/Button.styles";
import { Center, Content, Para, SubTitle } from "./Banner.styles";
import Typed from "react-typed";

const Banner = ({ intro }) => {
  return (
    <React.Fragment>
      <SectionCenter>
        <Center>
          <Para>Hey, my name is</Para>
          <h1>{intro.name}</h1>

          <SubTitle>
            {"< "}
            <Typed
              strings={intro.roles.map((role) => role.name)}
              typeSpeed={40}
              backSpeed={50}
              cursorChar={" />"}
              loop
            />
          </SubTitle>
          <Content>{intro.content}</Content>
          <ButtonGroup>
            <ButtonLink href="#work">My Work</ButtonLink>
          </ButtonGroup>
        </Center>
      </SectionCenter>
    </React.Fragment>
  );
};

export default Banner;
