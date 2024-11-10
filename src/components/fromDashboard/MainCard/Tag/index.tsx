import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTodayWorkout } from "../../../../utils/getCurrentWorkout";
import { RootState } from "../../../../redux/store";
import { updateMealStatus } from "../../../../redux/reducers/mealsReducer";
import { selectCurrentMeal } from "../../../../utils/getCurrentMeal";
import { updateWorkoutStatus } from "../../../../redux/reducers/workoutReducer";

import * as S from "./styles";

import checked from "../../../../assets/images/checked.png";
import notChecked from "../../../../assets/images/notChecked.png";
import bell from "../../../../assets/images/bell.png";

export interface TagProps {
  cardType: "treino" | "dieta" | "lembrete";
}

export const Tag = (props: TagProps) => {
  const dispatch = useDispatch();

  const [isChecked, setIsChecked] = useState(false);

  const todayWorkout = useSelector((state: RootState) =>
    selectTodayWorkout(state)
  );
  const currentMeal = useSelector((state: RootState) =>
    selectCurrentMeal(state)
  );

  //Update card status individually based on its type
  const handleCheckboxClick = () => {
    if (!isChecked) {
      setIsChecked(true);
      if (props.cardType === "dieta") {
        dispatch(
          updateMealStatus({ title: currentMeal!.title, status: "Concluído" })
        );
      }
      if (props.cardType === "treino") {
        dispatch(
          updateWorkoutStatus({ day: todayWorkout!.day, status: "Concluído" })
        );
      }
    }
  };

  // Render the tag status of card based on its type tho, so each one can be updated for itself
  if (props.cardType) {
    if (props.cardType === "treino") {
      return (
        <S.Tag cardType={props.cardType}>
          {todayWorkout?.status === "Pendente" ? (
            <S.Checkbox
              onClick={handleCheckboxClick}
              src={isChecked ? checked : notChecked}
            />
          ) : todayWorkout?.status === "Concluído" ? (
            <S.Checkbox src={checked} />
          ) : (
            <></>
          )}

          {isChecked ? (
            <S.Content status={todayWorkout!.status}>
              {todayWorkout?.status}
            </S.Content>
          ) : (
            <S.Content status={todayWorkout!.status}>
              {todayWorkout?.status}
            </S.Content>
          )}
        </S.Tag>
      );
    }
    if (props.cardType === "dieta") {
      return (
        <S.Tag cardType={props.cardType}>
          {currentMeal?.status === "Pendente" ? (
            <S.Checkbox
              onClick={handleCheckboxClick}
              src={isChecked ? checked : notChecked}
            />
          ) : currentMeal?.status === "Concluído" ? (
            <S.Checkbox src={checked} />
          ) : (
            <></>
          )}

          {isChecked ? (
            <S.Content status={currentMeal!.status}>
              {currentMeal?.status}
            </S.Content>
          ) : (
            <S.Content status={currentMeal!.status}>
              {currentMeal?.status}
            </S.Content>
          )}
        </S.Tag>
      );
    }
  }
  return (
    <S.Tag cardType={props.cardType}>
      <img src={bell} alt="" />
      <S.Content status="Lembrete">Lembrete</S.Content>
    </S.Tag>
  );
};
