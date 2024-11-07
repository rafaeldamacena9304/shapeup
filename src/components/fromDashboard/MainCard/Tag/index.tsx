import { useState } from "react";

import * as S from "./styles";

import checked from "../../../../assets/images/checked.png";
import notChecked from "../../../../assets/images/notChecked.png";

export interface TagProps {
  status: "Pendente" | "Concluído" | "Lembrete";
}

export const Tag = (props: TagProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <S.Tag>
      <S.Checkbox
        onClick={() => setIsChecked(!isChecked)}
        src={isChecked ? checked : notChecked}
      />
      {isChecked ? (
        <S.Content status="Concluído">Concluído</S.Content>
      ) : (
        <S.Content status={props.status}>{props.status}</S.Content>
      )}
    </S.Tag>
  );
};
