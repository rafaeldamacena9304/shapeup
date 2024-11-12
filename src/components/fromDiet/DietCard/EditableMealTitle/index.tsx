import { useDispatch } from "react-redux";
import { saveEditChanges } from "../../../../redux/reducers/mealsReducer";

import { Title } from "../Title";

import * as S from "./styles";

import edit from "../../../../assets/images/edit.svg";
import add from "../../../../assets/images/add.svg";
import cancel from "../../../../assets/images/cancel.svg";
import save from "../../../../assets/images/save.svg";

interface EditMealProps {
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
  title: string;
  time: string;
  setIsModalOpen: (value: boolean) => void;
  newTime: string;
  setNewTime: (value: string) => void;
  newTitle: string;
  setNewTitle: (value: string) => void;
  mealId: string
}

export const EditableMealTitle = ({
  isEditing,
  setIsEditing,
  title,
  time,
  setIsModalOpen,
  newTime,
  newTitle,
  setNewTime,
  setNewTitle,
  mealId
}: EditMealProps) => {
  const dispatch = useDispatch();

  // Store initial titles before editing
  const originalTitle = title;
  const originalTime = time;

  // Redux action for editing title and time of the meal
  const handleSaveEditChanges = () => {
    dispatch(saveEditChanges({ id: mealId, title: newTitle, time: newTime }));
    setIsEditing(false);
  };

  //Function for canceling edit, restores from original variables created before
  const handleCancelEdit = () => {
    setNewTitle(originalTitle); // Resets for original title
    setNewTime(originalTime); // Resets for original time
    setIsEditing(false);
  };

  return (
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
            <S.EditButton onClick={() => setIsModalOpen(true)}>
              <img src={add} alt="Adicionar" /> Adicionar alimento
            </S.EditButton>
          </S.ButtonsContainer>
        </>
      )}
    </S.TitleContainer>
  );
};
