import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import { DietCard } from "../DietCard";

import * as S from "./styles";


export const DietList = () => {

  const meals = useSelector((state: RootState) => state.meals)

  return (
    <S.DietList>
      {meals.map((meal) => (
        <li key={meal.title}>
          <DietCard
            status={meal.status}
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
