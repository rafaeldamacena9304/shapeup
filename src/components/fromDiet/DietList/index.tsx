import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import { DietCard } from "../DietCard";

import * as S from "./styles";


export const DietList = () => {

  //Use global state here for avoid all prop dilling we can in places that have so many logic like this workout and diet pages
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
