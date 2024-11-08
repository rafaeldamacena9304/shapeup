import * as S from "./styles";

interface TitleProps {
  time: string;
  title: string;
}

export const Title = (props: TitleProps) => {
  return (
    <S.Title>
      {props.title} - {props.time}
    </S.Title>
  );
};
