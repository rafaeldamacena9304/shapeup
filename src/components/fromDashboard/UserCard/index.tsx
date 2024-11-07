import { UserModel } from "../../../models/UserModel";
import { ContentGrid } from "./ContentGrid";
import { Profile } from "./Profile";
import * as S from "./styles";

export const UserCard = (props: UserModel) => {
  return (
    <S.Card>
      <Profile name={props.name} />
      <ContentGrid
        age={props.age}
        weight={props.weight}
        height={props.height}
        gender={props.gender}
        bmi={props.bmi}
        bmr={props.bmr}
      />
    </S.Card>
  );
};
