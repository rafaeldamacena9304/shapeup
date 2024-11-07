import { ExerciseProps } from "../../../../models/WorkoutModel";
import * as S from "./styles";

export interface ExercisesProps {
  exercises: ExerciseProps[];
}

export const Exercises = ({ exercises }: ExercisesProps) => {
  return (
    <S.Exercises>
      {exercises.map((exercise) => (
        <span key={exercise.name}>{exercise.name} |</span>
      ))}
    </S.Exercises>
  );
};
