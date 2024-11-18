import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  position:sticky;
  top:0;
  left:0;
  width: 100%;
  background-color: var(--black);
  padding: 24px 0;
  margin-bottom: 64px;
  z-index:3;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width:576px){
    margin-bottom:36px;
  }
`;

export const Nav = styled.nav<{isVisible?: boolean}>`
  display: flex;
  align-items: center;

  @media (max-width:576px){
    display:${ props => props.isVisible ? "flex" : "none" };
    flex-direction:column;
    width:100%;
    position:absolute;
    align-items: center;
    top:98px;
    left:0;
    background-color:var(--black);
    padding:16px;
    z-index:1;
  }
`;
export const LogoLink = styled(Link)`
  text-decoration: none;
`;
export const Logo = styled.img`
  width: 140px;
  height: 32px;

  &:hover {
    cursor: pointer;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 16px;

  &:not(:last-child) {
    margin-right: 48px;

    @media (max-width:576px){
      margin-bottom:8px;
      margin-right:0;
    }
  }
`;
