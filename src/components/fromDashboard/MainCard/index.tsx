import { CardModel } from "../../../models/CardModel";
import { SubType } from "./SubType";
import { Tag } from "./Tag";
import { Title } from "./Title";
import { ContentList } from "./ContentList";

import * as S from "./styles";

export const MainCard = (props: CardModel) => {
  return (
    <S.Card>
      <Tag status={props.status} />
      <Title image={props.image} title={props.title} />
      <SubType subType={props.subType} />
      <ContentList content={props.content} />
    </S.Card>
  );
};
