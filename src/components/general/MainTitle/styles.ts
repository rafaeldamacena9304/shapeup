import styled from "styled-components";

export const MainTitle = styled.h1`
  background-image: var(--blueGradient);
  background-clip: text;
  -webkit-background-clip: text;
  font-weight: bold;
  font-size: 48px;
  color: transparent;

  @media (max-width:385px){
    font-size:32px;
  }
`;
