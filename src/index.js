import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.scss";
// import App from "./components/App/App";
// import WelcomeBack from "./components/WelcomeBack";
import About from "./components/About";
import Menu from "./components/Menu/Menu";
import HowTo from "./components/HowTo";
import SignUp from "./components/SignUp";
import Login from "./components/user/Login";
import AccountInfo from "./components/user/AccountInfo";
import Dashboard from "./components/user/Dashboard";
import DailyMenu from "./components/Menu/DailyMenu";
import TableMenu from "./components/Menu/TableMenu";
import TableMenuItem from "./components/Menu/TableMenuItem";
import RecipeItem from "./components/Menu/RecipeItem";
import DietarySettings from "./components/user/DietarySettings";
import GroceryList from "./components/GroceryList/GroceryList";
import Header from "./components/Header";
import MiniMenuItem from "./components/Menu/MiniMenuItem";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Header />} >
        <Route path="about" element={<About />} />
        <Route path="howTo" element={<HowTo />} />
        <Route path="logIn" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />

        <Route path="menu" element={<Menu />} />
        <Route path="dailyMenu" element={<DailyMenu />} />
        <Route path="miniMenuItem" element={<MiniMenuItem />} />

        <Route path="TableMenu" element={<TableMenu />} />
        <Route path="TableMenuItem" element={<TableMenuItem />} />

        <Route path="groceryList" element={<GroceryList />} />

        <Route path="RecipeItem/:id" element={<RecipeItem />} />

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dietarySettings" element={<DietarySettings />} />
        <Route path="accountInfo" element={<AccountInfo />} />
         
      </Route>
    </Routes>
  </Router>
);
