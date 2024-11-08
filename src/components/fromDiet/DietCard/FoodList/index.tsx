import * as S from "./styles";
import { FoodModel } from "../../../../models/MealModel";
import { Food } from "../Food";

interface FoodListProps {
  foods: FoodModel[];
}

export const FoodList = ({ foods }: FoodListProps) => {
  return (
    <S.FoodList>
      {foods.map((food) => (
        <li key={food.name}>
          <Food
            name={food.name}
            amount={food.amount}
            protein={food.protein}
            carb={food.carb}
            fat={food.fat}
            kcal={food.kcal}
          />
        </li>
      ))}
    </S.FoodList>
  );
};
