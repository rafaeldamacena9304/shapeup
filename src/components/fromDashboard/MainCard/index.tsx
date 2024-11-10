import { CardModel } from "../../../models/CardModel";
import { SubType } from "./SubType";
import { Tag } from "./Tag";
import { Title } from "./Title";
import { ContentList } from "./ContentList";

import * as S from "./styles";

//Receive props  accoring with Card attributes
export const MainCard = (props: CardModel) => {
  return (
    <S.Card>
      <Tag cardType={props.cardType}  />
      <Title image={props.image} title={props.title} />
      <SubType subType={props.subType} />
      
      {/* There's three optional props, accoring with the card type, if exists in card, will be rendered */}
      <ContentList workoutContent={props.workoutContent} foodContent={props.foodContent} normalContent={props.normalContent}/>
    </S.Card>
  );
};
