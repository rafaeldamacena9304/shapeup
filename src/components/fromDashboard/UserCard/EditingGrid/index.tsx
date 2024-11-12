import { UserModel } from "../../../../models/UserModel";

import * as S from "./styles";


interface EditingGridProps extends UserModel {
  tempUser: UserModel;
  setTempUser: (user: UserModel) => void
  user: UserModel
}

export const EditingGrid = ({tempUser, setTempUser, user}: EditingGridProps) => {
  return (
    <S.EditGrid>
      <S.Item>
        Peso:
        <S.ValueInput
          type="number"
          placeholder={String(user.weight)}
          onChange={(e) =>
            setTempUser({ ...tempUser, weight: Number(e.target.value) })
          }
        />
      </S.Item>
      <S.Item>
        Sexo:
        <S.Value>{user.gender}</S.Value>
      </S.Item>
      <S.Item>
        Idade:
        <S.ValueInput
          type="number"
          placeholder={String(user.age)}
          onChange={(e) =>
            setTempUser({ ...tempUser, age: Number(e.target.value) })
          }
        />
      </S.Item>
      <S.Item>
        Altura:
        <S.ValueInput
          type="number"
          placeholder={String(user.height)}
          onChange={(e) =>
            setTempUser({ ...tempUser, height: Number(e.target.value) })
          }
        />
      </S.Item>
      <S.Item>
        IMC: <S.Value>{user.bmi}</S.Value>
      </S.Item>
      <S.Item>
        TMB: <S.Value>{user.bmr}kcal</S.Value>
      </S.Item>
    </S.EditGrid>
  );
};
