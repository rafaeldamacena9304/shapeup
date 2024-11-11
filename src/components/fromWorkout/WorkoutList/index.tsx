import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import { WorkoutCard } from "../WorkoutCard";

import * as S from "./styles";

export const WorkoutList = () => {

  //Use global state here for avoid all prop dilling we can in places that have so many logic like this workout and diet pages
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
