import { FoodProps } from "../../../../models/MealModel";
import trash from "../../../../assets/images/trash.svg";

import * as S from "./styles";

export const Food = (props: FoodProps) => {
  return (
    <S.Container>
      <S.DeleteButton src={trash} />
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
