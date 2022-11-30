import React from "react";
import MiniMenuItem from "./MiniMenuItem";
export default function MealList({ mealData }) {
  return (
    <>
      <section></section>
      <ul></ul>
      <section className="meals">
        {mealData.map((meal) => {
          return <MiniMenuItem key={meal.id} meal={meal} />;
        })}
      </section>
    </>
  );
}
