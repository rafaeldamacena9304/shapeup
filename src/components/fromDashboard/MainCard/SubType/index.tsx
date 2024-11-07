import * as S from "./styles";

interface SubTypeProps {
  subType: string;
}

export const SubType = (props: SubTypeProps) => {
  return <S.SubType>{props.subType}</S.SubType>;
};
