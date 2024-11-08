import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
  background-color: #1c1c1c;
  padding: 16px;
  margin-bottom: 8px;
  border-radius: 8px;
`;
export const Title = styled.p`
  color: var(--lightGray);
  font-size: 14px;
  font-weight: 600;
`;
export const DeleteButton = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 16px;
  height: 16px;

  &:hover {
    cursor: pointer;
  }
`;
export const Infos = styled.div`
  margin-top: 4px;
  color: var(--darkGray);
  font-size: 14px;
  font-weight: normal;
  display: flex;
  align-items: center;

  span {
    margin-right: 4px;
  }
`;
