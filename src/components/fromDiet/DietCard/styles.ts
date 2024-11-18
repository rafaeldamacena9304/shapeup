import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  width: 100%;
  background-color: var(--black);
  padding: 32px 48px;
  border-radius: 16px;
  margin-bottom: 32px;

  @media (max-width:385px){
    padding:16px 20px;
  }
`;

export const TotalKcal = styled.span`
  display: inline-block;
  position: absolute;
  bottom: 10px;
  right: 50px;
  color: var(--lightGray);
  font-size: 14px;
  font-weight: 600;

  @media (max-width:385px){
    font-size:12px;
    bottom:4px;
    right:24px;
  }
`;
