import styled from "styled-components";
import { WrapperProps } from ".";

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: ${(props) => (props.forImage === false ? "0 116px" : "0")};
  text-align: center;
  overflow-x: hidden;

  @media (max-width:768px){
    padding: ${(props) => (props.forImage === false ? "32px 116px" : "0")};
  }
  @media (max-width:385px){
    padding: ${(props) => (props.forImage === false ? "32px" : "0")};
  }
`;
