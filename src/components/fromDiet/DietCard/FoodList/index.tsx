import * as S from "./styles";
import { Food } from "../Food";

interface FoodListProps {
  meal: {
    title: string;
    time: string;
    foods: Array<{ name: string; amount: number; protein: number; carb: number; fat: number; kcal: number }>;
  };
}

export const FoodList = ({ meal }: FoodListProps) => {
  const { foods } = meal;

  return (
    <S.FoodList>
      {foods.length > 0 ? (
        foods.map((food) => (
          <li key={food.name}>
            <Food
              mealTitle={meal.title}
              name={food.name}
              amount={food.amount}
              protein={food.protein}
              carb={food.carb}
              fat={food.fat}
              kcal={food.kcal}
            />
          </li>
        ))
      ) : (
        <p>Não há alimentos registrados para esta refeição.</p>
      )}
    </S.FoodList>
  );
};
