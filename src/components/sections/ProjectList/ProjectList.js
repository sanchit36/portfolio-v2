import React from "react";
import { Container, Section } from "@/styles/globalStyle";
import Heading from "../../Heading/Heading";
import Project from "../../Project/Project";

const ProjectList = ({ projects }) => {
  return (
    <React.Fragment>
      <Section id="work">
        <Container>
          <Heading>Projects</Heading>
          {projects?.map(({ id, ...rest }, index) => (
            <Project key={id} {...rest} inverted={index % 2} />
          ))}
        </Container>
      </Section>
    </React.Fragment>
  );
};

export default ProjectList;
