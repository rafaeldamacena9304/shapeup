import styled from "styled-components";
import { TagProps } from ".";

export const Tag = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

export const Content = styled.span<TagProps>`
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
`;
