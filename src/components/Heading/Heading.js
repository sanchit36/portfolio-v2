import React from "react";
import { HeadingStyled } from "./Heading.styles";

const Heading = ({ children }) => {
  return (
    <HeadingStyled>
      <span>{"< "}</span>
      {children}
      <span>{"  />"}</span>
    </HeadingStyled>
  );
};

export default Heading;
