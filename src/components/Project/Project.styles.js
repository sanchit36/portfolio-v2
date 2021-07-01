import styled from "styled-components";
import { PRIMARY, SECONDARY } from "@/styles/globalStyle";

export const ParaPrimary = styled.p`
  margin-bottom: 0.5rem;
  color: ${PRIMARY};
`;

export const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-weight: 300;
  p {
    font-size: 1.6rem;
    margin-right: 1.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const IconsContainer = styled.div`
  margin-top: 1rem;
  & a {
    color: ${PRIMARY};
    display: inline-block;
    font-size: 2.4rem;
    margin-right: 2rem;
    :hover {
      color: ${SECONDARY};
    }
  }
`;
