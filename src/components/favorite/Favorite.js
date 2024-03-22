import FoodDataContext from "../../context/FoodDataContext";
import RecipeItem from "../home/RecipeItem";
import { useContext } from "react";
import "./Favorite.css";

const Favorite = () => {
  const { favoriteList, loading } = useContext(FoodDataContext);
  if (loading) {
    return <h2>Loading... Please Wait</h2>;
  }
  return (
    <div className="favorite-container">
      {favoriteList && favoriteList.length > 0 ? (
        favoriteList.map((item) => <RecipeItem key={item.id} item={item} />)
      ) : (
        <div>
          <p className="favorite-text">Nothing is add.</p>
        </div>
      )}
    </div>
  );
};

export default Favorite;
