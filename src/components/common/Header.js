import react from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = { color: "orange" };
  return (
    <nav>
      <NavLink activeStyle={activeStyle} exact to="/">
        Home
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/courses">
        courses
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/about">
        about
      </NavLink>
    </nav>
  );
}

export default Header;
