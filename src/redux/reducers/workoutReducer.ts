import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExerciseProps, WorkoutModel } from "../../models/WorkoutModel";

const initialState: WorkoutModel[] = [
  {
    status: "Pendente",
    day: "Domingo",
    modality: "Adicione um novo treino",
    exercises: [
      {
        name: "Nenhum treino para hoje.",
        reps: 0,
        sets: 0,
      },
    ],
  },
  {
    status: "Pendente",
    day: "Segunda-feira",
    modality: "Adicione um novo treino",
    exercises: [
      {
        name: "Nenhum treino para hoje.",
        reps: 0,
        sets: 0,
      },
    ],
  },
  {
    status: "Pendente",
    day: "Terça-feira",
    modality: "Adicione um novo treino",
    exercises: [
      {
        name: "Nenhum treino para hoje.",
        reps: 0,
        sets: 0,
      },
    ],
  },
  {
    status: "Pendente",
    day: "Quarta-feira",
    modality: "Adicione um novo treino",
    exercises: [
      {
        name: "Nenhum treino para hoje.",
        reps: 0,
        sets: 0,
      },
    ],
  },
  {
    status: "Pendente",
    day: "Quinta-feira",
    modality: "Adicione um novo treino",
    exercises: [
      {
        name: "Nenhum treino para hoje.",
        reps: 0,
        sets: 0,
      },
    ],
  },
  {
    status: "Pendente",
    day: "Sexta-feira",
    modality: "Adicione um novo treino",
    exercises: [
      {
        name: "Nenhum treino para hoje.",
        reps: 0,
        sets: 0,
      },
    ],
  },
  {
    status: "Pendente",
    day: "Sábado",
    modality: "Adicione um novo treino",
    exercises: [
      {
        name: "Nenhum treino para hoje.",
        reps: 0,
        sets: 0,
      },
    ],
  },
];

export const workoutSlice = createSlice({
  name: "workout",
  initialState,
  reducers: {
    //Find workout and update status payload based
    updateWorkoutStatus: (
      state,
      action: PayloadAction<{
        day: string;
        status: "Concluído" | "Pendente" | "Lembrete";
      }>
    ) => {
      const workout = state.find(
        (workout) => workout.day === action.payload.day
      );
      if (workout) {
        workout.status = action.payload.status;
      }
    },
    // ...
    resetWorkouts: () => initialState,
    addWorkoutAtDay: (state, action: PayloadAction<{day: string; exercises: ExerciseProps[]; modality:string}>) => {
      const workout = state.find((workout) => workout.day === action.payload.day)
      if (workout){
        workout.exercises = action.payload.exercises
        workout.modality = action.payload.modality
      }
    } 
  },
});

export const { updateWorkoutStatus, resetWorkouts, addWorkoutAtDay } = workoutSlice.actions;
