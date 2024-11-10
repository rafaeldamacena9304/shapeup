import { RootState } from "../redux/store";
import { MealModel } from "../models/MealModel";

export const selectCurrentMeal = (state: RootState): MealModel | undefined => {
  const now = new Date();

  // Try to find meal corresponding at currrent time in state
  const currentMeal = state.meals.find((meal, index, meals) => {
    const mealTime = new Date();
    const [hour, minute] = meal.time.split(":").map(Number);
    mealTime.setHours(hour, minute, 0, 0);

    const nextMealTime = new Date();
    if (index + 1 < meals.length) {
      const [nextHour, nextMinute] = meals[index + 1].time.split(":").map(Number);
      nextMealTime.setHours(nextHour, nextMinute, 0, 0);
    } else {
      nextMealTime.setHours(23, 59, 59, 999); // Last hour that we can have an meal in that day
    }

    return now >= mealTime && now < nextMealTime;
  });

  // If we in later day and have no meal yet, we can return last meal of previous day so we cannot get errors
  if (!currentMeal) {
    return state.meals[state.meals.length - 1];
  }

  return currentMeal;
};
