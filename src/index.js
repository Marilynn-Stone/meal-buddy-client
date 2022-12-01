import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./components/App/App";
import Modal from "./components/Modal";
import PopUp from "./components/PopUp";
import WelcomeBack from "./components/WelcomeBack";
import About from "./components/About";
import Menu from "./components/Menu/Menu";
import HowTo from "./components/HowTo";
import SignUp from "./components/SignUp";
import Login from "./components/user/Login";
import UserIndex from "./components/user/UserIndex";
import AccountInfo from "./components/user/AccountInfo";
import Dashboard from "./components/user/Dashboard";
import DailyMenu from "./components/Menu/DailyMenu";
import FullPageMenuItem from "./components/Menu/FullPageMenuItem";
import MiniMenuItem from "./components/Menu/MiniMenuItem";
import RecipeItem from "./components/Menu/RecipeItem";
import DietarySettings from "./components/user/DietarySettings";
import GroceryList from "./components/GroceryList/GroceryList";
import LogOut from "./components/LogOut";
import Header from "./components/Header";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Header />} >
          <Route path="/" element={<App />} />
          <Route path="logIn" element={<Login />} />
          <Route path="logOut" element={<LogOut />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="menu" element={<Menu />} />
          <Route path="profile" element={<UserIndex />} />
          <Route path="groceryList" element={<GroceryList />} />
          <Route path="about" element={<About />} />
          <Route path="welcomeBack" element={<WelcomeBack />} />
          <Route path="accountInfo" element={<AccountInfo />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dailyMenu" element={<DailyMenu />} />
          <Route path="fullPageMenuItem" element={<FullPageMenuItem />} />
          <Route path="miniMenuItem" element={<MiniMenuItem />} />
          <Route path="recipeItem" element={<RecipeItem />} />
          <Route path="dietarySettings" element={<DietarySettings />} />
          <Route path="howTo" element={<HowTo />} />
      </Route>
    </Routes>
  </Router>
);
