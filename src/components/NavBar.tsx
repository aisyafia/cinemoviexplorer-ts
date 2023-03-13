import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <NavLink to="/">Now Playing</NavLink>
      <NavLink to="/soon">Coming Soon</NavLink>
    </div>
  );
};
export default NavBar;
