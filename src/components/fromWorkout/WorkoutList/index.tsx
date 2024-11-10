import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import { WorkoutCard } from "../WorkoutCard";

import * as S from "./styles";

export const WorkoutList = () => {

  const cards = useSelector((state: RootState) => state.workout)

  return (
    <S.Container>
      {cards.map((card) => (
        <li key={card.day}>
          <WorkoutCard
            status={card.status}
            day={card.day}
            modality={card.modality}
            exercises={card.exercises}
          />
        </li>
      ))}
    </S.Container>
  );
};
