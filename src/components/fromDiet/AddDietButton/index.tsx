import { useDispatch } from "react-redux";
import { addMeal } from "../../../redux/reducers/mealsReducer";

import { v4 as uuid4 } from "uuid";

import * as S from "./styles";

import plus from "../../../assets/images/add.svg";

export const AddDietButton = () => {
  const dispatch = useDispatch();

  const handleAddMeal = () => {
    dispatch(
      addMeal({
        id: uuid4(),
        title: "Nova refeição",
        time: "0:00",
        totalkcal: 0,
        foods: [],
        status: "Pendente",
      })
    );
  };

  return (
    <S.Button onClick={handleAddMeal}>
      <img src={plus} alt="" />
      <span>Adicionar nova refeição</span>
    </S.Button>
  );
};
