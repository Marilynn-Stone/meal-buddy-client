import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function MiniMenuItem(props) {
  const [imageUrl, setImageUrl] = useState("");
  const [recipe, setRecipe] = useState("");

  // UseEffect for API call to retrieve meal information
  //-------------------------------------------------------------------------------------
  useEffect(() => {
    const url = `https://api.spoonacular.com/recipes/${props.meal.id}/information?apiKey=efbb269880b24a5e8db3716408b96b6f`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setRecipe(data);
        setImageUrl(data.image);
        console.log("___________MEAL DATA____________________", data);
      })
      .catch(() => {
        console.log("error");
      });
  }, [props.meal.id]);
  //-------------------------------------------------------------------------------------

  return (
    <article>
      <h1>{props.meal.title}</h1>
      <img src={imageUrl} alt="recipe" className="recipe-image"></img>
      <a href={recipe.sourceUrl} target="_blank" rel="noreferrer">
        {/* call API */}
        {/* <button onClick={() => console.log("Button Clicked")}>RECIPE</button> */}
        <Link to={`/RecipeItem/${props.meal.id}`}>
          <button>Recipe</button>
        </Link>
      </a>
    </article>
  );
}
