import * as S from './styles'

import logo from '../../../assets/images/logo.svg';

export const Header = () => {

    return(
        <S.Header>
            <div className="container">
                <S.Logo src={logo} alt="Logo ShapeUp"/>
                <S.Nav>
                    <S.NavLink to='/'>Meu treino</S.NavLink>
                    <S.NavLink to='/'>Minha dieta</S.NavLink>
                </S.Nav>
            </div>
        </S.Header>
    )
}