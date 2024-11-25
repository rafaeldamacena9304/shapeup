import styled from "styled-components";

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  h4 {
    color: white;
    font-size: 24px;
    font-weight: 500;

    @media (max-width:576px){
      font-size:18px;
    }
  }

  img:hover{
    cursor:pointer;
  }
`;
