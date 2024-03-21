import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import FoodDataContext from "../../context/FoodDataContext";

const Details = () => {
  const { recipeDetails, setRecipeDetails, handleAddFavorite, favoriteList } =
    useContext(FoodDataContext);
  const { id } = useParams();

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await res.json();
      if (data?.data) {
        setRecipeDetails(data?.data);
      }
    };
    fetchRecipeDetails();
  }, []);

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetails?.recipe?.image_url}
            alt=""
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium">
          {recipeDetails?.recipe?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {recipeDetails?.recipe?.title}
        </h3>
        <div>
          <button
            onClick={() => handleAddFavorite(recipeDetails?.recipe)}
            className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-widermt-3 inline-black shadow-md bg-black text-white "
          >
            {favoriteList &&
            favoriteList.length &&
            favoriteList.findIndex(
              (item) => item.id === recipeDetails?.recipe?.id
            ) !== -1
              ? "Remove Favorites"
              : "Add Favorite"}
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black">
            Ingredients :
            <ul className="flex flex-col gap-3">
              {recipeDetails?.recipe?.ingredients.map((ingredient) => (
                <li>
                  <span className="text-2xl font-semibold text-black">
                    {ingredient.quantity} {ingredient.unit}
                  </span>
                  <span className="text-2xl font-semibold text-black">
                    {ingredient.description}
                  </span>
                </li>
              ))}
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Details;
