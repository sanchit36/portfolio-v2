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
