import { createSlice } from "@reduxjs/toolkit";
import { WorkoutModel } from "../../models/WorkoutModel";

const initialState: WorkoutModel[] = [
  {
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
