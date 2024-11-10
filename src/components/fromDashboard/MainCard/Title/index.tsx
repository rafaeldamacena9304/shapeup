import * as S from "./styles";

interface TitleProps {
  image: string;
  title: string;
}

//Receive props for card title
export const Title = (props: TitleProps) => {
  return (
    <S.Title>
      <S.Image src={props.image} alt="" />
      <S.Content>{props.title}</S.Content>
    </S.Title>
  );
};
