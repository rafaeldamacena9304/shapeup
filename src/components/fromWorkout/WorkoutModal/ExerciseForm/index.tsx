import * as S from "./styles";

import add from "../../../../assets/images/add.svg";
import { useEffect, useState } from "react";

//Props will be received
interface ExerciseContainerProps {
  selectedGroup: string;
  selectedExercise: string;
  setSelectedGroup: (value: string) => void;
  setSelectedExercise: (value: string) => void;
  handleAddExerciseToList: () => void;
}

export const ExerciseForm = ({
  selectedExercise,
  selectedGroup,
  setSelectedExercise,
  setSelectedGroup,
  handleAddExerciseToList,
}: ExerciseContainerProps) => {
  const [workoutData, setWorkoutData] = useState<{ [key: string]: string[] }>(
    {}
  );

  // Recovers object type of workouts from api
  useEffect(() => {
    fetch("https://valorknight.com.br/api/searchWorkout")
      .then((response) => response.json())
      .then((data) => setWorkoutData(data));
  }, []);

  return (
    <S.ExerciseContainer>
      <div>
        <label htmlFor="exerciseGroup">Grupo do exercício:</label>
        <select
          // Here in each of inputs we store temporary data in local state
          value={selectedGroup}
          onChange={(e) => {
            setSelectedGroup(e.target.value);
            setSelectedExercise("");
          }}
          name=""
          id="exerciseGroup"
        >
          <option value="">Selecione um grupo...</option>
          {Object.keys(workoutData).map((group) => (
            <option key={group} value={group}>
              {group}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="exercise">Exercício:</label>
        <select
          value={selectedExercise}
          onChange={(e) => setSelectedExercise(e.target.value)}
          disabled={!selectedGroup}
          name=""
          id="exercise"
        >
          <>
            <option value="">Selecione um exercício...</option>
            {selectedGroup &&
              workoutData[selectedGroup]?.map((exercise) => (
                <option key={exercise} value={exercise}>
                  {exercise}
                </option>
              ))}
          </>
        </select>
      </div>
      <S.InputContainer>
        <input min="1" type="number" placeholder="Séries" />
        <input min="1" type="number" placeholder="Repetições" />
      </S.InputContainer>
      {/* Here we stores the exercise object in a temporary array, before we can store in global state */}
      <S.AddButton onClick={handleAddExerciseToList}>
        <img src={add} alt="" /> <span>Adicionar à lista</span>
      </S.AddButton>
    </S.ExerciseContainer>
  );
};
