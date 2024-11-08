import { MealModel } from "../../../models/MealModel";
import { DeleteButton } from "../../general/DeleteButton";
import { Title } from "./Title";
import { FoodList } from "./FoodList";

import * as S from "./styles";

import edit from "../../../assets/images/edit.svg";
import add from "../../../assets/images/add.svg";

export const DietCard = (props: MealModel) => {
  return (
    <>
      <S.Card>
        <S.TitleContainer>
          <Title title={props.title} time={props.time} />
          <S.ButtonsContainer>
            <S.EditButton>
              <img src={edit} alt="" /> Editar
            </S.EditButton>
            <S.EditButton>
              <img src={add} alt="" /> Adicionar alimento
            </S.EditButton>
          </S.ButtonsContainer>
        </S.TitleContainer>
        <DeleteButton
          spacement="0"
          textSize="12"
          imageSize="12"
          content="Excluir refeição"
        />
        <br />
        <FoodList foods={props.foods} />
        <S.TotalKcal>Total:{props.totalkcal}kcal</S.TotalKcal>
      </S.Card>
    </>
  );
};
