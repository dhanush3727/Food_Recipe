import { createContext, useState } from "react";
import { useNavigate } from "react-router";

const FoodDataContext = createContext();

export const FoodDataProvider = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);

  const navigate = useNavigate();

  const handleAddFavorite = (currentItem) => {
    let copyFavoriteList = [...favoriteList];
    const index = copyFavoriteList.findIndex(
      (item) => item.id === currentItem.id
    );
    if (index === -1) {
      copyFavoriteList.push(currentItem);
    } else {
      copyFavoriteList.splice(currentItem);
    }
    setFavoriteList(copyFavoriteList);
  };

  console.log(favoriteList, "favorite");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await res.json();
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParam("");
        navigate("/");
      }
    } catch (err) {
      console.log(e);
      setLoading(false);
      setSearchParam("");
    }
  };
  return (
    <FoodDataContext.Provider
      value={{
        searchParam,
        setSearchParam,
        loading,
        setLoading,
        recipeList,
        setRecipeList,
        recipeDetails,
        setRecipeDetails,
        favoriteList,
        setFavoriteList,
        handleAddFavorite,
        handleSubmit,
      }}
    >
      {children}
    </FoodDataContext.Provider>
  );
};

export default FoodDataContext;
