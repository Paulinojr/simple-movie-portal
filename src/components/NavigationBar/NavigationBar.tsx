import React from "react";
import { NavBar, NavLink } from "./NavigationBar.styles";

const NavigationBar: React.FC = () => {
  return (
    <NavBar>
      <NavLink to="/">Movies</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </NavBar>
  );
};

export default NavigationBar;
