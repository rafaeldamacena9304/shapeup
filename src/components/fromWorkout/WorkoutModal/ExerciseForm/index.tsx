import { useState, useEffect } from "react";
import workoutDataFromJson from "../../../../assets/data/workouts.json";
import * as S from "./styles";
import add from "../../../../assets/images/add.svg";

// Props will be received
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
  const [workoutData, setWorkoutData] = useState<{ [key: string]: string[] }>({});

  // Load the workout data when the component is mounted
  useEffect(() => {
    // workoutDataFromJson is an array with a single object, so we grab the first item
    const data = workoutDataFromJson[0]; // The JSON is an array with one object
    setWorkoutData(data); // Now, workoutData is an object where the keys are exercise groups
  }, []);

  return (
    <S.ExerciseContainer>
      <div>
        <label htmlFor="exerciseGroup">Grupo do exercício:</label>
        <select
          // Each input stores temporary data in local state
          value={selectedGroup}
          onChange={(e) => {
            setSelectedGroup(e.target.value);
            setSelectedExercise(""); // Reset the selected exercise when the group changes
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
          <option value="">Selecione um exercício...</option>
          {selectedGroup &&
            workoutData[selectedGroup]?.map((exercise) => (
              <option key={exercise} value={exercise}>
                {exercise}
              </option>
            ))}
        </select>
      </div>
      <S.InputContainer>
        <input min="1" type="number" placeholder="Séries" />
        <input min="1" type="number" placeholder="Repetições" />
      </S.InputContainer>
      {/* Here we store the exercise object in a temporary array before saving it to the global state */}
      <S.AddButton onClick={handleAddExerciseToList}>
        <img src={add} alt="" /> <span>Adicionar à lista</span>
      </S.AddButton>
    </S.ExerciseContainer>
  );
};
