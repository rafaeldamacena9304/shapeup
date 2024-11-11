import styled from "styled-components";

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

export const EditContainer = styled.div`
  display: flex;
  align-items: center;

  input[type="text"],
  input[type="time"] {
    color: white;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 4px;
    background-color: transparent;
    border: none;
    border: 1px solid var(--darkGray);
    border-radius: 6px;
    margin-right: 8px;
  }
  input[type="text"] {
    padding-left: 8px;
  }
  input[type="time"] {
    padding: 0px 4px;
  }
`;

