import * as S from "./styles";
import edit from "../../../../assets/images/edit.svg";

interface ProfileProps {
  name: string;
}

export const Profile = (props: ProfileProps) => {
  return (
    <S.Profile>
      <h4>{props.name}</h4>
      <img src={edit} alt="Edit Icon" />
    </S.Profile>
  );
};
