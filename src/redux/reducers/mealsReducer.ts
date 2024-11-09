import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MealModel } from "../../models/MealModel";

const initialState: MealModel[] = [
  {
    status: "Pendente",
    title: "Café da manha",
    time: "6:00",
    foods: [
      {
        name: "Pão frances",
        amount: 100,
        kcal: 130,
        protein: 4,
        carb: 32,
        fat: 0,
      },
      {
        name: "Ovo Mexido",
        amount: 100,
        kcal: 150,
        carb: 0,
        protein: 12,
        fat: 8,
      },
    ],
    totalkcal: 280,
  },
  {
    status: "Pendente",
    title: "Almoço",
    time: "11:30",
    foods: [
      {
        name: "Arroz branco",
        amount: 150,
        kcal: 192,
        protein: 4,
        carb: 40,
        fat: 0,
      },
      {
        name: "Filé de frango grelhado",
        amount: 100,
        kcal: 159,
        carb: 0,
        protein: 32,
        fat: 2,
      },
    ],
    totalkcal: 351,
  },
  {
    status: "Pendente",
    title: "Café da tarde",
    time: "15:30",
    foods: [
      {
        name: "Whey Protein Growth",
        amount: 30,
        kcal: 126,
        protein: 24,
        carb: 3,
        fat: 0,
      },
      {
        name: "Iogurte Natural Nestle",
        amount: 160,
        kcal: 50,
        carb: 6,
        protein: 6,
        fat: 0,
      },
      {
        name: "Amendoin Torrado",
        amount: 50,
        kcal: 313,
        carb: 3,
        protein: 14,
        fat: 25,
      },
    ],
    totalkcal: 600,
  },
];

export const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    updateMealStatus: (
      state,
      action: PayloadAction<{ title: string; status: "Concluído" | "Pendente" | "Lembrete" }>
    ) => {
      const meal = state.find((meal) => meal.title === action.payload.title);
      if (meal) {
        meal.status = action.payload.status;
      }
    },
  },
});

export const { updateMealStatus } = mealsSlice.actions;
