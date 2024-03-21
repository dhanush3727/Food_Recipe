import { useContext } from "react";
import { NavLink } from "react-router-dom";
import FoodDataContext from "../../context/FoodDataContext";

const Navbar = () => {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(FoodDataContext);

  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold">
        <NavLink to={"/"}>Food Recipe</NavLink>
      </h2>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          placeholder="Enter Items"
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-red-100 focus:shadow-red-200"
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorite"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Favorite
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
