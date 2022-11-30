import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./components/App/App";
import About from "./components/About";
import Menu from "./components/Menu/Menu";
import GroceryList from "./components/GroceryList/GroceryList";
import Login from "./components/user/Login";
import LogOut from "./components/LogOut";
import UserIndex from "./components/user/UserIndex";
import HowTo from "./components/HowTo";
import SignUp from "./components/SignUp";


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="logIn" element={<Login />} />
      <Route path="logOut" element={<LogOut />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="menu/:id" component={<Menu />} />
      <Route path="profile/:id" element={<UserIndex />} />
      <Route path="groceryList" element={<GroceryList />} />
      <Route path="aboutUs" element={<About />} />
      <Route path="howTo" element={<HowTo />} />
    </Routes>
  </Router>
);
