import { configureStore } from "@reduxjs/toolkit";

import { workoutSlice } from "./reducers/workoutReducer";
import { mealsSlice } from "./reducers/mealsReducer";
import { userSlice } from "./reducers/userReducer";

export const store = configureStore({
  reducer: {
    workout: workoutSlice.reducer,
    meals: mealsSlice.reducer,
    user: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
