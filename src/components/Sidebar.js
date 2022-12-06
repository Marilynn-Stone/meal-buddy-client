import { Link } from "react-router-dom";

export default function Sidebar({userID}) {

  return (
  <div className="sidebar">
    <ul className="sidebar-text-container">     
        {userID &&
          <li className="sidebar-text">
            <Link to={"/tableMenu"}>Menu</Link>
          </li> 
        }
      <li className="sidebar-text">
        <Link to={"/about"}>About</Link>
      </li>
      <li className="sidebar-text">
        <Link to={"/howTo"}>Demo</Link>
      </li>  
    </ul>
  </div>
  );

}