import DailyMenu from "./DailyMenu";
import React, { useState } from "react";
import "./Menu.css";

export default function Menu() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);
  const [diet, setDiet] = useState("");
  const [exclude, setExclude] = useState("");

  //current set of functions to retrieve user input for restrictions and calories
  //-------------------------------------------------------------------------------------
  function handleCalories(e) {
    setCalories(e.target.value);
  }

  function handleDiet(e) {
    setDiet(e.target.value);
  }

  function handleExclude(e) {
    setExclude(e.target.value);
  }
  //-------------------------------------------------------------------------------------

  // Function for the API call to generate three meal menu. Currently set to single day with params
  //-------------------------------------------------------------------------------------
  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=efbb269880b24a5e8db3716408b96b6f&timeFrame=day&targetCalories=${calories}&diet=${diet}&exclude=${exclude}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data.meals);
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  }
  //-------------------------------------------------------------------------------------

  return (
    <div className="App">
      <section className="controls">
        <input
          type="number"
          placeholder="Calories (e.g 2000)"
          onChange={handleCalories}
        />
        <input type="text" placeholder="diet" onChange={handleDiet} />
        <input type="text" placeholder="exclude" onChange={handleExclude} />
        <div></div>
        {/* call API */}
        <button onClick={getMealData}>Get Meals</button>
      </section>
      <div className="daily-menu">
        {/* if mealData has info render DailyMenu */}
        <div>{mealData && <DailyMenu mealData={mealData} />}</div>
      </div>
    </div>
  );
}
