import { useContext } from "react";
import { NavLink } from "react-router-dom";
import FoodDataContext from "../../context/FoodDataContext";
import "./Navbar.css";

const Navbar = () => {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(FoodDataContext);

  return (
    <nav className="navbar-container">
      <h2 className="navbar-title">
        <NavLink to={"/"}>Food Recipe</NavLink>
      </h2>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
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
