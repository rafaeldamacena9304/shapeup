import { configureStore } from "@reduxjs/toolkit";

import { workoutSlice } from "./reducers/workoutReducer";
import { mealsSlice } from "./reducers/mealsReducer";

export const store = configureStore({
  reducer: {
    workout: workoutSlice.reducer,
    meals: mealsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
