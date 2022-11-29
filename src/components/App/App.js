import { Link } from "react-router-dom";

import "./App.scss";
import Header from "../Header";
import Sidebar from "../Sidebar";
import MainPage from "../MainPage";
import Modal from "../Modal";
import SignUp from "../SignUpPage";
import GroceryList from "../GroceryList/GroceryList";
import DailyMenu from "../Menu/DailyMenu";
import FullPageMenuItem from "../Menu/FullPageMenuItem";
import Menu from "../Menu/Menu";
import MiniMenuItem from "../Menu/MiniMenuItem";
import AccountInfo from "../user/AccountInfo";
import Dashboard from "../user/Dashboard";
import DietarySettings from "../user/DietarySettings";
import Login from "../user/Login";
import UserIndex from "../user/UserIndex";
import About from "../About";
import HowTo from "../HowTo";
import LoggedIn from "../LoggedIn";
import LogOut from "../LogOut";
import PopUp from "../PopUp";


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
      
      <MainPage checkCookie={checkCookie} />
       <GroceryList />
       <Menu />
       <FullPageMenuItem />
      <AccountInfo />
      <Dashboard />
      <DietarySettings />
      <Login />
      <UserIndex />
      <About />
      <Header />
      <HowTo />
      <LoggedIn />
      <LogOut />
      <PopUp />
      <SignUp />
      {/* <DailyMenu /> */}
      {/*<MiniMenuItem /> */}


    </>
  );
}

export default App;
