import { Title } from "./Title";
import { Modality } from "./Modality";
import { Exercises } from "./Exercises";

import { WorkoutModel } from "../../../models/WorkoutModel";

import * as S from "./styles";

import edit from "../../../assets/images/edit.svg";
import { useState } from "react";
import { WorkoutModal } from "../WorkoutModal";

//Simple workout card constructed
export const WorkoutCard = (props: WorkoutModel) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <WorkoutModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    <S.Card>
      <S.EditButton onClick={() => setIsModalOpen(true)} src={edit} alt="Botão de editar" />
      <Title day={props.day} />
      <Modality modality={props.modality} />
      <Exercises exercises={props.exercises} />
    </S.Card>
    </>
  );
};
