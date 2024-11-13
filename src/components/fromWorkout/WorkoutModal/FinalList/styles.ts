import styled from "styled-components";

export const FinalList = styled.ul`
  color: white;
  padding: 16px;
  border: 1px solid var(--blue);
  border-radius: 8px;
  list-style: none;
  max-height: 280px;
  overflow-y: scroll;

  h3 {
    font-size: 16px;
    color: var(--gray);
    font-weight: bold;
    text-align: start;
  }
  li {
    font-size: 14px;
    color: var(--gray);
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    font-weight: 600;

    img {
      margin-right: 8px;
      height: 32px;
      width: 20px;
    }
  }
`;
