import styled from "styled-components";
import { BORDERRADIUS } from "@/styles/globalStyle";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
  /* background-color: red; */

  input,
  textarea {
    min-width: 100%;
    max-width: 100%;
    padding: 1.5rem;
    font-size: 1.6rem;
    outline: 0;
    border: 0;
    border-radius: ${BORDERRADIUS};
  }
`;
