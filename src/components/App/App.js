import { Link } from "react-router-dom";

import "./App.scss";
import Header from "../Header";
import Sidebar from "../Sidebar";
import MainPage from "../MainPage";
import Modal from "../Modal";
import SignUp from "../SignUpPage";

function App(session) {
  function checkCookie() {
    const isUserLoggedIn = document.cookie
      .split("; ")
      .find((row) => row.startsWith("isUserLoggedIn"))
      ?.split("=")[1];
    if (isUserLoggedIn === "false") {
      console.log("User not logged in.");
    } else {
      console.log("User logged in.");
    }
  }

  return (
    <>
      
      <MainPage checkCookie={checkCookie}/>
      
       {/* <div className="wrapper">
        <div className="Home">
          <div className="sidebar">
            <p className="sidebar-text">links to:</p>
            <li className="sidebar-text">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="sidebar-text">
              <Link to={"/howTo"}>How To</Link>
            </li>
            <li className="sidebar-text">
              <Link to={"/menu"}>Menu</Link>
            </li>
          </div>  */}
          
           
          
          
        {/* </div>
      </div> */}
      
    </>
  );
}

export default App;
