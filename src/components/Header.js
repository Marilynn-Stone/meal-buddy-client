import { Link, Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./App/App.scss";
import { AiFillHome } from "react-icons/ai";


export default function Header() {

  const navigate = useNavigate();
  const goHome = () => {
    navigate("../")
  };
  const logout = () => {
    localStorage.removeItem("userID");
    goHome();
  }

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
            <div className="top-button">
              <button type="submit" onClick={logout}>Sign Out</button>
            </div>  
          </h3>
          <h3>
            <Link to={"/signUp"} className="top-button">Sign Up</Link>
          </h3>
          <h3>
            <Link to={"/dashboard"} className="top-button">Settings</Link>
          </h3>
        </div>
      </div>
      <section className="mainpage">
        <div className="mainpage-sidebar"> <Sidebar /> </div>
        <div className="mainpage-content"> <Outlet /> </div>
      </section>
    </>
  );
}
