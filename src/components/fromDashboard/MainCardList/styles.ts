import styled from "styled-components";

export const CardList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 64px;

  @media (max-width:768px){
    grid-template-columns:1fr;
    gap:24px; 
  }
`;
