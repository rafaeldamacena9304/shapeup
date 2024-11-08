import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  width: 100%;
  background-color: var(--black);
  padding: 32px 48px;
  border-radius: 16px;
  margin-bottom: 32px;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const EditButton = styled.button`
  color: var(--lightGray);
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 2px solid var(--blue);
  border-radius: 12px;
  margin-right: 14px;
  padding: 4px 8px;
  font-weight: 500;

  img {
    margin-right: 10px;
  }

  &:hover {
    cursor: pointer;
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
`;
