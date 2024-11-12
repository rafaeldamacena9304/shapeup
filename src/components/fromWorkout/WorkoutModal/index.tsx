import * as S from "./styles";

import add from "../../../assets/images/add.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ExerciseProps, WorkoutModel } from "../../../models/WorkoutModel";

import check from "../../../assets/images/check.svg";
import { addWorkoutAtDay } from "../../../redux/reducers/workoutReducer";

interface WorkoutModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  day:
    | "Domingo"
    | "Segunda-feira"
    | "Terça-feira"
    | "Quarta-feira"
    | "Quinta-feira"
    | "Sexta-feira"
    | "Sábado";
}

export const WorkoutModal = (props: WorkoutModalProps) => {
  const dispatch = useDispatch();

  const [workoutData, setWorkoutData] = useState<{ [key: string]: string[] }>(
    {}
  );
  const [selectedGroup, setSelectedGroup] = useState<string>("");
  const [selectedExercise, setSelectedExercise] = useState<string>("");
  const [tempReps, setTempReps] = useState(1);
  const [tempSets, setTempSets] = useState(1);


  const [tempExercises, setTempExercises] = useState<ExerciseProps[]>([]);
  const [tempExercise, setTempExercise] = useState<ExerciseProps>({
    name: selectedExercise,
    reps: tempReps,
    sets: tempSets,
  });

  const handleAddExerciseToList = () => {
    if (selectedExercise !== "" && selectedGroup !== "") {
      setTempExercises([...tempExercises, tempExercise]);
      setSelectedExercise("");
      setTempReps(1);
      setTempSets(1);
      setSelectedGroup("");
    } else {
      return alert("Selecione um exercício");
    }
  };

  const handleSaveWorkout = () => {
    dispatch(addWorkoutAtDay({ day: props.day, exercises: tempExercises, modality: "Exercícios" }));
    setTempExercises([]);
  };

  useEffect(() => {
    console.log(tempExercises);
  }, [tempExercises]);

  useEffect(() => {
    setTempExercise({
      name: selectedExercise,
      reps: tempReps,
      sets: tempSets,
    });
  }, [selectedExercise, setTempExercise, tempReps, tempSets]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/searchWorkout")
      .then((response) => response.json())
      .then((data) => setWorkoutData(data));
  }, []);

  return (
    <>
      <S.ModalOverlay
        onClick={() => props.setIsModalOpen(false)}
        isModalOpen={props.isModalOpen}
      />
      <S.Content isModalOpen={props.isModalOpen}>
        <h3>Registrar treino do dia</h3>
        <S.ExerciseList>
          <S.ExerciseContainer>
            <div>
              <label htmlFor="exerciseGroup">Grupo do exercício:</label>
              <select
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
            <S.AddButton onClick={handleAddExerciseToList}>
              <img src={add} alt="" /> <span>Adicionar à lista</span>
            </S.AddButton>
          </S.ExerciseContainer>
          <S.FinalList>
            <h3>Exercícios adicionados:</h3>
            {tempExercises.map((exercise) => (
              <li key={exercise.name}>
                <img src={check} alt="" />
                {exercise.name}
              </li>
            ))}
          </S.FinalList>
        </S.ExerciseList>
        <S.SaveButton onClick={handleSaveWorkout}>Salvar treino</S.SaveButton>
      </S.Content>
    </>
  );
};
