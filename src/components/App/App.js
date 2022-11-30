//import { Link } from "react-router-dom";

import "./App.scss";
//import Header from "../Header";
//import Sidebar from "../Sidebar";
import MainPage from "../MainPage";
<<<<<<< HEAD
//import Modal from "../Modal";
import SignUp from "../SignUpPage";
=======
import Modal from "../Modal";
import SignUp from "../SignUp";
>>>>>>> f57421823ecc172ec91e00ddd3c51a94b36e00c9
import GroceryList from "../GroceryList/GroceryList";
//import DailyMenu from "../Menu/DailyMenu";
import FullPageMenuItem from "../Menu/FullPageMenuItem";
import Menu from "../Menu/Menu";
//import MiniMenuItem from "../Menu/MiniMenuItem";
//import AccountInfo from "../user/AccountInfo";
import Dashboard from "../user/Dashboard";
//import DietarySettings from "../user/DietarySettings";
import Login from "../user/Login";
import UserIndex from "../user/UserIndex";
import About from "../About";
import HowTo from "../HowTo";
import LogOut from "../LogOut";
import PopUp from "../PopUp";
import RecipeItem from "../Menu/RecipeItem";
import WelcomeBack from "../WelcomeBack";

function App(session) {

  return (
    <>
<<<<<<< HEAD
      
      <MainPage checkCookie={checkCookie} />
      {/* <GroceryList /> */}
=======
      <MainPage />
      {/* <GroceryList />
>>>>>>> f57421823ecc172ec91e00ddd3c51a94b36e00c9
      <Menu />
      <RecipeItem />
      {/* <FullPageMenuItem />
      <Dashboard />
      <Login />
      <UserIndex />
      <About />
      <HowTo />
      <WelcomeBack />
      <LogOut />
      <PopUp />
      <SignUp /> */}
<<<<<<< HEAD


=======
>>>>>>> f57421823ecc172ec91e00ddd3c51a94b36e00c9
    </>
  );
}

export default App;
