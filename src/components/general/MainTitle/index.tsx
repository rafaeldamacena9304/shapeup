import * as S from './styles';

interface MainTitleProps {
    children:string
}

export const MainTitle = (props: MainTitleProps) => {

    return(
        <S.MainTitle>{props.children}</S.MainTitle>
    )
}
