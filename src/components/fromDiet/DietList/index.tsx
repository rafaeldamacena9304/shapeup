import { MealModel } from "../../../models/MealModel";
import { DietCard } from "../DietCard";

import * as S from "./styles";

interface DietListProps {
  meals: MealModel[];
}

export const DietList = ({ meals }: DietListProps) => {
  return (
    <S.DietList>
      {meals.map((meal) => (
        <li>
          <DietCard
            title={meal.title}
            time={meal.time}
            foods={meal.foods}
            totalkcal={meal.totalkcal}
          />
        </li>
      ))}
    </S.DietList>
  );
};
