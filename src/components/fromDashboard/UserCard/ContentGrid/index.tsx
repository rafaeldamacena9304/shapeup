import * as S from "./styles";

interface ContentGridProps {
  weight: number;
  height: number;
  gender: string;
  age: number;
  bmi: number;
  bmr: number;
}

export const ContentGrid = (props: ContentGridProps) => {
  return (
    <S.ContentGrid>
      <S.Item>
        Peso: <S.Value>{props.weight}kg</S.Value>
      </S.Item>
      <S.Item>
        Sexo: <S.Value>{props.gender}</S.Value>
      </S.Item>
      <S.Item>
        Idade: <S.Value>{props.age} anos</S.Value>
      </S.Item>
      <S.Item>
        Altura: <S.Value>{props.height}cm</S.Value>
      </S.Item>
      <S.Item>
        IMC: <S.Value>{props.bmi}</S.Value>
      </S.Item>
      <S.Item>
        TMB: <S.Value>{props.bmr}kcal</S.Value>
      </S.Item>
    </S.ContentGrid>
  );
};
