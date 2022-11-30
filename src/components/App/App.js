import { Link } from "react-router-dom";

import "./App.scss";
import Header from "../Header";
import Sidebar from "../Sidebar";
// import MainPage from "../MainPage";

function App() {

  return (
    <>
      <Header />
      <Sidebar  />
      <div className="wrapper">
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
          </div>
          <div className="mainpage">
            {/* <MainPage /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
