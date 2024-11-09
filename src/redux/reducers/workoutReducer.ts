import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WorkoutModel } from "../../models/WorkoutModel";

const initialState: WorkoutModel[] = [
  {
    status: "Pendente",
    day: "Domingo",
    modality: "Adicione um novo treino",
    exercises: [
      {
        name: "Nada por aqui...",
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
        name: "Nada por aqui...",
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
        name: "Nada por aqui...",
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
        name: "Nada por aqui...",
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
        name: "Nada por aqui...",
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
        name: "Nada por aqui...",
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
        name: "Nada por aqui...",
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
    updateWorkoutStatus: (
      state,
      action: PayloadAction<{ day: string; status: "Concluído" | "Pendente" | "Lembrete" }>
    ) => {
      const workout = state.find(
        (workout) => workout.day === action.payload.day
      );
      if (workout) {
        workout.status = action.payload.status;
      }
    },
  },
});

export const { updateWorkoutStatus } = workoutSlice.actions;
