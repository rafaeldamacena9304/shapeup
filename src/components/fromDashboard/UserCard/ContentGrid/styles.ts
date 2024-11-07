import styled from "styled-components";

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  row-gap: 8px;
`;
export const Item = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: white;
`;
export const Value = styled.span`
  display: inline-block;
  font-weight: normal;
  color: var(--gray);
  font-size: 14px;
`;
