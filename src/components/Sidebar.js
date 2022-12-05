import { Link } from "react-router-dom";

export default function Sidebar() {

  return (

  <div className="sidebar">
  <ul className="sidebar-text-container">
    <li className="sidebar-text">
      <Link to={"/TableMenu"}>Menu</Link>
    </li>
    
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