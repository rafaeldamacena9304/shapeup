import * as S from "./styles";

interface ButtonProps {
  setIsModalOpen: (value: boolean) => void
}

export const Button = (props: ButtonProps) => {
  return <S.Button onClick={() => props.setIsModalOpen(true)}>Comece agora</S.Button>;
};
