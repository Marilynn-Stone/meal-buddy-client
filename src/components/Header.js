import { Link, Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./App/App.scss";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import LargeLogo from "./LargeLogo";



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
      
          <img src="https://iili.io/HCnmwbt.png" alt="logo"/>
          
          <h1 className="child bounce">
            <span>M</span>eal<span>B</span>uddy
          </h1>

        </div>
        <div className="header-right">
          <button className="header-button">
            <Link to={"/login"} className="header-button">Sign In</Link>
          </button>
          
            {/* <div className="top-button"> */}
              <button className="header-button" type="submit" onClick={logout}>Sign Out</button>
            {/* </div>   */}
          
          <button>
            <Link to={"/signUp"} className="header-button">Sign Up</Link>
          </button>
          <h3>
            <Link to={"/dashboard"} className="top-button"><AiFillSetting /></Link>
          </h3>
          <h1>
          <Link to={"/"}><AiFillHome /></Link>
          </h1>

        </div>
      </div>
      <section className="mainpage">
        <div className="mainpage-sidebar"> <Sidebar /> </div>
        <div className="mainpage-content"> <Outlet className="out-let"/> </div>
        <LargeLogo className="large-logo"/>
        
      </section>
    </>
  );
}
