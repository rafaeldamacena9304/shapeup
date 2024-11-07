import * as S from "./styles";

interface ContainerProps {
  children: JSX.Element;
}

export const Container = (props: ContainerProps) => {
  return <S.Container>{props.children}</S.Container>;
};
