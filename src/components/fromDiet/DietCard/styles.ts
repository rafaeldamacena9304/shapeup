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

export const ModalOverlay = styled.div<{ isModalOpen: boolean }>`
  position: fixed;
  width:100%;
  height:100%;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.9);
  display: ${(props) => (props.isModalOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div<{ isModalOpen: boolean }>`
  position:relative;
  padding: 32px;
  width: 360px;
  color: white;
  margin: 0 auto;
  z-index: 3;
  border-radius: 16px;
  display:${props => props.isModalOpen ? 'block' : 'none'};
  
`;
export const SearchBar = styled.div`
  position: relative;

  img {
    position: absolute;
    left: 8px;
    top: 8px;
    height:20px;
  }

  input {
    padding-left: 32px;
    width: 100%;
    font-size: 20px;
    border: 1px solid white;
    border-radius: 4px;
    background-color: transparent;
    color: white;
    padding-top:4px;
    padding-bottom:4px;
    margin-bottom:16px;
  }
`;
export const Suggestions = styled.ul`
  list-style: none;
  overflow-y:scroll;
  max-height:400px;

  li{
    padding:8px;
    border:1px solid gray;
    
    &:hover{
      cursor:pointer;
      border:1px solid var(--blue)
    }
  }
  span{
    font-weight:bold;
  }
  span:not(:nth-child(1)){
    color:var(--blue)
  }
`

// Selected Food Content

export const Title = styled.p`
    font-size:16px;
    font-weight:bold;
    color:white;
    margin-bottom:16px;
`
export const Key = styled.p`
    color:var(--lightGray);
    font-weight:600;
    font-size:14px;
    margin-bottom:4px;
`
export const Value = styled.span`
    color:var(--darkGray);
    font-size:14px;
` 
export const AddButton = styled.button`
    width:100%;
    display:flex;
    align-items: center;
    justify-content: center;
    background-image:var(--blueGradient);
    color:white;
    border:none;
    padding:4px 0;
    margin-top:16px;
    font-weight:bold;
    font-size:16px;
    border-radius:6px;
`