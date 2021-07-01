import styled from "styled-components";
import { PRIMARY, SECONDARY } from "@/styles/globalStyle";

export const LinksContainer = styled.div`
  margin-top: 4rem;
  position: relative;

  & a {
    color: ${PRIMARY};
    display: inline-block;
    font-size: 2.6rem;

    :hover {
      color: ${SECONDARY};
    }
  }

  & a + a {
    margin-left: 4rem;
  }
`;
