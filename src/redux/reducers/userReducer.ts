import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserModel } from "../../models/UserModel";
import { calculateBMI } from "../../utils/calculateBMI";
import { calculateBMR } from "../../utils/calculateBMR";

const initialState: UserModel = {
  id: 1,
  age: 21,
  gender: "Masculino",
  height: 161,
  name: "Rafael Antônio",
  weight: 65,
  bmi: 0,
  bmr: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    editInfo: (state, action: PayloadAction<UserModel>) => {
      const user = action.payload;
      return {
        ...user,
        bmi: calculateBMI(user.weight, user.height),
        bmr: calculateBMR(user.weight, user.height, user.age, user.gender),
      };
    },
  },
});

export const { editInfo } = userSlice.actions;
