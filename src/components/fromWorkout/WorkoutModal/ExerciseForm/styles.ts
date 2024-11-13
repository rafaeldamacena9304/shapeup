import styled from "styled-components";

export const ExerciseContainer = styled.div`
  border: 1px solid white;
  padding: 16px;
  width: 100%;
  border-radius: 8px;

  label {
    font-size: 16px;
    color: var(--lightGray);
    font-weight: bold;
  }
  select {
    display: inline-block;
    width: 100%;
    padding: 6px;
    background-color: transparent;
    border: 1px solid var(--blue);
    border-radius: 4px;
    color: var(--gray);
    margin-top: 12px;
    margin-bottom: 16px;
    font-weight: 500;
  }
`;
export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 16px;

  input {
    width: 45%;
    background-color: transparent;
    border: 1px solid var(--blue);
    color: var(--darkGray);
    border-radius: 4px;
    padding: 4px;
  }
`;
export const AddButton = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  span {
    color: #00ff99;
    font-size: 16px;
    font-weight: bold;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;
