import { useContext } from "react";
import FoodDataContext from "../../context/FoodDataContext";
import RecipeItem from "./RecipeItem";

const Home = () => {
  const { recipeList, loading } = useContext(FoodDataContext);
  if (loading) {
    return <h2>Loading... Please Wait</h2>;
  }
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem key={item.id} item={item} />)
      ) : (
        <div>
          <p className="lg:text-4x1 text-xl text-center text-black font-extrabold">
            Nothing to show. Search something
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
