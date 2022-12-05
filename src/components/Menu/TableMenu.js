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
      key={item.id}
      item_id={item.spoonacular_id}
      //day={item.day}
      //meal={item.meal}
      name={item.title}
    />
  ));
  
  // console.log(menuItems);

  return (
  
  <>
  <div className="weekly-menu-container">
  <table>
        <tr>
          <th>{ /* empty on purpose - DAYS ROW */ } </th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
        </tr>
        <tr>
        <td className="meal-title">Breakfast</td>
          <td>
            <p>{menuItems[0]}</p>
            
          </td>
          <td>
            <p>{menuItems[3]}</p>
            
          </td>
          <td>
            <p>{menuItems[6]}</p>
            
          </td>
          <td>
            <p>{menuItems[9]}</p>
            
          </td>
          <td>
            <p>{menuItems[12]}</p>
            
          </td>
          <td>
            <p>{menuItems[15]}</p>
            
          </td>
          <td>
            <p>{menuItems[18]}</p>
            
          </td>

        </tr>
       
        <tr>
          <td className="meal-title">Lunch</td>
          <td>
            <p>{menuItems[1]}</p>
            
          </td>
          <td>
            <p>{menuItems[4]}</p>
            
          </td>
          <td>
            <p>{menuItems[7]}</p>
            
          </td>
          <td>
            <p>{menuItems[10]}</p>
            
          </td>
          <td>
            <p>{menuItems[13]}</p>
            
          </td>
          <td>
            <p>{menuItems[16]}</p>
            
          </td>
          <td>
            <p>{menuItems[19]}</p>
            
          </td>

        </tr>
        <tr>
          <td className="meal-title">Supper</td>
          <td>
            <p>{menuItems[2]}</p>
            
          </td>          
          <td>
            <p>{menuItems[5]}</p>
            
          </td>
          <td>
            <p>{menuItems[8]}</p>
            
          </td>
          <td>
            <p>{menuItems[11]}</p>
            
          </td>
          <td>
            <p>{menuItems[14]}</p>
            
          </td>
          <td>
            <p>{menuItems[17]}</p>
            
          </td>
          <td>
            <p>{menuItems[20]}</p>
            
          </td>
        </tr>
     

      </table>
        
        {/* <div className="menu-items-container">
    <ul>{menuItems}</ul>
    </div> */}
  
  </div>

  </>

  );
};