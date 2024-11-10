import { RootState } from "../redux/store";
import { WorkoutModel } from "../models/WorkoutModel";

//Get workout based on today, and format first character to match our types Uppercase
export const selectTodayWorkout = (state: RootState): WorkoutModel | undefined => {
  const today = new Date()
    .toLocaleDateString("pt-BR", { weekday: "long" })
    .replace(/^\w/, (c) => c.toUpperCase());

  return state.workout.find((workout) => workout.day === today);
};
