import { Route, Routes, Link } from "react-router-dom";

import "./App.scss";
import Header from "../Header";
import About from "../About";
import Login from "../user/Login";
import MainPage from "../MainPage";
import Menu from "../Menu/Menu";
import GroceryList from "../GroceryList/GroceryList";
import SignUpPage from "../SignUpPage";
import SignOutPage from "../SignOutPage";
import UserIndex from "../user/UserIndex";
import HowTo from "../HowTo";

function App() {
  const App = () => (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="SignUp" element={<SignUpPage />} />
        <Route path="Login" element={<Login />} />
        <Route path="Logout" element={<SignOutPage />} />
        <Route path="Menu" component={<Menu />} />
        <Route path="UserProfile" element={<UserIndex />} />
        <Route path="GroceryList" element={<GroceryList />} />
        <Route path="AboutUs" element={<About />} />
        <Route path="HowTo" element={<HowTo />} />
      </Routes>
    </div>
  );

  return (
    <>
      <Header />
      <div className="wrapper">
        <h1>Meal-Buddy</h1>
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
            <App />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
