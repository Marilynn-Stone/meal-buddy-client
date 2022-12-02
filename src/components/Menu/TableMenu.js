import { useEffect, useState } from "react";
import { weeklyMenuCall } from "../../hooks/serverAndDBCalls";
import TableMenuItem from "./TableMenuItem";

export default function TableMenu(props) {

  const [weeklyMenu, setWeeklyMenu] = useState([])
  
  useEffect(() => {
    const fetchData = async() => {
      const data = await weeklyMenuCall(Number(localStorage.getItem('userID')));
      console.log(data)
      setWeeklyMenu(data)
    }
    fetchData();
  }, [])

  const menuItems = (weeklyMenu).map((item) =>(
    <TableMenuItem 
      key={item.spoonacular_id}
      item_id={item.spoonacular_id}
      day={item.day}
      meal={item.category}
      name={item.name}
      onClick={()=> {}}
    />
  ));
  
  // console.log(menuItems);

  return <ul>{menuItems}</ul>;

}