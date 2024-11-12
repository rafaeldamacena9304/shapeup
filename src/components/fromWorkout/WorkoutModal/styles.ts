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
export const Content = styled.div<{isModalOpen: boolean}>`
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
  padding: 32px;
  display:${props => props.isModalOpen ? "block" : "none"};

  h3 {
    font-weight: bold;
    font-size: 20px;
    color: white;
    text-align: center;
    margin-bottom: 32px;
  }
`;
export const ExerciseList = styled.ul`
    position:relative;
    display:grid;
    grid-template-columns:1fr 1fr;
    gap: 24px;
    margin-bottom:48px;
    z-index: 3;
`
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
    font-weight:500;
  }
`;
export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom:16px;

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
    align-items: center;
    
    &:hover{
        cursor:pointer;
    }

    span{
        color:#00FF99;
        font-size:16px;
        font-weight:bold;
    }

    img{
        width:24px;
        height:24px;
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

    &:hover{
      cursor:pointer;
    }
`
export const FinalList = styled.ul`
  color:white;
  padding:16px;
  border:1px solid var(--blue);
  border-radius:8px;
  list-style: none;
  max-height:280px;
  overflow-y: scroll;

  h3{
    font-size:16px;
    color:var(--gray);
    font-weight:bold;
    text-align:start
  }
  li{
    font-size:14px;
    color:var(--gray);
    margin-bottom:4px;
    display:flex;
    align-items: center;
    font-weight:600;  

    img{
      margin-right:8px;
      height:32px;
      width:20px;
    }
  }
`