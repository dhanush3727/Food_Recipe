import { useContext } from "react";
import FoodDataContext from "../../context/FoodDataContext";
import RecipeItem from "./RecipeItem";
import "./Home.css";

const Home = () => {
  const { recipeList, loading } = useContext(FoodDataContext);
  if (loading) {
    return <h2>Loading... Please Wait</h2>;
  }
  return (
    <div className="home-container">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem key={item.id} item={item} />)
      ) : (
        <div>
          <p className="home-text">Nothing to show. Search something</p>
        </div>
      )}
    </div>
  );
};

export default Home;
