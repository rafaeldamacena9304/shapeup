import * as S from "./styles";
import edit from "../../../../assets/images/edit.svg";
import save from '../../../../assets/images/save.svg'

interface ProfileProps {
  name: string;
  id:number;
  onClick: (value: boolean) => void
  isEditing: boolean
  onSave: () => void
}

export const Profile = (props: ProfileProps) => {
  return (
    <S.Profile>
      <h4>{props.name} (#{props.id})</h4>
      {props.isEditing ? (
        <img onClick={props.onSave} src={save} alt="Save Icon" />
      ): 
        <img onClick={() => props.onClick(!props.isEditing)} src={edit} alt="Edit Icon" />  
      }
      
    </S.Profile>
  );
};
