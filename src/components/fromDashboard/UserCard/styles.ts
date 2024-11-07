import styled from "styled-components";

export const Card = styled.div`
    padding:16px 32px;
    background-color:var(--black);
    border-radius:16px;
`

export const Profile = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom:16px;

    h4{
        color:white;
        font-size:24px;
        font-weight:500;
    }
`
export const ContentGrid = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    column-gap:16px;
    row-gap:8px;
`
export const Item = styled.p`
    font-size:14px;
    font-weight:500;
    color:white;
`
export const Value = styled.span`
    display:inline-block;
    font-weight:normal;
    color:var(--gray);
    font-size:14px;
`