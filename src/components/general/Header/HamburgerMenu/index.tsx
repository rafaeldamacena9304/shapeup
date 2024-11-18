import * as S from './styles'

interface HamburgerMenuProps {
    setNavVisibility: (value: boolean) => void
    navVisibility: boolean
}

export const HamburgerMenu = (props: HamburgerMenuProps) => {
    return(
        <S.Container onClick={() => props.setNavVisibility(!props.navVisibility)}>
            <S.Line />
            <S.Line />
            <S.Line />
        </S.Container>
    )
}