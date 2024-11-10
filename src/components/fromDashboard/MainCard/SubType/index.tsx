import * as S from "./styles";

interface SubTypeProps {
  subType: string;
}

//Receive the subtitle prop from card
export const SubType = (props: SubTypeProps) => {
  return <S.SubType>{props.subType}</S.SubType>;
};
