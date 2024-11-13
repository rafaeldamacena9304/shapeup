import { FoodProps } from "../../../../models/MealModel";
import { ExerciseProps } from "../../../../models/WorkoutModel";

import * as S from "./styles";

interface ContentListProps {
  workoutContent?: ExerciseProps[];
  foodContent?: FoodProps[];
  normalContent?: string[];
}

// Render the content list of the card based on the Card Type
export const ContentList = (props: ContentListProps) => {
  return (
    <S.ContentList>
      {props.workoutContent && props.workoutContent.length > 0 ? (
        props.workoutContent.map((item) => (
          <li key={item.name}>
            {item.name} <br />
            {item.sets !== 0 && item.reps !== 0 && (
              <span>
                {item.sets} sets x {item.reps} reps
              </span>
            )}
          </li>
        ))
      ) : props.workoutContent ? (
        <li>Nenhum treino para hoje.</li>
      ) : null}

      {props.foodContent && props.foodContent.length > 0 ? (
        props.foodContent.map((item) => (
          <li key={item.name}>
            {item.amount}g de {item.name}
          </li>
        ))
      ) : props.foodContent ? (
        <li>Nenhum alimento adicionado.</li>
      ) : null}

      {props.normalContent && props.normalContent.length > 0
        ? props.normalContent.map((item) => <li key={item}>{item}</li>)
        : null}
    </S.ContentList>
  );
};
