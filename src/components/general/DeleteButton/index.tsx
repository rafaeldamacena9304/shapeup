import * as S from "./styles";

import trash from "../../../assets/images/trash.svg";

interface DeleteButtonProps {
  imageSize?: string;
  textSize?: string;
  content: string;
  spacement?: string;
  onClick?: () => void;
}

export const DeleteButton = (props: DeleteButtonProps) => {
  return (
    <S.Container spacement={props.spacement} onClick={props.onClick}>
      <S.Text textSize={props.textSize}>{props.content}</S.Text>
      <S.Trash imageSize={props.imageSize} src={trash} />
    </S.Container>
  );
};
