import styled, { createGlobalStyle } from "styled-components";

// Global Style
export const GlobalStyle = createGlobalStyle`
  svg {
    height: 60px;
    width: 60px; 
  }
`;

export const AppDiv = styled.div`
  // border: 1px solid red;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;
`;
