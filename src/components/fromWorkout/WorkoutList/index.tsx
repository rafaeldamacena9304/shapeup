import { WorkoutModel } from "../../../models/WorkoutModel";
import { WorkoutCard } from "../WorkoutCard";

import * as S from "./styles";

interface WorkoutListProps {
  cards: WorkoutModel[];
}

export const WorkoutList = ({ cards }: WorkoutListProps) => {
  return (
    <S.Container>
      {cards.map((card) => (
        <li key={card.day}>
          <WorkoutCard
            day={card.day}
            modality={card.modality}
            exercises={card.exercises}
          />
        </li>
      ))}
    </S.Container>
  );
};
