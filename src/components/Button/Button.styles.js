import styled, { css } from "styled-components";
import {
  BORDERRADIUS,
  SECONDARY,
  SECONDARYFF,
  WHITE,
} from "@/styles/globalStyle";

const ButtonStyles = css`
  color: ${WHITE};
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1.8rem;
  font-family: ${SECONDARYFF};
  font-weight: bold;
  text-transform: capitalize;
  padding: 1rem 3rem;
  border: 2px solid ${SECONDARY};
  border-radius: ${BORDERRADIUS};
  position: relative;
  z-index: 1;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    background-color: ${SECONDARY};

    transition: transform 300ms ease-in-out;
    transform: scaleX(0);
    transform-origin: left;
  }

  :hover::before,
  :focus::before {
    transform: scaleX(1);
  }
`;

export const Button = styled.button`
  ${ButtonStyles}
`;

export const ButtonLink = styled.a`
  ${ButtonStyles}
`;

export const ButtonGroup = styled.div`
  max-width: 500px;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  & button + button {
    margin-top: 3rem;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    & button + button {
      margin-top: 0;
    }
  }
`;
