import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 8px;
  margin-bottom: 32px;

  img {
    margin-right: 4px;
  }

  span {
    font-weight: 600;
    color: #00ff99;
    font-size: 16px;
  }

  &:hover {
    cursor: pointer;
  }
`;
