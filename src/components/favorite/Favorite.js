import FoodDataContext from "../../context/FoodDataContext";
import RecipeItem from "../home/RecipeItem";
import { useContext } from "react";

const Favorite = () => {
  const { favoriteList, loading } = useContext(FoodDataContext);
  if (loading) {
    return <h2>Loading... Please Wait</h2>;
  }
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoriteList && favoriteList.length > 0 ? (
        favoriteList.map((item) => <RecipeItem key={item.id} item={item} />)
      ) : (
        <div>
          <p className="lg:text-4x1 text-xl text-center text-black font-extrabold">
            Nothing is add.
          </p>
        </div>
      )}
    </div>
  );
};

export default Favorite;
