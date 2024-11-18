import styled from "styled-components";

export const Tag = styled.div<{ cardType: string }>`
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  img {
    margin-right: 12px;
  }
   
`;

export const Content = styled.span<{ status: string }>`
  background-image: ${(props) =>
    props.status === "Concluído"
      ? "var(--greenGradient)"
      : props.status === "Pendente"
      ? "var(--redGradient)"
      : props.status === "Lembrete"
      ? "var(--yellowGradient)"
      : "white"};

  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const Checkbox = styled.img`
  margin-right: 12px;
    
  &:hover{
    cursor:pointer;
  }
`;
