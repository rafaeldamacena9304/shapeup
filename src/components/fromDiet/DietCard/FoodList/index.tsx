import * as S from "./styles";
import { Food } from "../Food";

interface FoodListProps {
  meal: {
    id: string;
    title: string;
    time: string;
    foods: Array<{
      name: string;
      amount: number;
      protein: number;
      carb: number;
      fat: number;
      kcal: number;
    }>;
  };
}

export const FoodList = ({ meal }: FoodListProps) => {
  const { foods } = meal;

  const recalculateAmount = (value: number, amount: number) =>
    parseFloat(((value / 100) * amount).toFixed(1));

  return (
    <S.FoodList>
      {foods.length > 0 ? (
        foods.map((food) => (
          <li key={meal.id}>
            <Food
              mealId={meal.id}
              name={food.name}
              amount={food.amount}
              protein={food.protein}
              carb={food.carb}
              fat={food.fat}
              //recalculate total kcal based on amount gived from props, else this is static
              kcal={recalculateAmount(food.kcal, food.amount)}
            />
          </li>
        ))
      ) : (
        <p>Não há alimentos registrados para esta refeição.</p>
      )}
    </S.FoodList>
  );
};
