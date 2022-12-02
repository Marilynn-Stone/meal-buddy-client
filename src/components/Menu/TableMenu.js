import { useEffect, useState } from "react";
import { weeklyMenuCall } from "../../hooks/serverAndDBCalls";
import TableMenuItem from "./TableMenuItem";

export default function TableMenu(props) {

  const [weeklyMenu, setWeeklyMenu] = useState([])

  const menuItems = (weeklyMenu?.data||[]).map((item) =>(
    <TableMenuItem 
      key={item.id}
      item_id={item.id}
      day={item.day}
      meal={item.meal}
      name={item.title}
    />
  ));
  
  useEffect(() => {
    setWeeklyMenu(weeklyMenuCall(1));
  }, [])

  // useEffect(() => {
  //   console.log("hello Menu")
  // }, [weeklyMenu])

  return <ul>{menuItems}</ul>;

}