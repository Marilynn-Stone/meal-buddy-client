import MealList from './DailyMenu';
import DailyMenu from './DailyMenu';
import FullPageMenuItem from './FullPageMenuItem';
import Menu from './Menu';
// import { Link } from 'react-router-dom';
// import { React, useEffect } from 'react';


export default function RecipeItem({ Menu, DailyMenu, MealList, FullPageMenuItem } ) {
  const menu = Menu;
  const dailyMenu = DailyMenu;
  const mealList = MealList;
  const fullPageMenuItem = FullPageMenuItem;


  return (
  <>
    <h1>Recipe Item</h1>
    <p> this is the recipe item</p>
    <br />

    {menu}
    {dailyMenu}
    {mealList}
    {fullPageMenuItem}

  </>
  );
}