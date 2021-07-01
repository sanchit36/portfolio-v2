import React from "react";
import { CardContainer } from "./Card.styles";

const Card = ({ children, ...rest }) => {
  return (
    <React.Fragment>
      <CardContainer {...rest}>{children}</CardContainer>
    </React.Fragment>
  );
};

export default Card;
