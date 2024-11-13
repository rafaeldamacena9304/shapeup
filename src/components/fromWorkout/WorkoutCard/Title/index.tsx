import * as S from "./styles";

interface TitleProps {
  day:
    | "Domingo"
    | "Segunda-feira"
    | "Terça-feira"
    | "Quarta-feira"
    | "Quinta-feira"
    | "Sexta-feira"
    | "Sábado";
}

export const Title = (props: TitleProps) => {
  return <S.Title>{props.day}</S.Title>;
};
