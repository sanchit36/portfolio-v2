import styled from "styled-components";
import { BORDERRADIUS } from "@/styles/globalStyle";

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-around;
  gap: 5rem;
  text-align: justify;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 65ch;
`;

export const ImageContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }

  flex: 1;
  width: 100%;
  min-width: 150px;
  max-width: 300px;

  img {
    width: 100%;
    object-fit: cover;
    object-position: top center;
    border-radius: ${BORDERRADIUS};
  }
`;
