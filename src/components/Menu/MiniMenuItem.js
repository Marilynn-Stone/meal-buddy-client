import React, { useState, useEffect } from "react";
import "./Meal.css";

export default function MiniMenuItem({ meal }) {
  const [imageUrl, setImageUrl] = useState("");
  const [recipe, setRecipe] = useState("");

  // UseEffect for API call to retrieve meal information
  //-------------------------------------------------------------------------------------
  useEffect(() => {
    const url = `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=efbb269880b24a5e8db3716408b96b6f`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setRecipe(data);
        setImageUrl(data.image);
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);
  //-------------------------------------------------------------------------------------

  return (
    <article>
      <h1>{meal.title}</h1>
      <img src={imageUrl} alt="recipe" className="recipe-image"></img>
      <a href={recipe.sourceUrl} target="_blank">
        <button onClick={() => console.log("Button Clicked")}>RECIPE</button>
      </a>
    </article>
  );
}
