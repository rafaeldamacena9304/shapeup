import { Title } from "./Title";
import { Modality } from "./Modality";
import { Exercises } from "./Exercises";

import { WorkoutModel } from "../../../models/WorkoutModel";

import * as S from "./styles";

import edit from "../../../assets/images/edit.svg";
import { useState } from "react";
import { WorkoutModal } from "../WorkoutModal";

interface WorkoutCardProps extends WorkoutModel {
  day:
    | "Domingo"
    | "Segunda-feira"
    | "Terça-feira"
    | "Quarta-feira"
    | "Quinta-feira"
    | "Sexta-feira"
    | "Sábado";
}

//Simple workout card constructed
export const WorkoutCard = (props: WorkoutCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <WorkoutModal day={props.day} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <S.Card>
        <S.EditButton
          onClick={() => setIsModalOpen(true)}
          src={edit}
          alt="Botão de editar"
        />
        <Title day={props.day} />
        <Modality modality={props.modality} />
        <Exercises exercises={props.exercises} />
      </S.Card>
    </>
  );
};
