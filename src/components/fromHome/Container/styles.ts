import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  width: 100%;
  overflow-y: hidden;

  @media (max-width:768px){
    grid-template-columns:1fr;
  }
`;
