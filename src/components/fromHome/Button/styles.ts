import styled from "styled-components";

export const Button = styled.button`
  padding: 16px 48px;
  background-image: linear-gradient(to right, var(--darkBlue), var(--lightBlue));
  font-size: 20px;
  font-weight:bold;
  margin-bottom: 24px;
  border:none;
  color:white;
  border-radius:32px;
  transition: all .5s;

  &:hover{
    cursor:pointer;
    transform:scale(1.05);
    transition: all .5s;
  }

`;
