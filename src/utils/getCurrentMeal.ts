import { RootState } from "../redux/store";
import { MealModel } from "../models/MealModel";

export const selectCurrentMeal = (state: RootState): MealModel | undefined => {
  const now = new Date();

  // Primeiro, tenta encontrar a refeição para o horário atual
  const currentMeal = state.meals.find((meal, index, meals) => {
    const mealTime = new Date();
    const [hour, minute] = meal.time.split(":").map(Number);
    mealTime.setHours(hour, minute, 0, 0);

    const nextMealTime = new Date();
    if (index + 1 < meals.length) {
      const [nextHour, nextMinute] = meals[index + 1].time.split(":").map(Number);
      nextMealTime.setHours(nextHour, nextMinute, 0, 0);
    } else {
      nextMealTime.setHours(23, 59, 59, 999); // Última refeição do dia
    }

    return now >= mealTime && now < nextMealTime;
  });

  // Se nenhuma refeição for encontrada para o horário atual, retorne a última refeição
  if (!currentMeal) {
    return state.meals[state.meals.length - 1];
  }

  return currentMeal;
};
