import { recipeCall } from "../../hooks/serverAndDBCalls";
import { useEffect, useState } from "react";


export default function RecipeItem(props) {

  const [recipe, setRecipe] = useState({});

  console.log("number? ", props)

  useEffect(() => {
    const fetchData = async() => {
      const data = await recipeCall(Number(props.item_id));
      console.log(data)
      setRecipe(data)
    }
    fetchData();
  }, [])

  return (
  <> 
    <h1>{recipe.mealName}</h1>
    <p> this is the recipe item</p>
    <br />
    <p>{recipe.summaryDescription}</p>
    <a href="/menu/">Back to Menu</a>

  </> 
  );
}