import styled from "styled-components";

export const FormOverlay = styled.form<{isModalOpen: boolean}>`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:2;
    background-color:rgba(0,0,0,0.95);
    display:${props => props.isModalOpen ? "block" : "none"};
`
export const InputContainer = styled.div`
    position:relative;

    img{
        position:absolute;
        top:8px;
        left:6px;
        height:20px;
    }
`
export const Form = styled.form<{isModalOpen: boolean}>`
    position:fixed;
    z-index:3;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);  
    padding:32px;
    background-color:var(--black);
    display: ${props => props.isModalOpen ? "flex" : "none"};
    flex-direction:column;
    width:360px;
    max-width:360px;
    border-radius:16px;

    h3{
        margin-bottom:16px;
        text-align:center;
        color:white;
        font-size:32px;
        font-weight:bold;
    }

    input, select{
        margin-bottom:16px;
        width:100%;
        color:white;
        border:none;
        border-radius:8px;
        font-size:18px;
        background-color:transparent;
        border:1px solid var(--blue);
        padding:4px;
        padding-left:30px;
    }
`
export const Button = styled.button`
    background-image:var(--blueGradient);
    border:none;
    border-radius:12px;
    color:white;
    font-weight:bold;
    width:100%;
    padding:8px 0;
    font-size:20px;

    &:hover{
        cursor:pointer;
    }
`