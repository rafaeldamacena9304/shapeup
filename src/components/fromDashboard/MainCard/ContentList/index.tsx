import * as S from "./styles";

interface ContentListProps {
  content: string[];
}

export const ContentList = (props: ContentListProps) => {
  return (
    <S.ContentList>
      {props.content.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </S.ContentList>
  );
};
