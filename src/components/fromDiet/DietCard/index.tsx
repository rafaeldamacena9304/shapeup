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

  // Obter a refeição atual a partir do estado global
  const meal = useSelector((state: any) =>
    state.meals.find((meal: MealModel) => meal.title === title)
  );

  // Garantir que o estado original seja preservado ao editar
  const originalTitle = title;
  const originalTime = time;

  const handleDeleteButtonClick = () => {
    dispatch(deleteMeal({ title }));
  };

  const handleSaveEditChanges = () => {
    dispatch(saveEditChanges({ title: newTitle, time: newTime }));
    setIsEditing(false);  // Fecha o modo de edição após salvar
  };

  const handleCancelEdit = () => {
    setNewTitle(originalTitle);  // Reseta para o título original
    setNewTime(originalTime);    // Reseta para o horário original
    setIsEditing(false);         // Fecha o modo de edição
  };

  // Garantir que os alimentos sejam passados corretamente para o FoodList
  const foods = meal ? meal.foods : [];

  return (
    <>
      <S.Card>
        <S.TitleContainer>
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
        <FoodList meal={{ title: newTitle, time: newTime, foods }} />
        <S.TotalKcal>Total: {totalkcal} kcal</S.TotalKcal>
      </S.Card>
    </>
  );
};
