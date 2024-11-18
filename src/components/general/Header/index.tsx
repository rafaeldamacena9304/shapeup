import { useLocation } from "react-router-dom";
import { useState } from "react";

import { HamburgerMenu } from "./HamburgerMenu";

import * as S from "./styles";

import logo from "../../../assets/images/logo.svg";

export const Header = () => {
  const location = useLocation();

  const [navVisibility, setNavVisibility] = useState(false)

  return (
    <S.Header>
      <div className="container">
        <S.LogoLink to="/">
          <S.Logo src={logo} alt="Logo ShapeUp" />
        </S.LogoLink>
        <HamburgerMenu navVisibility={navVisibility}  setNavVisibility={setNavVisibility} />
        <S.Nav isVisible={navVisibility}>
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
          <S.NavLink
            className={location.pathname === "/diet" ? "active" : ""}
            to="/diet"
          >
            Minha dieta
          </S.NavLink>
        </S.Nav>
      </div>
    </S.Header>
  );
};
