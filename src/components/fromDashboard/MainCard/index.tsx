import { CardModel } from "../../../models/CardModel";
import { SubType } from "./SubType";
import { Tag } from "./Tag";
import { Title } from "./Title";
import { ContentList } from "./ContentList";

import * as S from "./styles";

export const MainCard = (props: CardModel) => {
  return (
    <S.Card>
      <Tag cardType={props.cardType}  />
      <Title image={props.image} title={props.title} />
      <SubType subType={props.subType} />
      <ContentList workoutContent={props.workoutContent} foodContent={props.foodContent} normalContent={props.normalContent}/>
    </S.Card>
  );
};
