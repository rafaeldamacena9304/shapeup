import * as S from "./styles";

import trash from "../../../assets/images/trash.svg";

interface DeleteButtonProps {
  imageSize?: string;
  textSize?: string;
  content: string;
}

export const DeleteButton = (props: DeleteButtonProps) => {
  return (
    <S.Container>
      <S.Text textSize={props.textSize}>{props.content}</S.Text>
      <S.Trash imageSize={props.imageSize} src={trash} />
    </S.Container>
  );
};
