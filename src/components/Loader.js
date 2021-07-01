import React from "react";
import { Circle } from "better-react-spinkit";
import { Container, MEDBG, PRIMARY } from "@/styles/globalStyle";

const Loader = () => {
  return (
    <Container
      style={{
        backgroundColor: MEDBG,
        padding: "5rem",
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Circle size={50} color={PRIMARY} />
    </Container>
  );
};

export default Loader;
