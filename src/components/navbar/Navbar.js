import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <h2 className="nav-title">
        <NavLink to={"/"}>Food Receipe</NavLink>
      </h2>
      <form action="">
        <input
          type="text"
          name="search"
          placeholder="Enter Items"
          className="navbar-input"
        />
      </form>
      <ul className="nav-item">
        <li>
          <NavLink to={"/"} className="navbar-list">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/favorite"} className="navbar-list">
            Favorite
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
