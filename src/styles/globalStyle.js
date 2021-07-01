import styled, { createGlobalStyle } from "styled-components";

// GLOBAL VARIABLES
export const DARKBG = "#0B0C10";
export const MEDBG = "#11111B";
export const LIGHTBG = "#1F2833";
export const TEXT = "#CCD6F6";
export const SECONDARYTEXT = "#8892B0";
export const PRIMARY = "#66FCF1";
export const SECONDARY = "#45A29E";
export const WHITE = "#E6F1FF";
export const BLACK = "#000000";
export const PRIMARYFF = "'Montserrat', sans-serif";
export const SECONDARYFF = "'Nunito', sans-serif";
export const MAXWIDTH = "1200px";
export const SPACING = "0.1rem";
export const BORDERRADIUS = ".5rem";
export const TRANSITION = "300ms ease-in-out";

const GlobalStyles = createGlobalStyle`
  *,
  ::before,
  ::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 10px;
    scroll-behavior: smooth;
  }

  body{
    max-width: 100vw;
    min-height: 100vh;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: ${SECONDARYFF};
    background-color: ${MEDBG};
    color: ${TEXT};
    line-height: 1.3;
    font-size: 1.6rem;

    #root{
      max-width: 100vw;
      min-height: 100vh;
      display: flex;
      flex-direction: column;

      main {
        flex: 1;
      }
    }
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4 {
    color: ${WHITE};
    letter-spacing: ${SPACING};
    margin-bottom: 1rem;
    font-family: ${PRIMARYFF};
    font-weight: 700;
  }

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 2.6rem;
  }

  h3 {
    font-size: 2.2rem;
  }

  h4 {
    font-size: 1.8rem;
  }

  p {
    font-size: 1.8rem;
    margin: 1rem 0;
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 6.1rem;
    }
    h2 {
      font-size: 3.2rem;
    }
    h3 {
      font-size: 2.6rem;
    }
    h4 {
      font-size: 2.0rem;
    }
  }

  @media screen and (min-width: 1024px) {
    h1 {
      font-size: 7.2rem;
    }
    h2 {
      font-size: 3.6rem;
    }
    h3 {
      font-size: 2.8rem;
    }
    h4 {
      font-size: 2.2rem;
    }
    h1,
    h2,
    h3,
    h4 {
      line-height: 1.1;
    }
  }
`;

// Global Components
export const Container = styled.div`
  max-width: ${MAXWIDTH};
  margin: 0 auto;
  padding: 0 4rem;
`;

export const Section = styled.section`
  padding: 7.5rem 0;
`;

export const SectionCenter = styled(Section)`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
`;

export const LeadPara = styled.p`
  font-size: 1.8rem;
  line-height: 1.5;
  margin: 2.5rem 0;
  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

export default GlobalStyles;
