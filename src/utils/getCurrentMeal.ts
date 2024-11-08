import { RootState } from "../redux/store";
import { MealModel } from "../models/MealModel";

export const selectCurrentMeal = (state: RootState): MealModel | undefined => {
  // Obtém a hora atual
  const now = new Date();
  
  // Encontra a refeição cuja hora corresponde ao intervalo de tempo atual
  return state.meals.find((meal, index, meals) => {
    // Converte a hora de início da refeição atual para um objeto Date
    const mealTime = new Date();
    const [hour, minute] = meal.time.split(":").map(Number);
    mealTime.setHours(hour, minute, 0, 0); // Define a hora exata da refeição

    // Converte a hora da próxima refeição para Date, se existir
    const nextMealTime = new Date();
    if (index + 1 < meals.length) {
      const [nextHour, nextMinute] = meals[index + 1].time.split(":").map(Number);
      nextMealTime.setHours(nextHour, nextMinute, 0, 0);
    } else {
      nextMealTime.setHours(23, 59, 59, 999); // Define como o final do dia se não houver próxima refeição
    }

    // Retorna verdadeiro se `now` estiver entre a refeição atual e a próxima refeição
    return now >= mealTime && now < nextMealTime;
  });
};
