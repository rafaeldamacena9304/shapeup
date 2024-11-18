import styled from "styled-components";

export const ModalOverlay = styled.div<{ isModalOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.9);
  display: ${(props) => (props.isModalOpen ? "block" : "none")};
`;
export const Content = styled.div<{ isModalOpen: boolean }>`
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
  padding: 32px;  
  display: ${(props) => (props.isModalOpen ? "block" : "none")};
  @media (max-width:576px){
    padding:0;
  }

  h3 {
    font-weight: bold;
    font-size: 20px;
    color: white;
    text-align: center;
    margin-bottom: 32px;
  }
`;
export const ExerciseList = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 48px;
  z-index: 3;

  @media (max-width:576px){
    grid-template-columns:1fr;
  }
`;

export const SaveButton = styled.button`
  width: 100%;
  padding: 8px;
  border-radius: 16px;
  font-size: 20px;
  border: none;
  font-weight: bold;
  color: white;
  background-image: var(--blueGradient);

  &:hover {
    cursor: pointer;
  }
`;
