import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  background-color: var(--black);
  padding: 24px 0;
  margin-bottom: 64px;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
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
  }
`;
