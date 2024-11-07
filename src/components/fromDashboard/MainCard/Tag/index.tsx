import { useState } from "react";

import * as S from "./styles";

import checked from "../../../../assets/images/checked.png";
import notChecked from "../../../../assets/images/notChecked.png";
import bell from "../../../../assets/images/bell.png";

export interface TagProps {
  status: "Pendente" | "Concluído" | "Lembrete";
}

export const Tag = (props: TagProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    if (!isChecked) {
      setIsChecked(true);
    }
  };

  return (
    <S.Tag>
      {props.status === "Lembrete" ? (
        <img src={bell} alt="" />
      ) : props.status === "Pendente" ? (
        <S.Checkbox
          onClick={handleCheckboxClick}
          src={isChecked ? checked : notChecked}
        />
      ) : props.status === "Concluído" ? (
        <S.Checkbox src={checked} />
      ) : (
        <></>
      )}

      {isChecked ? (
        <S.Content status="Concluído">Concluído</S.Content>
      ) : (
        <S.Content status={props.status}>{props.status}</S.Content>
      )}
    </S.Tag>
  );
};
