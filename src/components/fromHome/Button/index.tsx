import * as S from "./styles";

interface ButtonProps {
  onClick: () => void
}

export const Button = (props: ButtonProps) => {
  return <S.Button onClick={props.onClick} >Comece agora</S.Button>;
};
