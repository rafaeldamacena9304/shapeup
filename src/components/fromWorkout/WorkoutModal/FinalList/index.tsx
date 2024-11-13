import { ExerciseProps } from "../../../../models/WorkoutModel";

import * as S from "./styles";

import check from "../../../../assets/images/check.svg";

interface FinalListProps {
  tempExercises: ExerciseProps[];
}

export const FinalList = ({ tempExercises }: FinalListProps) => {
  return (
    <S.FinalList>
      <h3>Exercícios adicionados:</h3>
      {tempExercises.map((exercise) => (
        <li key={exercise.name}>
          <img src={check} alt="" />
          {exercise.name}
        </li>
      ))}
    </S.FinalList>
  );
};
