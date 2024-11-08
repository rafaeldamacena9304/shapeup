    import { RootState } from "../redux/store";
    import { MealModel } from "../models/MealModel";

    export const selectCurrentMeal = (state: RootState): MealModel | undefined => {
    const now = new Date();

    return state.meals.find((meal, index, meals) => {
        const mealTime = new Date();
        const [hour, minute] = meal.time.split(":").map(Number);
        mealTime.setHours(hour, minute, 0, 0);

        const nextMealTime = new Date();
        if (index + 1 < meals.length) {
        const [nextHour, nextMinute] = meals[index + 1].time
            .split(":")
            .map(Number);
        nextMealTime.setHours(nextHour, nextMinute, 0, 0);
        } else {
        nextMealTime.setHours(23, 59, 59, 999);
        }

        return now >= mealTime && now < nextMealTime;
    });
    };
