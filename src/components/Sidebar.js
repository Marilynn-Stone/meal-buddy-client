import React from 'react';
import { Link } from "react-router-dom";



export default function Sidebar() {

  return (

  <div className="sidebar">
    <li className="sidebar-text">
      <Link to={"/menu"}>Menu</Link>
    </li>
    <li className="sidebar-text">
      <Link to={"list"}>Grocery List</Link>
    </li>
    <li className="sidebar-text">
      <Link to={"dashboard"}>Settings</Link>
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