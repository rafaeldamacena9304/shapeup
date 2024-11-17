import * as S from "./styles";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ExerciseProps } from "../../../models/WorkoutModel";

import { addWorkoutAtDay } from "../../../redux/reducers/workoutReducer";
import { ExerciseForm } from "./ExerciseForm";
import { FinalList } from "./FinalList";

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

  // Props for ExerciseForm, stores in a each input in temporary data
  const [selectedGroup, setSelectedGroup] = useState<string>("");
  const [selectedExercise, setSelectedExercise] = useState<string>("");
  const [tempReps, setTempReps] = useState(1);
  const [tempSets, setTempSets] = useState(1);

  // stores temporary data in a temp object
  const [tempExercise, setTempExercise] = useState<ExerciseProps>({
    name: selectedExercise,
    reps: tempReps,
    sets: tempSets,
  });

  // temp array for receive current exercise
  const [tempExercises, setTempExercises] = useState<ExerciseProps[]>([]);

  // store current exercises to array and clears it to fill the next
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

  // Send exercise to global state according with current day of the week
  const handleSaveWorkout = () => {
    dispatch(
      addWorkoutAtDay({
        day: props.day,
        exercises: tempExercises,
        modality: "Exercícios",
      })
    );
    setTempExercises([]);
  };

  // Stores the inputs data in current temp exercises to save them into array
  useEffect(() => {
    setTempExercise({
      name: selectedExercise,
      reps: tempReps,
      sets: tempSets,
    });
  }, [selectedExercise, setTempExercise, tempReps, tempSets]);

  return (
    <>
      <S.ModalOverlay
        onClick={() => props.setIsModalOpen(false)}
        isModalOpen={props.isModalOpen}
      />
      <S.Content isModalOpen={props.isModalOpen}>
        <h3>Registrar treino do dia</h3>
        <S.ExerciseList>
          {/* Search and add exercises with local state  */}
          <ExerciseForm
            handleAddExerciseToList={handleAddExerciseToList}
            selectedExercise={selectedExercise}
            selectedGroup={selectedGroup}
            setSelectedExercise={setSelectedExercise}
            setSelectedGroup={setSelectedGroup}
          />
          {/* Array of temp exercises before we send them to global state  */}
          <FinalList tempExercises={tempExercises} />
        </S.ExerciseList>
        {tempExercises.length > 0 && (
          <S.SaveButton
            onClick={() => {
              handleSaveWorkout();
              props.setIsModalOpen(false);
            }}
          >
            Salvar treino
          </S.SaveButton>
        )}
      </S.Content>
    </>
  );
};
