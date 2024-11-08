import { FoodProps } from "../../../../models/MealModel";
import { ExerciseProps } from "../../../../models/WorkoutModel";
import * as S from "./styles";

interface ContentListProps {
  workoutContent?: ExerciseProps[];
  foodContent?: FoodProps[];
  normalContent?: string[];
}

export const ContentList = (props: ContentListProps) => {
  return (
    <S.ContentList>
      {props.workoutContent?.map((item) => (
        <li key={item.name}>
          {item.name}
          {item.sets !== 0 && item.reps !== 0 && (
            <span>
              {item.sets} sets x {item.reps} reps
            </span>
          )}
        </li>
      ))}
      {props.foodContent?.map((item) => (
        <li key={item.name}>
          {item.amount}g de {item.name}
        </li>
      ))}
      {props.normalContent?.map((item) => (
        <li key={item}>
          {item}
        </li>
      ))}
    </S.ContentList>
  );
};
