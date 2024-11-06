import styled from "styled-components";
import { WrapperProps } from ".";

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  padding: ${(props) => (props.forImage === false ? '0 116px' : '0')};
  text-align:center;
`;
