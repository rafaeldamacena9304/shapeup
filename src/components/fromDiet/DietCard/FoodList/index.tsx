import * as S from "./styles";
import { FoodProps } from "../../../../models/MealModel";
import { Food } from "../Food";

interface FoodListProps {
  foods: FoodProps[];
  mealTitle: string
}

export const FoodList = ({ foods, mealTitle }: FoodListProps) => {
  return (
    <S.FoodList>
      {foods.map((food) => (
        <li key={food.name}>
          <Food
            mealTitle={mealTitle}
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
