import { useDispatch, useSelector } from "react-redux";
import {
  deleteMeal,
  saveEditChanges,
} from "../../../redux/reducers/mealsReducer";
import { useState } from "react";

import { MealModel } from "../../../models/MealModel";
import { DeleteButton } from "../../general/DeleteButton";
import { Title } from "./Title";
import { FoodList } from "./FoodList";

import * as S from "./styles";

import edit from "../../../assets/images/edit.svg";
import add from "../../../assets/images/add.svg";
import cancel from "../../../assets/images/cancel.svg";
import save from "../../../assets/images/save.svg";

export const DietCard = ({ title, time, totalkcal }: MealModel) => {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newTime, setNewTime] = useState(time);

  // Obtain current meal from global state, based in this element meal itself
  const meal = useSelector((state: any) =>
    state.meals.find((meal: MealModel) => meal.title === title)
  );

  // Store initial titles before editing
  const originalTitle = title;
  const originalTime = time;

  // Deletes a meal
  const handleDeleteButtonClick = () => {
    dispatch(deleteMeal({ title }));
  };

  // Redux action for editing title and time of the meal
  const handleSaveEditChanges = () => {
    dispatch(saveEditChanges({ title: newTitle, time: newTime }));
    setIsEditing(false);  
  };

  //Function for canceling edit, restores from original variables created before
  const handleCancelEdit = () => {
    setNewTitle(originalTitle);  // Resets for original title
    setNewTime(originalTime);    // Resets for original time
    setIsEditing(false);  
  };

  // Need to always recover foods list, because title and time has changed, else, foodsList will no find the foods

  const foods = meal ? meal.foods : [];

  return (
    <>
      <S.Card>
        <S.TitleContainer>
          {/* Will be rendered while editing */}
          {isEditing ? (
            <>
              <S.EditContainer>
                <input
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  type="text"
                  placeholder={title}
                />
                <input
                  value={newTime}
                  onChange={(e) => setNewTime(e.target.value)}
                  type="time"
                  placeholder={time}
                />
              </S.EditContainer>
              <S.ButtonsContainer>
                <S.EditButton onClick={handleSaveEditChanges}>
                  <img src={save} alt="Salvar" /> Salvar
                </S.EditButton>
                <S.EditButton onClick={handleCancelEdit}>
                  <img src={cancel} alt="Cancelar" /> Cancelar
                </S.EditButton>
              </S.ButtonsContainer>
            </>
          ) : (
            <>
            {/* Will be rendered normally */}

              <Title title={newTitle} time={newTime} />
              <S.ButtonsContainer>
                <S.EditButton onClick={() => setIsEditing(true)}>
                  <img src={edit} alt="Editar" /> Editar
                </S.EditButton>
                <S.EditButton>
                  <img src={add} alt="Adicionar" /> Adicionar alimento
                </S.EditButton>
              </S.ButtonsContainer>
            </>
          )}
        </S.TitleContainer>
        <DeleteButton
          onClick={handleDeleteButtonClick}
          spacement="0"
          textSize="12"
          imageSize="12"
          content="Excluir refeição"
        />
        <br />
        {/* Necessary to pass this parameters for FoodList find the meal that it belongs it, which was edited */}
        <FoodList meal={{ title: newTitle, time: newTime, foods }} />
        <S.TotalKcal>Total: {totalkcal} kcal</S.TotalKcal>
      </S.Card>
    </>
  );
};
