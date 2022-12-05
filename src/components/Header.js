import { Link, Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./App/App.scss";
import { AiFillHome, AiFillSetting } from "react-icons/ai";


export default function Header({userID, setUserID}) {
 
  const navigate = useNavigate();
  const goHome = () => {
    navigate("../")
  };

  const logout = () => {
    setUserID(null);
    goHome();
  };

  let headerContainer = (
    <>
      <h3>
        <Link to={"/login"} className="top-button sign-in-button">Sign In</Link>
      </h3>
      <h3>
        <Link to={"/signUp"} className="top-button">Sign Up</Link>
      </h3>
    </>
  )

  if (userID) {
    headerContainer = (
      <>
        <h3>
          <button className="top-button" type="submit" onClick={logout}>Sign Out</button>
        </h3>
        <h3>
          <Link to={"/dashboard"} className="top-button"><AiFillSetting /></Link>
        </h3>
      </>
    ) 
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
          {headerContainer}
          <h1>
          <Link to={"/"} className="top-button"><AiFillHome /></Link>
          </h1>
        </div>
      </div>
      <section className="mainpage">
        <div className="mainpage-sidebar"> <Sidebar /> </div>
        <div className="mainpage-content"> <Outlet className="out-let"/> </div>
      </section>
    </>
  );
}
