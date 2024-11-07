import { Title } from "./Title";
import { Modality } from "./Modality";
import { Exercises } from "./Exercises";

import { WorkoutModel } from "../../../models/WorkoutModel";

import * as S from "./styles";

import edit from "../../../assets/images/edit.svg";

export const WorkoutCard = (props: WorkoutModel) => {
  return (
    <S.Card>
      <S.EditButton src={edit} alt="Botão de editar" />
      <Title day={props.day} />
      <Modality modality={props.modality} />
      <Exercises exercises={props.exercises} />
    </S.Card>
  );
};
