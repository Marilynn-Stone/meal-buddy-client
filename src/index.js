import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";
import "./index.scss";
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
import LargeLogo from "./components/LargeLogo";

const container = document.getElementById("root");
const root = createRoot(container);

  const App = () => {
    const [userID, setUserID] = useState(localStorage.getItem("userID"));
    useEffect(() => {
      localStorage.setItem("userID", userID)
    }, [userID])

    return (
      <Router>
        <Routes>
          <Route path="/" element={<Header userID={ userID} setUserID={setUserID}/>} >
            <Route path="about" element={<About />} />
            <Route path="howTo" element={<HowTo />} />
            <Route path="logIn" element={<Login setUserID={setUserID}/>} />
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
            
            <Route path="largeLogo" element={<LargeLogo />} />
            
          </Route>
        </Routes>
      </Router>
    );
  }
  
root.render(<App />)
