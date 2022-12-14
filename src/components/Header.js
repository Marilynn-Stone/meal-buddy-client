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
    setUserID();
    goHome();
  };

  let headerContainer = (
    <>
      <h3>
        <Link to={"/login"} className="top-button sign-in-button">Sign In</Link>
      </h3>
      <h3>
        <Link to={"/signUp"} className="top-button sign-up-button">Sign Up</Link>
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
      <div className="header" id="whole-header">
        <div className="header-left">
          <img src="https://iili.io/HCnmwbt.png" alt="logo"/>
          </div>
          <div className="header-center">
            <h1 className="child bounce">
              <span>M</span>eal<span>B</span>uddy
            </h1>
          </div>

        
        <div className="header-right">
          {headerContainer}
          <h3>
            <Link to={"/"} className="top-button home-button"><AiFillHome /></Link>
          </h3>
        </div>
      </div>
      <section className="mainpage">
      
        <div className="mainpage-sidebar"> 
          <Sidebar userID={userID}/> 
        </div>
        <div className="mainpage-content"> 
          <Outlet className="out-let"/> 
          <img className="big-logo" src={"https://iili.io/HC1ic91.png"} alt="logo"/>

        </div>
      </section>
    </>
  );
}
