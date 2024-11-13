import { ExerciseProps } from "../../../../models/WorkoutModel";
import * as S from "./styles";

export interface ExercisesProps {
  exercises: ExerciseProps[];
}

export const Exercises = ({ exercises }: ExercisesProps) => {
  return (
    <S.Exercises>
      {/* Map exercises and separate with ', '  */}
      {exercises.map((exercise, index) => (
        <span key={exercise.name}>
          {exercise.name}
          {index !== exercises.length - 1 && ", "}
        </span>
      ))}
    </S.Exercises>
  );
};
