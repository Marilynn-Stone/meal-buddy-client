import { Link } from "react-router-dom";

export default function Sidebar(userID) {
  console.log("userID:", userID);

  return (

  <div className="sidebar">
    <ul className="sidebar-text-container">
      
        {userID &&
          <li className="sidebar-text">
            <Link to={"/tableMenu"}>Weekly Menu</Link>
          </li> 
        }
      
      <li className="sidebar-text">
        <Link to={"/about"}>About</Link>
      </li>
      <li className="sidebar-text">
        <Link to={"/howTo"}>How To</Link>
      </li>  
    </ul>
  </div>
  );

}