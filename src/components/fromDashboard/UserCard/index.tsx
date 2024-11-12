import { useDispatch, useSelector } from "react-redux";
import { ContentGrid } from "./ContentGrid";
import { Profile } from "./Profile";
import * as S from "./styles";
import { RootState } from "../../../redux/store";
import { useState } from "react";
import { UserModel } from "../../../models/UserModel";
import { editInfo } from "../../../redux/reducers/userReducer";
import { EditingGrid } from "./EditingGrid";

export const UserCard = () => {
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.user);

  const [isEditing, setIsEditing] = useState(false);
  const [tempUser, setTempUser] = useState<UserModel>(user);

  const handleSave = () => {
    dispatch(editInfo(tempUser));
    setIsEditing(false);
  };

  return (
    <>
      <S.Card>
        {/* Editing button/trigger was made in profile component as props */}
        <Profile
          onSave={handleSave}
          isEditing={isEditing}
          onClick={() => setIsEditing(!isEditing)}
          id={user.id}
          name={user.name}
        />
        {!isEditing ? (
          <ContentGrid
            age={user.age}
            weight={user.weight}
            height={user.height}
            gender={user.gender}
            bmi={user.bmi}
            bmr={user.bmr}
          />
        ) : (
          <>
            {/* Will be show while editing, need to give all user props because we have placeholders based on current User */}

            <EditingGrid
              user={user}
              id={user.id}
              name={user.name}
              tempUser={tempUser}
              setTempUser={setTempUser}
              bmi={user.bmi}
              bmr={user.bmr}
              age={user.age}
              height={user.height}
              weight={user.weight}
              gender={user.gender}
            />
          </>
        )}
      </S.Card>
    </>
  );
};
