import * as S from './styles';

interface MainTitleProps {
    content:string
}

export const MainTitle = (props: MainTitleProps) => {

    return(
        <S.MainTitle>{props.content}</S.MainTitle>
    )
}
