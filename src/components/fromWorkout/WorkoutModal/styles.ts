import styled from "styled-components";

export const ModalOverlay = styled.div<{isModalOpen: boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.9);
  display: ${props => props.isModalOpen ? 'block' : 'none'};
`;
export const Content = styled.div`
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  padding: 32px;

  h3 {
    font-weight: bold;
    font-size: 20px;
    color: white;
    text-align: center;
    margin-bottom: 32px;
  }
`;
export const ExerciseList = styled.ul`
    display:grid;
    grid-template-columns:1fr 1fr;
    gap: 24px;
    margin-bottom:48px;
`
export const ExerciseContainer = styled.div`
  border: 1px solid white;
  padding: 16px;
  width: 100%;
  border-radius: 8px;

  label {
    font-size: 16px;
    color: var(--gray);
    font-weight: 500;
  }
  select {
    display: inline-block;
    width: 100%;
    padding: 6px;
    background-color: transparent;
    border: 1px solid var(--blue);
    border-radius: 4px;
    color: var(--darkGray);
    margin-top: 6px;
    margin-bottom: 16px;
  }
`;
export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;

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
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;

    &:hover{
        cursor:pointer;
    }

    span{
        color:var(--gray);
        font-size:20px;
        font-weight:bold;
    }

    img{
        width:64px;
        height:64px;
    }
`
export const SaveButton = styled.button`
    width:100%;
    padding:8px;
    border-radius:16px;
    font-size:20px;
    border:none;
    font-weight:bold;
    color:white;
    background-image: var(--blueGradient);
`