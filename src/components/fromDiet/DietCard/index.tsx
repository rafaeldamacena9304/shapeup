import { useDispatch, useSelector } from "react-redux";
import { deleteMeal } from "../../../redux/reducers/mealsReducer";
import { useState } from "react";

import { FoodProps, MealModel } from "../../../models/MealModel";
import { DeleteButton } from "../../general/DeleteButton";
import { FoodList } from "./FoodList";

import * as S from "./styles";

import { SearchModal } from "./SearchModal";
import { EditableMealTitle } from "./EditableMealTitle";

export const DietCard = ({id,  title, time, totalkcal }: MealModel) => {
  const dispatch = useDispatch();

  //Popup and Edit state
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Associated with title and time edit
  const [newTitle, setNewTitle] = useState(title);
  const [newTime, setNewTime] = useState(time);

  // Obtain current meal from global state, based in this element meal itself by id
  const meal = useSelector((state: any) =>
    state.meals.find((meal: MealModel) => meal.id === id)
  );

  // Deletes a meal
  const handleDeleteButtonClick = () => {
    dispatch(deleteMeal({ id }));
  };

  // Calculate calories of food based on quantity
  const calculateTotalCalories = (): number => {
    if (!meal || !meal.foods || meal.foods.length === 0) return 0;

    return meal.foods.reduce((totalCalories: number, foodItem: FoodProps) => {
      // Recalculate accoring with specific quantity of aliment
      const recalculatedCalories = parseFloat(
        ((foodItem.kcal / 100) * foodItem.amount).toFixed(1)
      );
      return totalCalories + recalculatedCalories;
    }, 0);
  };

  // Need to always recover foods list, because title and time has changed, else, foodsList will no find the foods
  const foods = meal ? meal.foods : [];

  return (
    <>
      {/* Modal */}
      <SearchModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        title={title}
      />
      <S.Card>
        <EditableMealTitle
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          setIsModalOpen={setIsModalOpen}
          time={time}
          title={title}
          newTime={newTime}
          newTitle={newTitle}
          setNewTime={setNewTime}
          setNewTitle={setNewTitle}
        />
        <DeleteButton
          onClick={handleDeleteButtonClick}
          spacement="0"
          textSize="12"
          imageSize="12"
          content="Excluir refeição"
        />
        <br />
        {/* Necessary to pass this parameters for FoodList find the meal that it belongs it, which was edited */}
        <FoodList meal={{id, title: newTitle, time: newTime, foods }} />
        <S.TotalKcal>Total: {calculateTotalCalories()} kcal</S.TotalKcal>
      </S.Card>
    </>
  );
};
