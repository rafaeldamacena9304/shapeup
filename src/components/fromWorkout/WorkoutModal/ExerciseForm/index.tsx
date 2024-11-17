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

  // Carregar os dados do JSON assim que o componente for montado
  useEffect(() => {
    // workoutDataFromJson é um array com um único objeto, então pegamos o primeiro item
    const data = workoutDataFromJson[0]; // O JSON é um array com um único objeto
    setWorkoutData(data); // Agora, o workoutData é um objeto onde as chaves são os grupos de exercício
  }, []);

  return (
    <S.ExerciseContainer>
      <div>
        <label htmlFor="exerciseGroup">Grupo do exercício:</label>
        <select
          // Aqui em cada input, armazenamos dados temporários no estado local
          value={selectedGroup}
          onChange={(e) => {
            setSelectedGroup(e.target.value);
            setSelectedExercise(""); // Resetar exercício quando mudar de grupo
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
      {/* Aqui armazenamos o exercício no array temporário, antes de armazená-lo no estado global */}
      <S.AddButton onClick={handleAddExerciseToList}>
        <img src={add} alt="" /> <span>Adicionar à lista</span>
      </S.AddButton>
    </S.ExerciseContainer>
  );
};
