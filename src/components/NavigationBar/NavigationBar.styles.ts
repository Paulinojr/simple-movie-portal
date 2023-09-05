import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = styled.nav`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 10px;
  display: flex;
  justify-content: center;

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    justify-content: space-evenly;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  margin: 0 10px;

  &:hover {
    text-decoration: underline;
  }
`;

export { NavBar, NavLink };
