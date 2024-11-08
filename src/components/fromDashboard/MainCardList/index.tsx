import { CardModel } from "../../../models/CardModel";
import { MainCard } from "../MainCard";
import * as S from "./styles";

interface CardListProps {
  cards: CardModel[];
}

export const CardList = ({ cards }: CardListProps) => {
  return (
    <S.CardList>
      {cards.map((card) => (
        <li key={card.title}>
          <MainCard
            cardType={card.cardType}
            title={card.title}
            status={card.status}
            image={card.image}
            subType={card.subType}
            workoutContent={card.workoutContent}
            foodContent={card.foodContent}
            normalContent={card.normalContent}
          />
        </li>
      ))}
    </S.CardList>
  );
};
