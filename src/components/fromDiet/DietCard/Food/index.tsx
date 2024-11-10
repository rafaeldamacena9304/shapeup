import { useDispatch } from "react-redux";
import { deleteFood } from "../../../../redux/reducers/mealsReducer";
import { FoodProps } from "../../../../models/MealModel";
import trash from "../../../../assets/images/trash.svg";

import * as S from "./styles";

interface FoodComponentProps extends FoodProps {
  mealTitle: string;
}

export const Food = (props: FoodComponentProps) => {

  const dispatch = useDispatch();

  const handleDeleteFoodClick = () => {
    dispatch(deleteFood({ title: props.mealTitle, foodName: props.name }))
  }

  return (
    <S.Container>
      <S.DeleteButton onClick={handleDeleteFoodClick} src={trash} />
      <S.Title>
        {props.name} ({props.amount}g)
      </S.Title>
      <S.Infos>
        <span>{props.kcal}kcal |</span>
        <span>P: {props.protein}g |</span>
        <span>C: {props.carb}g |</span>
        <span>G: {props.fat}g |</span>
      </S.Infos>
    </S.Container>
  );
};
