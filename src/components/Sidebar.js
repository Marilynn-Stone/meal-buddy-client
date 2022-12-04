import { Link } from "react-router-dom";

export default function Sidebar() {

  return (

  <div className="sidebar">

    <li className="sidebar-text">
      <Link to={"/TableMenu"}>Menu</Link>
    </li>
    
    <li className="sidebar-text">
      <Link to={"/about"}>About</Link>
    </li>
    <li className="sidebar-text">
      <Link to={"/howTo"}>How To</Link>
    </li>  

  </div>
  );

}