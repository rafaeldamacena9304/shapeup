import { createSlice } from "@reduxjs/toolkit";
import { UserModel } from "../../models/UserModel";

const initialState: UserModel = {
    id:1,
    age:21,
    gender: "Masculino",
    height: 161,
    name: "Rafael Antônio",
    weight: 65,
    bmi: 1,
    bmr: 1
}