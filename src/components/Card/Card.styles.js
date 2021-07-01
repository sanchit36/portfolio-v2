import styled, { css } from "styled-components";
import { BLACK, BORDERRADIUS, DARKBG, TRANSITION } from "@/styles/globalStyle";

export const CardHeaderContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 2rem;
  @media screen and (min-width: 768px) {
    grid-area: header;
    align-self: flex-end;
  }
`;

export const CardMainContainer = styled.div`
  p {
    max-width: 55ch;
  }

  > :last-child {
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    grid-area: card;
    background-color: ${DARKBG};
    border-radius: ${BORDERRADIUS};
    padding: 3rem;
    grid-row: 2;
    position: relative;
    z-index: 2;
    width: calc(100% + 30rem);
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.35);

    :hover {
      box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.35),
        1px 2px 5px rgba(0, 0, 0, 0.25);
    }
  }

  @media screen and (min-width: 1000px) {
    width: calc(100% + 15rem);
  }
`;

export const CardFooterContainer = styled.div`
  margin-top: 3rem;

  @media screen and (min-width: 768px) {
    grid-area: footer;
    align-self: flex-start;
  }
`;

export const CardImageContainer = styled.div`
  background-color: ${BLACK};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.35);
  transition: box-shadow ${TRANSITION};

  :hover {
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.35),
      1px 2px 5px rgba(0, 0, 0, 0.25);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    opacity: 0.25;
    transition: opacity ${TRANSITION};
  }

  @media screen and (min-width: 768px) {
    grid-area: img;
  }
`;

export const CardContainer = styled.div`
  position: relative;
  margin-bottom: 10rem;
  padding: 5rem 3rem;
  @media screen and (min-width: 768px) {
    :hover ${CardImageContainer} img {
      opacity: 1;
    }
    padding: 0;
    display: grid;
    grid-template-areas:
      "header img"
      "card img"
      "footer img";
    grid-template-columns: 1fr 2fr;
    align-items: center;
    ${(props) => props.inverted && invertedCardContainer}
  }
`;

const invertedCardContainer = css`
  grid-template-areas:
    "img header"
    "img card"
    "img footer";
  grid-template-columns: 2fr 1fr;
  text-align: right;

  & ${CardFooterContainer} {
    margin-left: 3rem;
    justify-self: end;
  }

  & ${CardMainContainer} {
    @media screen and (min-width: 768px) {
      left: -30rem;
    }

    @media screen and (min-width: 1000px) {
      left: -15rem;
    }
  }
`;
