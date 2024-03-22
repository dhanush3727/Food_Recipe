import { Link } from "react-router-dom";
import "./RecipeItem.css";

const RecipeItem = ({ item }) => {
  return (
    <div className="item-container">
      <div className="item-img">
        <img src={item?.image_url} alt="recipe item" className="black w-full" />
      </div>
      <div>
        <span className="item-publisher">{item?.publisher}</span>
        <h3 className="item-title">{item?.title}</h3>
        <Link to={`/recipe-item/${item?.id}`} className="item-detail">
          Recipe Detail
        </Link>
      </div>
    </div>
  );
};

export default RecipeItem;
