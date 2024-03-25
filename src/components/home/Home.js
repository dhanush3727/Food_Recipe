import { useContext } from "react";
import FoodDataContext from "../../context/FoodDataContext";
import RecipeItem from "./RecipeItem";
import { AnimatedCircle } from "react-craftify-spinners";
import "./Home.css";

const Home = () => {
  const { recipeList, loading } = useContext(FoodDataContext);
  if (loading) {
    return (
      <div className="loading">
        <AnimatedCircle color="#000" />
      </div>
    );
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
