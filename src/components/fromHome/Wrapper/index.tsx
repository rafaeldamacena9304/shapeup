import * as S from "./styles";
export interface WrapperProps {
  forImage?: boolean;
  children?: JSX.Element;
}

export const Wrapper = (props: WrapperProps) => {
  return <S.Wrapper forImage={props.forImage}>{props.children}</S.Wrapper>;
};
