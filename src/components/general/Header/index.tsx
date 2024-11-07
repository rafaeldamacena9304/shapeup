import { useLocation } from "react-router-dom";

import * as S from "./styles";

import logo from "../../../assets/images/logo.svg";

export const Header = () => {
  const location = useLocation();

  return (
    <S.Header>
      <div className="container">
        <S.LogoLink to="/">
          <S.Logo src={logo} alt="Logo ShapeUp" />
        </S.LogoLink>
        <S.Nav>
          <S.NavLink
            className={location.pathname === "/dashboard" ? "active" : ""}
            to="/dashboard"
          >
            Dashboard
          </S.NavLink>
          <S.NavLink
            className={location.pathname === "/workout" ? "active" : ""}
            to="/workout"
          >
            Meu treino
          </S.NavLink>
          <S.NavLink to="/">Minha dieta</S.NavLink>
        </S.Nav>
      </div>
    </S.Header>
  );
};
