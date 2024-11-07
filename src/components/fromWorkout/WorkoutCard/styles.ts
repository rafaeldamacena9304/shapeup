import styled from "styled-components";

export const Card = styled.div`
    width:100%;
    background-color:var(--black);
    position:relative;
    padding:32px 48px;
    border-radius:18px;
`
export const EditButton = styled.img`
    position:absolute;
    top:24px;
    right:24px;

    &:hover{
        cursor:pointer;
    }
`