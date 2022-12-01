import { Link, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { AiFillHome } from "react-icons/ai";


export default function Header() {
  return (
    <>
      <div className="header">
        <div className="header-left">
        <h1>
          <Link to={"/"}><AiFillHome /></Link> 
          </h1>
          <h1 className="child bounce">
            MealBuddy
          </h1>

        </div>
        <div className="header-right">
          <h3>
            <Link to={"/login"} className="top-button">Sign In</Link>
          </h3>
          <h3>
            <Link to={"/logout"} className="top-button">Sign Out</Link>
          </h3>
          <h3>
            <Link to={"/signUp"} className="top-button">Sign Up</Link>
          </h3>
          {/* <h3>
            <Link to={"/dashboard"} className="top-button">Profile</Link>
          </h3> */}
          <h3>
            <Link to={"/dashboard"} className="top-button">Settings</Link>
          </h3>
          {/* <h3>
            <Link to={"/dietarySettings"} className="top-button">Dietary Settings</Link>
          </h3> */}
        </div>
      </div>
      <section className="mainpage">
        <div className="mainpage-sidebar"> <Sidebar /> </div>
        <div className="mainpage-content"> <Outlet /> </div>

      </section>
    </>
  );
}
