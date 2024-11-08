import { createSlice } from "@reduxjs/toolkit";
import { WorkoutModel } from "../../models/WorkoutModel";

const initialState: WorkoutModel[] = [
  {
    status: false,
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
    status: false,
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
    status: false,
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
    status: false,
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
    status: false,
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
    status: false,
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
    status: false,
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
  reducers: {},
});
